var fNombre = document.forms["formulario"]["nombre"];
var fApellido = document.forms["formulario"]["apellido"];
var fTelefono = document.forms["formulario"]["telefono"];
var email = document.forms["formulario"]["email"];
var fContraseña = document.forms["formulario"]["contraseña"];
var emVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var letrasVal = /^[A-Za-z]+$/;
var confirmarContraseña = document.forms["formulario"]["confirmarContra"];
var enviar = document.querySelector("#enviar");
var tabla = document.querySelector("#tabla");
var formulario = document.querySelector("#formulario")
var vector = JSON.parse(localStorage.getItem("xd"));
// funcion para validar
function validar(){
    if (fNombre.value== ""|| !fNombre.value.match(letrasVal))
    {
        document.querySelector("#errorNom").innerHTML="El campo esta vacio o se introdujeron caracteres no permitidos";
        fNombre.focus(); 
    }
    else{document.querySelector("#errorNom").innerHTML="";}
    if (fApellido.value =="" ||!fApellido.value.match(letrasVal))
    {
        document.querySelector("#errorApellido").innerHTML="El campo esta vacio o se introdujeron caracteres no permitidos";
        fApellido.focus();
    }
    else{document.querySelector("#errorApellido").innerHTML="";}
    if (fTelefono.value == "" ||isNaN (fTelefono.value) || fTelefono.value.length >10){
        document.querySelector("#errorTelefono").innerHTML="El campo esta vacio o es un numero incorrecto";
        fTelefono.focus();
    }
    else{document.querySelector("#errorTelefono").innerHTML="";}
    if (email.value =="" ||!email.value.match(emVal))
    {
        document.querySelector("#errorEmail").innerHTML="El correo no es valido o esta vacio";
        email.focus();
    }
    else{document.querySelector("#errorEmail").innerHTML="";}
    if (fContraseña.value=="" )
    {
        document.querySelector("#errorContra").innerHTML="Contraseña no valida o el campo esta vacio ";
        fContraseña.focus();
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
    
}
//Funcion de guardar en ls
function guardar(){
    if (vector == null)
    {
        vector = [];
    }
    var objeto ={
        "nombre": fNombre.value,
        "apellido":fApellido.value,
        "telefono":fTelefono.value,
        "email":email.value
    }
    vector.push(objeto);
    localStorage.setItem("xd",JSON.stringify(vector));
    console.log(vector);
    return true;
}
//Muestra la tabla
function pintar(){
    tabla.innerHTML="";
    vector.forEach((simon,index)=>{
        var renglon= tabla.insertRow(-1);
        var col0 = renglon.insertCell(0);
        var col1 = renglon.insertCell(1);
        var col2 = renglon.insertCell(2);
        var col3 = renglon.insertCell(3);
        var col4 = renglon.insertCell(4);
        col0.textContent=simon.nombre;
        col1.textContent=simon.apellido;
        col2.textContent=simon.telefono;
        col3.textContent=simon.email;
        col4.innerHTML=`<button drid="${index}" class="renglon" onclick="borrar(this)">eliminar ⋌༼ •̀ ⌂ •́ ༽⋋</button> <button eid="${index}" onclick="editar(this)">editar ¯_( ͠° ͟ʖ °͠ )_/¯</button>`;
    });
}
//Funcion para borrar
function borrar(event){
    var id = event.getAttribute("drid");
    var vector = JSON.parse(localStorage.getItem("xd"));
    vector.splice(id,1);
    localStorage.setItem("xd",JSON.stringify(vector));
    console.log(vector);
    pintar();
    location.reload();
}
//Funcion para editar
function editar(event){
    console.log("xd");
    var id = event.getAttribute("eid");
    var vector = JSON.parse(localStorage.getItem("xd"));
    console.log(vector[id]);
    fNombre.value=vector[id].nombre;
    fApellido.value=vector[id].apellido;
    fTelefono.value=vector[id].telefono;
    email.value=vector[id].email;
    
    vector.splice(id,1);
    localStorage.setItem("xd",JSON.stringify(vector));
    pintar();
    location.reload();
    if (validar()==true){
        guardar();
    }
}
function limpiar(){
    console.log(vector);
    vector=[];
    localStorage.clear();
    console.log(vector);
    pintar();
}
pintar();
