/*
var fNombre = document.forms["formulario"]["nombre"];
var fApellido = document.forms["formulario"]["apellido"];
var fTelefono = document.forms["formulario"]["telefono"];
var email = document.forms["formulario"]["email"];
var fContraseña = document.forms["formulario"]["contraseña"];
var emVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var letrasVal = /^[A-Za-z]+$/;
var confirmarContraseña = document.forms["formulario"]["confirmarContra"];
function validar(){
    if (fNombre.value== ""|| !fNombre.value.match(letrasVal))
    {
        document.querySelector("#errorNom").innerHTML="El campo esta vacio o se introdujeron caracteres no permitidos";
        fNombre.focus(); 
        return false;
    }
    else{document.querySelector("#errorNom").innerHTML="";}
    if (fApellido.value =="" ||!fApellido.value.match(letrasVal))
    {
        document.querySelector("#errorApellido").innerHTML="El campo esta vacio o se introdujeron caracteres no permitidos";
        fApellido.focus();
        return false;
    }
    else{document.querySelector("#errorApellido").innerHTML="";}
    if (fTelefono.value == "" ||isNaN (fTelefono.value) || fTelefono.value.length >10){
        document.querySelector("#errorTelefono").innerHTML="El campo esta vacio o es un numero incorrecto";
        fTelefono.focus();
        return false;
    }
    else{document.querySelector("#errorTelefono").innerHTML="";}
    if (email.value =="" ||!email.value.match(emVal))
    {
        document.querySelector("#errorEmail").innerHTML="El correo no es valido o esta vacio";
        email.focus();
        return false;
    }
    else{document.querySelector("#errorEmail").innerHTML="";}
    if (fContraseña.value=="" )
    {
        document.querySelector("#errorContra").innerHTML="Contraseña no valida o el campo esta vacio ";
        fContraseña.focus();
        return false;
    }
    else {document.querySelector("#errorContra").innerHTML="";}
    if (confirmarContraseña.value=="" || confirmarContraseña.value != fContraseña.value|| confirmarContraseña.value.length < 8 || confirmarContraseña.value.length > 16 )
    {
        document.querySelector("#errorConfirmar").innerHTML="Las contraseñas no son iguales o el campo esta vacio (maximo 16 y minimo 8 caracteres)";
        confirmarContraseña.focus();
        return false;
    }
    else{document.querySelector("#errorConfirmar").innerHTML="";}
    guardar();
}*/