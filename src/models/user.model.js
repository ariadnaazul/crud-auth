import mongoose from "mongoose";

//Esquema que al ejecutarlo retrna un objeto 
const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true //quita los espacios vacios del String
    },
    email: {
        type: String,
        required: true,
        trim: true, //quita los espacios vacios del String
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true //quita los espacios vacios del String
    }
}, {
    timestamps: true //Datos de fecha y hora de creación y actualización
});

export default mongoose.model( 'User', userSchema);

/*Al crear un esquema se define un objeto de lo que queremos validar. Pero esto no nos permite consultar a la base de datos. 

Para hacer consultas necesitamos métodos. Asi que indicamos que todos los datos del esquema van a ser parte de un modelo llamado "User"

Mongoose va a crear una colección de usuarios llamada Users (va a pluralizar el modelo). Y cada user que creemos lo va a guardar alli como un objeto.*/
