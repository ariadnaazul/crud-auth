import User from '../models/user.model.js'; //importa el modelo
import bcrypt from 'bcryptjs'; //encripta datos
import { createAccessToken } from '../libs/jwt.js';



/*Funciones
    request
    response
*/


export const register = async (req, res) => {
    const { email, password, username } = req.body; //hace un request sobre el cuerpo del metodo post y obtiene los campos solicitados

    try {
        //Permite encriptar datos
        const passwordHash = await bcrypt.hash(password, 10) //10 es el numero de veces que se va a ejecutar el algoritmo


        //newUser recibe por parámetro los atributos que recibe del body
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save(); //guarda la instancia de user como un nuevo objeto en la base de datos dentro de la colección users. La constante permite guardar los datos
        const token = await createAccessToken({ id: userSaved._id }) //Crea un token con el _id

        res.cookie('token', token); //Se crea un cookie para almacenar el token
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });//Devuelve los datos específicados como respuesta al front

    } catch (error) {
        console.log(error);
    }
};

export const login = (req, res) => res.send('login'); 