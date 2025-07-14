<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="UTF-8">
    <title>Panel de Administración</title>
    </head>
    <body>
    <h2>Bienvenido, <?php echo $_SESSION['usuario']; ?>!</h2>

    <nav>
        <ul>
        <li><a href="productos.php">Administrar Productos</a></li>
        <?php if ($_SESSION['rol'] === 'admin') : ?>
        <li><a href="empleados.php">Administrar Empleados</a></li>
        <?php endif; ?>
        <li><a href="logout.php">Cerrar sesión</a></li>
        </ul>
    </nav>
    </body>
</html>
