from tkinter import *
import tkinter as tk
from tkinter import filedialog, ttk
from numpy import diff
import geopandas as gpd
import pandas as pd
from pandas.core.reshape.merge import merge
import utm
from tkinter.filedialog import asksaveasfile, asksaveasfilename

#Janela
janela = Tk()
janela.title('Ocupação de Áreas de CAR - Ribeirão Preto')
janela.geometry('710x300')
janela.resizable(True, True)
janela.minsize(width=700, height=300)
#-------------------------------------------------------------------------------------------------------------------
#Treeview que irá exibir os resultados
label_result = LabelFrame(janela, borderwidth=1, relief='solid')
label_result.place(x=10, y=70, width=700, height=150)

tv = ttk.Treeview(label_result)
tv.place(x=10, y=210, width=700, height=150)

tvscrollx = ttk.Scrollbar(label_result, orient='horizontal', command=tv.xview)
tvscrolly = ttk.Scrollbar(label_result, orient='vertical', command=tv.yview)
tv.configure(xscrollcommand=tvscrollx.set, yscrollcommand=tvscrolly.set)
tvscrollx.pack(side='bottom', fill = 'x')
tvscrolly.pack(side='right', fill = 'y')

#-------------------------------------------------------------------------------------------------------------------
def limpar():
    tv.delete(*tv.get_children())
#-------------------------------------------------------------------------------------------------------------------

        #DATA
data_rib_preto = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/Shapefile Ribeirão Preto/Shapefile Ribeirão Preto.shp')  # poligono Ribeirão Preto

data_car = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/AREA_IMOVEL/AREA_IMOVEL.shp') # poligono AREA_IMOVEL
data_app = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/APP/APP.shp') #ÁREA DE PRESERVAÇÃO PERMANENTE
data_reserva_legal = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/RESERVA_LEGAL/RESERVA_LEGAL.shp') #RESERVA_LEGAL
data_vegetacao_nativa = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/VEGETACAO_NATIVA/VEGETACAO_NATIVA.shp') #VEGETACAO_NATIVA

data_hidrografia = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/HIDROGRAFIA/HIDROGRAFIA.shp') #HIDROGRAFIA
data_area_consolidada = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/AREA_CONSOLIDADA/AREA_CONSOLIDADA.shp') #AREA_CONSOLIDADA
data_uso_restrito = gpd.read_file('/home/yan-pina/Documents/Sigma/Projeto Sigma/Car/AREA IMOVEL Ribeirão Preto/USO_RESTRITO/USO_RESTRITO.shp') #USO_RESTRITO


        #DISSOLVE
car_dissolve = data_car.dissolve(by='NOM_MUNICI')
app_dissolve = data_app.dissolve()
reserva_legal_dissolve = data_reserva_legal.dissolve()
vegetacao_nativa_dissolve = data_vegetacao_nativa.dissolve()

hidrografia_dissolve = data_hidrografia.dissolve()
area_consolidada_dissolve = data_area_consolidada.dissolve()
uso_restrito_dissolve = data_uso_restrito.dissolve()

#-------------------------------------------------------------------------------------------------------------------
area_total_df = []
def area_car_RibPreto():

    global area_total_df
    global area_total_geojson

    global app_df
    global app_geojson

    global reserva_legal_df
    global reserva_legal_geojson

    global vegetacao_nativa_df
    global vegetacao_nativa_geojson

    global hidrografia_df
    global hidrografia_geojson

    global area_consolidada_df
    global area_consolidada_geojson

    global uso_restrito_df
    global uso_restrito_geojson

    global df_results

            #AREA TOTAL DO CAR

    area_total = gpd.overlay(car_dissolve, data_rib_preto, how='intersection')

    for idx, row in area_total.iterrows():
        c = row.geometry.centroid
        utm_x, utm_y, band, zone = utm.from_latlon(c.y, c.x)
        if c.y > 0:  # Northern zone
            epsg = 32600 + band
        else:
            epsg = 32700 + band
            area_total = area_total.to_crs(epsg=epsg)

    area_total['CAR'] = 'Área Imóvel'
    area_total['AREA_KM2'] = round(area_total['geometry'].area / 1000000,3)
    area_total['PERCENTUAL'] = round((area_total['AREA_KM2'] / data_rib_preto['AREA_KM2']) * 100,2)

    area_total_df = area_total.drop(['COD_IMOVEL', 'CD_MUN', 'NUM_AREA', 'NUM_MODULO', 'TIPO_IMOVE', 'SITUACAO', 'CONDICAO_I', 'COD_ESTADO', 'geometry'], axis=1)
    area_total_df = pd.DataFrame(area_total_df)

    #GERAR GEOJSON
    area_total_geojson = area_total.drop(['COD_IMOVEL', 'CD_MUN', 'NUM_AREA', 'NUM_MODULO', 'TIPO_IMOVE', 'SITUACAO', 'CONDICAO_I', 'COD_ESTADO'], axis=1)
    area_total_geojson = gpd.GeoDataFrame(area_total)
    area_total_geojson = area_total_geojson.to_crs(epsg=4326)
    
#--------------------------------------------------------------------------------------------------------------------------------------------------------------

            #ÁREA DE PRESERVAÇÃO PERMANENTE
    app = gpd.overlay(app_dissolve, data_rib_preto, how='intersection')

    for idx, row in app.iterrows():
        c = row.geometry.centroid
        utm_x, utm_y, band, zone = utm.from_latlon(c.y, c.x)
        if c.y > 0:  # Northern zone
            epsg = 32600 + band
        else:
            epsg = 32700 + band
            app = app.to_crs(epsg=epsg)
    
    app['NM_MUN'] = area_total['NM_MUN']
    app['SIGLA_UF'] = area_total['SIGLA_UF']
    app['CAR'] = 'Área de Preservação Permanente'
    app['AREA_KM2'] = round(app['geometry'].area / 1000000,3)
    app['PERCENTUAL'] = round((app['AREA_KM2'] / data_rib_preto['AREA_KM2']) * 100,2)
    
    app_df = pd.DataFrame(app)

    #GERAR GEOJSON
    app_geojson = app.drop(['IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)
    app_geojson = gpd.GeoDataFrame(app)
    app_geojson = app_geojson.to_crs(epsg=4326)

#--------------------------------------------------------------------------------------------------------------------------------------------------------------

            #ÁREA RESERVA LEGAL
    reserva_legal = gpd.overlay(reserva_legal_dissolve, data_rib_preto, how='intersection')

    for idx, row in reserva_legal.iterrows():
        c = row.geometry.centroid
        utm_x, utm_y, band, zone = utm.from_latlon(c.y, c.x)
        if c.y > 0:  # Northern zone
            epsg = 32600 + band
        else:
            epsg = 32700 + band
            reserva_legal = reserva_legal.to_crs(epsg=epsg)
    
    reserva_legal['NM_MUN'] = area_total['NM_MUN']
    reserva_legal['SIGLA_UF'] = area_total['SIGLA_UF']
    reserva_legal['CAR'] = 'Reserva Legal'
    reserva_legal['AREA_KM2'] = round(reserva_legal['geometry'].area / 1000000,3)
    reserva_legal['PERCENTUAL'] = round((reserva_legal['AREA_KM2'] / data_rib_preto['AREA_KM2']) * 100,2)

    reserva_legal_df = pd.DataFrame(reserva_legal)

    #GERAR GEOJSON
    reserva_legal_geojson = reserva_legal.drop(['IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)
    reserva_legal_geojson = gpd.GeoDataFrame(reserva_legal)
    reserva_legal_geojson = reserva_legal_geojson.to_crs(epsg=4326)


#--------------------------------------------------------------------------------------------------------------------------------------------------------------

            #ÁREA VEGETAÇÃO NATIVA
    vegetacao_nativa = gpd.overlay(vegetacao_nativa_dissolve, data_rib_preto, how='intersection')

    for idx, row in vegetacao_nativa.iterrows():
        c = row.geometry.centroid
        utm_x, utm_y, band, zone = utm.from_latlon(c.y, c.x)
        if c.y > 0:  # Northern zone
            epsg = 32600 + band
        else:
            epsg = 32700 + band
            vegetacao_nativa = vegetacao_nativa.to_crs(epsg=epsg)
    
    vegetacao_nativa['NM_MUN'] = area_total['NM_MUN']
    vegetacao_nativa['SIGLA_UF'] = area_total['SIGLA_UF']
    vegetacao_nativa['CAR'] = 'Vegetação Nativa'
    vegetacao_nativa['AREA_KM2'] = round(vegetacao_nativa['geometry'].area / 1000000,3)
    vegetacao_nativa['PERCENTUAL'] = round((vegetacao_nativa['AREA_KM2'] / data_rib_preto['AREA_KM2']) * 100,2)

    vegetacao_nativa_df = pd.DataFrame(vegetacao_nativa)

    #GERAR GEOJSON
    vegetacao_nativa_geojson = vegetacao_nativa.drop(['IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)
    vegetacao_nativa_geojson = gpd.GeoDataFrame(vegetacao_nativa)
    vegetacao_nativa_geojson = vegetacao_nativa_geojson.to_crs(epsg=4326)


    #Faz a união de todos os resultados Dataframe
    df_concat = pd.concat([area_total_df, app_df, reserva_legal_df, vegetacao_nativa_df])
    df_results = df_concat.drop(['geometry', 'IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)

#--------------------------------------------------------------------------------------------------------------------------------------------------------------


            #ÁREA HIDROGRAFIA
    hidrografia = gpd.overlay(hidrografia_dissolve, data_rib_preto, how='intersection')

    for idx, row in hidrografia.iterrows():
        c = row.geometry.centroid
        utm_x, utm_y, band, zone = utm.from_latlon(c.y, c.x)
        if c.y > 0:  # Northern zone
            epsg = 32600 + band
        else:
            epsg = 32700 + band
            hidrografia = hidrografia.to_crs(epsg=epsg)
    
    hidrografia['NM_MUN'] = area_total['NM_MUN']
    hidrografia['SIGLA_UF'] = area_total['SIGLA_UF']
    hidrografia['CAR'] = 'Hidrografia'
    hidrografia['AREA_KM2'] = round(hidrografia['geometry'].area / 1000000,3)
    hidrografia['PERCENTUAL'] = round((hidrografia['AREA_KM2'] / data_rib_preto['AREA_KM2']) * 100,2)

    hidrografia_df = pd.DataFrame(hidrografia)

    #GERAR GEOJSON
    hidrografia_geojson = hidrografia.drop(['IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)
    hidrografia_geojson = gpd.GeoDataFrame(hidrografia)
    hidrografia_geojson = hidrografia_geojson.to_crs(epsg=4326)

#--------------------------------------------------------------------------------------------------------------------------------------------------------------

            #ÁREA CONSOLIDADA
    area_consolidada = gpd.overlay(area_consolidada_dissolve, data_rib_preto, how='intersection')

    for idx, row in area_consolidada.iterrows():
        c = row.geometry.centroid
        utm_x, utm_y, band, zone = utm.from_latlon(c.y, c.x)
        if c.y > 0:  # Northern zone
            epsg = 32600 + band
        else:
            epsg = 32700 + band
            area_consolidada = area_consolidada.to_crs(epsg=epsg)
    
    area_consolidada['NM_MUN'] = area_total['NM_MUN']
    area_consolidada['SIGLA_UF'] = area_total['SIGLA_UF']
    area_consolidada['CAR'] = 'Área Consolidada'
    area_consolidada['AREA_KM2'] = round(area_consolidada['geometry'].area / 1000000,3)
    area_consolidada['PERCENTUAL'] = round((area_consolidada['AREA_KM2'] / data_rib_preto['AREA_KM2']) * 100,2)

    area_consolidada_df = pd.DataFrame(area_consolidada)

    #GERAR GEOJSON
    area_consolidada_geojson = area_consolidada.drop(['IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)
    area_consolidada_geojson = gpd.GeoDataFrame(area_consolidada)
    area_consolidada_geojson = area_consolidada_geojson.to_crs(epsg=4326)

#--------------------------------------------------------------------------------------------------------------------------------------------------------------
    #Faz a união de todos os resultados Dataframe
    df_concat = pd.concat([area_total_df, app_df, reserva_legal_df, vegetacao_nativa_df, hidrografia_df, area_consolidada_df])
    df_results = df_concat.drop(['geometry', 'IDF', 'NOM_TEMA', 'NUM_AREA', 'CD_MUN'], axis=1)

#--------------------------------------------------------------------------------------------------------------------------------------------------------------
    df = df_results
    limpar()
    df = df_results
    tv['column'] = list(df.columns)
    tv['show'] = 'headings'
    for column in tv['column']:
        tv.heading(column, text=column)

    df_rows = df.to_numpy().tolist()
    for row in df_rows:
        tv.insert('','end', values=row)
    tv.pack()

#-------------------------------------------------------------------------------------------------------------------
#Salvar resultados em planilha
def salvar_resultados_planilha():
    # type_save = [('xlsx', '*.xlsx')]
    # save_diretorio = filedialog.asksaveasfile(filetypes = type_save, defaultextension = type_save)
    df_results.to_excel("/home/yan-pina/Documents/Sigma/Projeto Sigma/Resultados/Resultados_CAR.xlsx", 'Planilha',index=False)

def gerar_geo_json():
    # type_save = [('xlsx', '*.xlsx')]
    # save_diretorio = filedialog.asksaveasfile(filetypes = type_save, defaultextension = type_save)
    area_total_geojson.to_file("/home/yan-pina/Documents/Sigma/Projeto Sigma/Resultados/AreaTotal.geojson", driver='GeoJSON')

    app_geojson.to_file("/home/yan-pina/Documents/Sigma/Projeto Sigma/Resultados/APP.geojson", driver='GeoJSON')

    reserva_legal_geojson.to_file("/home/yan-pina/Documents/Sigma/Projeto Sigma/Resultados/RESERVA_LEGAL.geojson", driver='GeoJSON')

    vegetacao_nativa_geojson.to_file("/home/yan-pina/Documents/Sigma/Projeto Sigma/Resultados/VEGETACAO_NATIVA.geojson", driver='GeoJSON')


#-------------------------------------------------------------------------------------------------------------------
#Botão que mostrará o resultado geral
botao_result_geral = Button(janela, width=20, text="Mostrar resultados", command=area_car_RibPreto) #Conteudo do botão
botao_result_geral.place(x=250, y=20) #Localização do botão na tela
#------------------------------------------------------------------------------------------------------------------
botao_salvar_planilha = Button(janela, width=25, text="Salvar resultados em planilha", command=salvar_resultados_planilha) #Conteudo do botão
botao_salvar_planilha.place(x=100, y=250) #Localização do botão na tela
#-------------------------------------------------------------------------------------------------------------------
botao_gerar_geojson = Button(janela, width=15, text="Gerar GeoJSON", command=gerar_geo_json) #Conteudo do botão
botao_gerar_geojson.place(x=400, y=250) #Localização do botão na tela

#-------------------------------------------------------------------------------------------------------------------
janela.mainloop()