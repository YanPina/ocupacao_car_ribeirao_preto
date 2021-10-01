# Ocupação de áreas de CAR do município de Ribeirão Preto
- Sistema Dashboard administrador para DataScience com o objetivo de armazenar, gerenciar, e processar dados de CAR(Cadastro Ambiental Rural) no município de Ribeirão Preto.
- Possibilita a criação de gráficos de porcentagem da ocupação dessas áreas de CAR, e mapa do município com as respectivas camadas.
- Seu Front-End foi desenvolvido através do Framework ReactJs com
componentes do Material-UI, ApexCharts para plotagem dos gráficos e
Mapbox para o mapa.
- Seu Back-End foi feito através do Framework
NodeJs e integração com o Banco de dados Postgresql.

![image](https://user-images.githubusercontent.com/40330135/135647845-62f249d7-4b00-488f-ac84-9f43ec556bf4.png)

## Os dados foram obtidos através de um sistema Python que realiza operações de geoprocessamento utilizando a biblioteca Geopandas.
- Possibilita a extração de dados geoespaciais de arquivos Shapefile CAR de: Área do Imóvel, APP(Área de Preservação Permanente), Reserva Legal, Vegetação Nativa, Hidrografia, Área Consolidada, Uso Restrito e a obtenção dessas áreas de ocupação em KM2 e Porcentagem no município de Ribeirao Preto.
- Utilizei a biblioteca Tkinter para criar uma interface de visualização dos dados extraídos, exportar planilha e gerar GeoJSON dos dados.

![image](https://user-images.githubusercontent.com/40330135/135640869-3c46561d-90f4-4d3c-92fd-a03a61bb9d3a.png)



### Getting Started
- npm run dev
     ####     or
- yarn run dev
