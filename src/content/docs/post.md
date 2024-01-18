---
title: POST
---

## Crear una nueva película 

````
POST  /movies

Content-Type: application/json

{
	"title": "Jurassic Park",
	"year": 1993,
	"director": "Steven Spielberg",
	"duration": 127,
	"poster": "https://vice-press.com/cdn/shop/products/Jurassic-Park-Editions-poster-florey.jpg?v=1654518755&width=1024",
	"genre": [
		"Action",
		"Adventure",
		"Sci-Fi"
	],
	"rate": 8.1
}

201 retorna la película nueva

400 "message": se mostrara un mensaje de acuerdo al dato se haya ingresado de manera erronea
````