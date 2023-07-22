

export default function validation (datos){

    let incorrect = {};
    const regex = new RegExp(/\S+@\.+\.\S+/);
    const regexPass = new RegExp("[0-9]");

    

    if(datos.email.length === 0){
        incorrect.email = "Correo no puede estar vacio";
    }
    if(!regex.test(datos.email)){
        incorrect.email = "Debes escribir un correo valido"
    }
    if(datos.email.length > 35){
        incorrect.email = "Correo no puede exceder 35 caracteres"
    }
    if(!regexPass.test(datos.password)){
        incorrect.password = "La contraseña debe tener al menos un numero"
    }
    if(datos.password.length < 6 || datos.password.length > 10){
        incorrect.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    }
        return incorrect;

}