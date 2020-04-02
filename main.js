var enviar = document.querySelector("#enviar");
var tabla = document.querySelector("#tabla");
var formulario = document.querySelector("#formulario")
var vector = JSON.parse(localStorage.getItem("xd"));
//Funcion de guardar en ls
function guardar(){
    
    if (vector == null)
    {
        vector = [];
    }
    var id = vector.length;
    var objeto ={
        "userId":id,
        "nombre": fNombre.value,
        "apellido":fApellido.value,
        "telefono":fTelefono.value,
        "email":email.value
    }
    vector.push(objeto);
    localStorage.setItem("xd",JSON.stringify(vector));
    $.ajax({
        method: "POST",
        url:"recibir.php",
        data: objeto,
        success: function(data){
            console.log(data);
        }
    });
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
        col4.innerHTML=`<button drid="${index}" class="renglon" onclick="borrar(this)">eliminar</button> <button eid="${index}" onclick="editar(this)">editar</button>`;
    });
}
//Funcion para borrar
function borrar(event){
    var id = event.getAttribute("drid");
    $.ajax({
        method: "POST",
        url: "delete.php",
        data: {"userId":id},
        success: function(data){
            console.log(data);
        }
    })
    var vector = JSON.parse(localStorage.getItem("xd"));
    vector.splice(id,1);
    localStorage.setItem("xd",JSON.stringify(vector));
    console.log(vector);
    pintar();
}
//Funcion para editar
function editar(event){
    var id = event.getAttribute("eid");
    $.ajax({
        
    })
    var vector = JSON.parse(localStorage.getItem("xd"));
    fNombre.value=vector[id].nombre;
    fApellido.value=vector[id].apellido;
    fTelefono.value=vector[id].telefono;
    email.value=vector[id].email;
    
    vector.splice(id,1);
    localStorage.setItem("xd",JSON.stringify(vector));
    pintar();
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