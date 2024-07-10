import User from '../models/user.model.js'; //importa el modelo



/*Funciones
    request
    response
*/


export const register = async (req, res) => {
    const {email, password, username} = req.body; //hace un request sobre el cuerpo del metodo post y obtiene los campos solicitados

    try {
        //newUser recibe por parámetro los atributos que recibe del body
        const newUser = new User({ 
            username,
            email,
            password,
        });
        
        await newUser.save(); //guarda la instancia de user como un nuevo objeto en la base de datos dentro de la colección users
        res.send('registrando'); //mensaje
    } catch (error) {
        console.log( error);
    }
};

export const login = (req, res) => res.send('login'); 