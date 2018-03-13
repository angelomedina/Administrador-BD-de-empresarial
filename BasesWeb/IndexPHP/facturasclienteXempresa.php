<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VK Seguridad y Monitoreo </title>

    <!-- Librari Propias-->
    <script type="text/javascript" src="../Methods/metodos.js"></script>
    <link rel="stylesheet" href="../IndexHTML/styles.css">

    <!-- Librari Menus-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Material Design for Bootstrap -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/FezVrasta/bootstrap-material-design/dist/dist/bootstrap-material-design.min.css">

</head>
<body>
<!-- Menu -->
<div class="NavBar">
    <ul class="nav nav-tabs">
        <li role="presentation" ><a href="../IndexHTML/principal.html">Pricipal</a></li>
        <li role="presentation" ><a href="../IndexHTML/consultar.html">Consultar</a></li>

        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Mostrar
                <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="../IndexPHP/mostrarEmpleados.php">Mostrar Empleados</a></li>
                <li><a href="../IndexPHP/mostrarPersonas.php">Mostrar Clientes</a></li>
                <li><a href="../IndexPHP/facturasclienteXempresa.php">Mostrar Facturas</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Agregar
                <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="../IndexHTML/agregarBien.html">Agregar Bienes Empresa</a></li>
                <li><a href="../IndexHTML/agregarEmpleado.html">Agregar Empleado</a></li>
                <li><a href="../IndexHTML/agregarCliente.html">Agregar Cliente</a></li>
                <li><a href="../IndexHTML/agregarProducto.html">Agregar Producto</a></li>
            </ul>
        </li>
        <li role="presentation" ><a href="../IndexHTML/colaboradores.html">Colaboradores</a></li>
    </ul><br><br>

    <div class="card"><br>
        <?php
        // conexion a la base de datos
        $dbconn = pg_connect("host=localhost port=5432 dbname=ProyectoII user=postgres password=deathnote") or die('NO HAY CONEXION: ' . pg_last_error());

        //consulta sencilla
        $query = 'select * from FACTURASCLIENTESDEXEMPRESA';
        $result = pg_query($query) or die('Query failed: ' . pg_last_error());
        $rows = pg_numrows($result);

        //impresion primaria
        echo "<h1 align='center' class='titulo-label'>Facturas de Cliente </h1><br>";
        echo "<table border =1 align='center'>\n";
        echo "<tr align='center'><td>CEDULA<td>NOMBRE<td>NUMERO DE FACTURA<td>DESCRIPCION<td>MONTO TOTAL</tr>";

        $nombre='Nombre Completo';

        //mostrar los datos
        for($i=1;$i<=$rows; $i++){
            $line = pg_fetch_array($result, null, PGSQL_ASSOC);
            echo "\t<tr>\n";
            echo "\t\t<td>$line[cedula]</td>\n";
            echo "\t\t<td>$line[$nombre]</td>\n";
            echo "\t\t<td>$line[numerofactura]</td>\n";
            echo "\t\t<td>$line[descripcion]</td>\n";
            echo "\t\t<td>$line[montototal]</td>\n";
            echo "\t</tr>\n";
        }
        echo "</table>\n";
        echo "<hr>";
        // Free resultset
        pg_free_result($result);
        // Closing connection
        pg_close($dbconn);
        ?>
    </div>
</body>
</html>
