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
4. Ejecutar backend y frontend
    ```bash
    npm start
    ```

## **Backend**

La estructura de este proyecto es de la siguiente manera:
1. Directorio /config
  * En este directorio se encuentra los archivos de configuración de las librerías express.js, mongoose.js passport.js y twit.js, estas se encargan respectivamente levantar el servidor HTTP, ODM para la base de datos en MongoDB, autenticación con la API de Twitter y las peticiones de timeline y tweet.
2. Directorio /schemas y /models
  * En estos directorios encontramos la definición de los campos de user y el modelo para gestionar las colecciones.
3. Directorio /routes
  * Aquí se encuentran las rutas de para autenticación, validación, tweet, timeline y logout con la API de Twitter.
4. Por último  el archivo server.js que integra los ficheros de configuración.

## **Frontend**

## License
[MIT](https://choosealicense.com/licenses/mit/)