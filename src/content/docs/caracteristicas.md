---
title: App de películas
---

## Descripción
La aplicación es una API RESTful desarrollada en Node.js con Express que proporciona funcionalidades para gestionar una base de datos de películas. Ofrece endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las películas y utiliza validaciones de datos con la biblioteca Zod para asegurar la integridad de los datos en las peticiones POST, PUT y PATCH.
> La app se encuentra corriendo actualmente con mongo en **https://app-api-movies.vercel.app/**
## Características Principales
- Arquitecturas MVC & API REST.
- Operaciones CRUD para películas mediante peticiones HTTP.
- Validación de calidad y seguridad de los datos utilizando Zod en las peticiones POST, PUT y PATCH.
- Inyección de dependencias para implementar tres bases de datos: local, MongoDB y MySQL.

## Tecnologías Utilizadas
- Node.js
- Express.js
- Zod (Biblioteca de validación de esquemas)
- MongoDB
- MySQL