![logo social interactions](https://github.com/jegox/Social-Interactions/blob/master/frontend/src/images/logo.png?raw=true)

# **Social Interation**

Monorepositorio con backend y frontend con integración a la API de [Twitter](https://developer.twitter.com/en/docs/api-reference-index) implementado login, logout, feed timeline y enviar tweets.

## **Instalación**
1. Descargar o clonar el repositorio
    ```bash
    git clone https://github.com/jegox/Social-Interactions.git
    ```
2. Ingresar a los directorios backend y frontend
3. Instalar dependencias de desarrollo
    ```bash
    npm install
    ```
4. Ejecutar dentro de los directorios backend y frontend
    ```bash
    npm start
    ```

## **Estructura Backend**

La estructura de este proyecto es de la siguiente manera:
1. Directorio /config
  * En este directorio se encuentra los archivos de configuración de las librerías express.js, mongoose.js passport.js y twit.js, estas se encargan respectivamente levantar el servidor HTTP, ODM para la base de datos en MongoDB, autenticación con la API de Twitter y las peticiones de timeline y tweet.
2. Directorio /schemas y /models
  * En estos directorios encontramos la definición de los campos de user y el modelo para gestionar las colecciones.
3. Directorio /routes
  * Aquí se encuentran las rutas de para autenticación, validación, tweet, timeline y logout con la API de Twitter.
4. Por último  el archivo server.js que integra los ficheros de configuración.

## **Frontend**

Para esta parte de la integración del proyecto se realizó el frontend en React.js creando la estructura base con el comando:
```bash
create-react-app frontend
```

La estructura de directorio está definida de la siguiente manera:
1. Directorio /src
  * Directorio /components
    * Componente login.js en el cual gestionamos la autenticación.
    * Componente dashboard.js en el cual integramos los subcomponentes:
      * shared/menu.js gestiona el logout.
      * shared/profile.js presenta la información del usuario autenticado.
      * listOfTweets.js integra el feed timeline:
        * shared/tweet.js presenta la información del tweet individual.
        * shared/loading.js simple loading mientras las peticiónes http se ejecutan.
  * Directorio /images contiene imágenes usadas en este proyecto.
  * Directorio /services
    * config.js configuración de librería axios para hacer las peticiones https.
    * api.js parametrización de las rutas de autenticación, timeline y crear tweet.

### Autor
Jegox González
[LinkedIn](www.linkedin.com/in/jegox)


## License
[MIT](https://choosealicense.com/licenses/mit/)