const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export default function validation(inputs){
    const logErrors = {username:[], password:[]};

    if(!inputs.username) { 
        logErrors.username.push('Debe ingresar un nombre de usuario')
    } else if(!regexEmail.test(inputs.username)) {
        logErrors.username.push('El nombre de usuario es un email')
    } else if(inputs.username.length>35) {
        logErrors.username.push('Máximo 35 caracteres')
    } else if(!/\d/.test(inputs.password)) {
        logErrors.password.push('Debe contener al menos un numero')
    }else if( inputs.password.length<6 || inputs.password.length>10) {
        logErrors.password.push('Debe tener entre 6 y 10 digitos')
    };
    return logErrors;
}