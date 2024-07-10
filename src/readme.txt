------------------------------------------------------------------------------------------------------
CREACIÓN

$ npm init -y //para crear el archivo package.json

------------------------------------------------------------------------------------------------------
COMANDOS
$ npm run dev 

------------------------------------------------------------------------------------------------------
DEPENDENCIAS
$ npm install express //express para crear el server


$ npm install nodemon -D // nodemon nos da un comando nuevo para que al ejecutar el server con ese comando, se reinicie el server

NOTA: agregar manualmente el comando "dev" al package.json


$ npm i morgan //morgan nos permite ver por consola las peticiones que van llegando

$ npm install mongoose //mongoose es un modulo que nos permite conectarnos a mongo db pero también modelar los datos. Decirle a mongo db que valide antes de guardar los daots.


------------------------------------------------------------------------------------------------------
DATA BASE CONNECTION
La conección se crea en db.js y se ejecuta en index.js
Las rutas se crean en /routes y se llaman desde app.js


------------------------------------------------------------------------------------------------------
TOOLS
Thunder Client sirve para testear metodos de petición http
MongoDB for VS Code sirve para visualizar mongo desde VS Code