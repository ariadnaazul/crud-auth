import User from '../models/user.model.js'; //importa el modelo
import bcrypt from 'bcryptjs'; //encripta datos
import { createAccessToken } from '../libs/jwt.js';


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

export const login = async (req, res) => {
    const { email, password } = req.body; //hace un request sobre el cuerpo del metodo post y obtiene los campos solicitados

    try {

        //Revision
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({message: "User not found"});  

        //Validacion
        const isMatch = await bcrypt.compare(password, userFound.password); //Compara ambos datos
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });


        const token = await createAccessToken({ id: userFound._id }) //Crea un token con el _id

        res.cookie('token', token); //Se crea un cookie para almacenar el token
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });//Devuelve los datos especificados como respuesta al front

    } catch (error) {
        console.log(error);
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date (0)
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if(!userFound) return res.status(400).json({ message: "User not found" });
    return res.json({
        id: userFound._id,
        username: userFound.username, 
        email: userFound.email,

    })
    res.send('profile');
}