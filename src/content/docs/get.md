---
title: GET
---

## Obtener todas las películas
````
GET  /movies

200 retorna una lista de todas las películas
````
## Obtener una película por su id
````
GET  /movies/id

200 retorna la película solicitada con todos sus detalles

404 "message": "Movie not found, incorrect ID?"
````
## Obtener películas por su genero
````
GET  /movies?genre=SCI-FI

200 retorna una lista de peliculas perteneciente al genero

404 "message": "Genre not found"
````
> [!NOTE]
> Los generos disponibles son: 
> ACTION, ADVENTURE, CRIME, COMEDY, DRAMA, FANTASY, HORROR, THRILLER, SCI-FI     
> Los generos en la solicitud no son sensibles a mayusculas y minusculas.