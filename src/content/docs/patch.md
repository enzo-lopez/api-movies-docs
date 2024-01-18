---
title: PATCH 
---

## Modificar parcialmente película 

````
PATCH  /movies/id

Content-Type: application/json

{
	"title": "Jurassic Park 3",
	"year": 1996
}

200  retorna la película junto a sus cambios

400 "message": se mostrara un mensaje de acuerdo al dato se haya ingresado de manera erronea

404 "message": "movie id not found"
````