<?php
include_once "dbase.php";
$id = $_POST['userId'];
$consulta = new mysqli(DB_server,DB_user,DB_pass,DB_name);
if ($consulta->connect_error){
    die("Connection error".$consulta->connect_error);
}
$sql = "DELETE FROM formulario WHERE userId='$id'";
if ($consulta->query($sql) === TRUE){
    echo "Funciono uwu";
}
else{
    echo "No funciono :(";
}
$consulta->close();
?>