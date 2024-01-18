---
title: PUT
---

## Modificar totalmente una película 

````
PUT  /movies/id

Content-Type: application/json

{
	"title": "Parque jurasico",
	"year": 2010,
	"director": "Steven Spielberg",
	"duration": 187,
	"poster": "https://vice-press.com/cdn/shop/products/Jurassic-Park-Editions-poster-florey.jpg?v=1654518755&width=1024",
	"genre": [
		"Action",
		"Adventure",
		"Comedy"
	],
	"rate": 8.1
}
200  retorna la película junto a sus cambios

400 "message": se mostrara un mensaje de acuerdo al dato se haya ingresado de manera erronea

404 "message": "movie id not found"
````