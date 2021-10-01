# Ocupação de áreas de CAR do município de Ribeirão Preto
- Sistema Dashboard administrador para DataScience com o objetivo de armazenar, gerenciar, e processar dados de CAR(Cadastro Ambiental Rural) no município de Ribeirão Preto.
- Possibilita a criação de gráficos de porcentagem da ocupação dessas áreas de CAR, e mapa do município com as respectivas camadas.
- Seu Front-End foi desenvolvido através do Framework ReactJs com
componentes do Material-UI, ApexCharts para plotagem dos gráficos e
Mapbox para o mapa.
- Seu Back-End foi feito através do Framework
NodeJs e integração com o Banco de dados Postgresql.

![image](https://user-images.githubusercontent.com/40330135/135625923-920a8c38-ad0b-48a0-a924-a12834dbcb3b.png)

## Os dados foram obtidos através de um sistema Python que realiza operações de geoprocessamento utilizando a biblioteca Geopandas.
- Possibilita a extração de dados geoespaciais de arquivos Shapefile de CAR(Cadastro Ambiental Rural), APP(Área de Preservação Permanente), Reserva Legal e Vegetação Nativa, e a obtenção dessas áreas de ocupação em KM2 e Porcentagem no município de Ribeirao Preto.
- Utilizei a biblioteca Tkinter para criar uma interface de visualização dos dados extraídos, exportar planilha e GeoJSON dos dados.
![image](https://user-images.githubusercontent.com/40330135/135629231-f37f7082-2731-4007-9aeb-aa600f56ac60.png)



### Getting Started
- npm run dev
     ####     or
- yarn run dev
