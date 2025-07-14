<?php
$host = "localhost";
$usuario = "root";
$contrasena = ""; // Si usas XAMPP y no tienes clave
$base_datos = "tulipan";

$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
?>
