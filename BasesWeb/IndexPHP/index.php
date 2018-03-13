<?php
//sleep(1);

if ($_GET['func']=='agregarEquipo()')
{
    agregarEquipo($_GET['bien'],$_GET['cantidad'],$_GET['modelo'],$_GET['tipo'],$_GET['empresa']);
}

if ($_GET['func']=='getModeloEquipoPHP()')
{
    getModeloEquipoPHP();
}

if ($_GET['func']=='agregarVehiculo')
{
    agregarVehiculo($_GET['bien'],$_GET['cantidad'],$_GET['placa'],$_GET['año'],$_GET['propietario'],$_GET['modelo'],$_GET['tipo'],$_GET['empresa']);
}

if ($_GET['func']=='getTipoVehiculoPHP()')
{
    getTipoVehiculoPHP();
}

if ($_GET['func']=='getModeloVehiculoPHP()')
{
    getModeloVehiculoPHP();
}

if ($_GET['func']=='agregarProductoPHP()')
{
    agregarProductoPHP($_GET['codigo'],$_GET['factura'],$_GET['marca'],$_GET['modelo'],$_GET['cantidad']);
}

if ($_GET['func']=='agregarFacturaPHP()')
{
    agregarFacturaPHP($_GET['id'],$_GET['nombre']);
}

if ($_GET['func']=='getFacturaPHP()')
{
    getFacturaPHP();
}

if ($_GET['func']=='getMarcaPHP()')
{
    getMarcaPHP();
}

if ($_GET['func']=='getModeloPHP()')
{
    getModeloPHP();
}

if ($_GET['func']=='agregarClienteEmpresarialPHP()')
{
    //agregarClienteEmpresarialPHP();

    agregarClienteEmpresarialPHP(
        $_GET['cedula'],$_GET['cedulaJuridica'],$_GET['nombre'],$_GET['señas'],$_GET['distrito'],$_GET['telefono']);

}

if ($_GET['func']=='agregarClientePersonaPHP()')
{

    agregarClientePersonaPHP($_GET['cedula']
        ,$_GET['genero'],$_GET['nombre'],$_GET['apellidoI'],$_GET['apellidoII'],$_GET['nacimiento'],
        $_GET['estado'],$_GET['nacionalidad'],$_GET['telefono'],$_GET['factura'],$_GET['distrito'],$_GET['señas']);
}

if ($_GET['func']=='getDistritoPHP()')
{
    getDistritoPHP();
}

if ($_GET['func']=='getTipoSalarioPHP()')
{
    getTipoSalarioPHP();
}

if ($_GET['func']=='getPuestoPHP()')
{
    getPuestoPHP();
}

if ($_GET['func']=='getidEmpresaPHP()')
{
    getidEmpresaPHP();
}

if ($_GET['func']=='agregarPaisPHP')
{
    agregarPaisPHP($_GET['id'],$_GET['nombre']);
}

if ($_GET['func']=='getNacionalidadPHP')
{
    getNacionalidadPHP();
}

if ($_GET['func']=='agregarEmpleadoPHP')
{
    agregarEmpleadoPHP(
        $_GET['cedula'],$_GET['genero'],$_GET['nombre'],
        $_GET['primerApellido'],$_GET['segundoApellido'],$_GET['fechanacimiento'],$_GET['telefono'],
        $_GET['idEstado'],$_GET['idNacionalidad'],$_GET['poliza'],$_GET['cuentaBancaria'],
        $_GET['salario'],$_GET['idtipoSalario'],$_GET['idpuestoLaboral'],$_GET['inicioLaboral'],$_GET['idempresa'],$_GET['distrito'],$_GET['señas']);
}





function getFacturaPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from ventas";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[numerofactura] "." $line[tipoventa]".",";
    }
    echo json_encode($string);

}

function getMarcaPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from marcaproducto;";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idmarca] "." $line[marca]".",";
    }
    echo json_encode($string);

}

function getModeloPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from modeloproducto;";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idmodelo] "." $line[modelo]".",";
    }
    echo json_encode($string);

}

function conectar_PostgreSQL()
{
    $conexion = pg_connect("host=localhost port=5432 dbname=ProyectoII user=postgres password=deathnote") or die( "Error al conectar: ".pg_last_error() );
    return $conexion;
}
//get Nacionalidad
function getNacionalidadPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "SELECT idnacionalidad,nacionalidad FROM Nacionalidad;";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idnacionalidad] "." $line[nacionalidad]".",";
    }
    echo json_encode($string);

}


//agregar empleado POST
function agregarEmpleadoPHP($cedula, $genero, $nombre,
    $primerApellido, $segundoApellido, $fechanacimiento,$ptelefono,
    $idEstado, $idNacionalidad, $poliza, $cuentaBancaria,
    $salario, $idtipoSalario, $idpuestoLaboral, $inicioLaboral,$pidempresa,$distrito,$pseñas)
{
    $conexion = conectar_PostgreSQL();
    $query = "select insertarEmpleadoPersona($cedula, '$genero','$nombre','$primerApellido','$segundoApellido',cast('$fechanacimiento' as date),
    cast('$idEstado' as smallint), cast($idNacionalidad as smallint),'$ptelefono',$poliza,cast( $cuentaBancaria as money) ,$salario,
    cast($idtipoSalario as smallint),
    cast($idpuestoLaboral as smallint),
    '$inicioLaboral',$pidempresa ,cast($distrito as smallint),'$pseñas');";

    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}



//get Nombre Empresa
function getModeloEquipoPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from empresa.modeloequipo";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idmodelo] "." $line[modelo]".",";
    }
    echo json_encode($string);

}

//get Nombre Empresa
function getTipoVehiculoPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from empresa.tipovehiculo";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idvehiculo] "." $line[tipo]".",";
    }
    echo json_encode($string);

}

//get Nombre Empresa
function getModeloVehiculoPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from empresa.modelovehiculo ";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idmodelo] "." $line[modelo]".",";
    }
    echo json_encode($string);

}


//agregar nacionalidades POST
function agregarPaisPHP($id,$nombre)
{
    $conexion = conectar_PostgreSQL();
    $query = "insert into Nacionalidad (idnacionalidad,nacionalidad) values ($id,'$nombre');";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());



    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}

//get Nombre Empresa
function getidEmpresaPHP()
{

    $conexion = conectar_PostgreSQL();
    $sql = "select e.idEmpresa,e.nombre nombre from  empresa.empresa as e where e.idEmpresa=1;";
    $rs = pg_query( $conexion, $sql );
    $row=pg_fetch_row($rs);
    //echo "<table border=1px><tr><td>Cedula</td><td>genero</td></tr><tr><td>$row[0]</td><td>$row[1]</td></tr></table>";
    echo json_encode($row);


}

//get  Puesto Laboral
function getPuestoPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from PuestoLaboral;";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idpuestolaboral] "." $line[puestolaboral]".",";
    }
    echo json_encode($string);




}

//get  Puesto Laboral
function getTipoSalarioPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select * from TipoSalario";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[idtipo] "." $line[tipo]".",";
    }
    echo json_encode($string);




}

//get  Distrito
function getDistritoPHP()
{
    $conexion = conectar_PostgreSQL();
    $sql = "select d.iddistrito,d.nombre from distritospersona as d";
    $result = pg_query($sql) or die('Query failed: ' . pg_last_error());
    $rows = pg_numrows($result);

    $string="";
    for($i=1;$i<=$rows; $i++){
        $line = pg_fetch_array($result, null, PGSQL_ASSOC);
        $string=$string.","."$line[iddistrito] "." $line[nombre]".",";
    }
    echo json_encode($string);




}

//agregar cliente Persona POST
function agregarClientePersonaPHP($cedula,$genero,$nombre,$apellidoI,$apellidoII,$nacimiento,$idestado,$idnacionalidad,$telefono,$factura,$idDistrito,$señas)
{
    $conexion = conectar_PostgreSQL();
    $query = "select insertarClientePersona($cedula, '$genero','$nombre','$apellidoI','$apellidoII','$nacimiento',cast($idestado as smallint), cast($idnacionalidad as smallint),'$telefono',$factura,cast($idDistrito as smallint),'$señas');";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}


//agregar cliente Persona POST
function agregarClienteEmpresarialPHP($cedula,$cedulaJuridica,$nombre,$señas,$distrito,$telefono)
{
    //$cedula,$cedulaJuridica,$nombreEmpresa,$señas,$distrito,$telefono
    $conexion = conectar_PostgreSQL();
    $query = "select insertarEmpresarialCliente($cedula,$cedulaJuridica,'$nombre','$señas',cast($distrito as smallint) ,'$telefono');";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}


//agregar venta-- factura POST
function agregarFacturaPHP($id,$nombre)
{
    $conexion = conectar_PostgreSQL();
    $query = "insert into Ventas (numerofactura, tipoventa) values ($id,'$nombre');";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}



//agregar Producto POST
function agregarProductoPHP($codigo,$factura,$marca,$modelo,$cantidad)
{
    $conexion = conectar_PostgreSQL();

    //select insertarProducto(pcodigoproducto , pnumerofactura,cast(marca as smallint) ,cast(modelo as smallint), cast(antidad as smallint) )

    $query = "select insertarProducto($codigo , $factura,cast($marca as smallint) ,cast($modelo as smallint), cast('$modelo' as smallint) )";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}


//agregar vehiculo POST
function agregarVehiculo($bien,$cantidad,$placa,$año,$propietario,$modelo,$tipo,$empresa)
{

    //_GET['bien'],$_GET['cantidad'],$_GET['placa'],$_GET['año'],$_GET['propietario'],$_GET['modelo'],$_GET['tipo'],$_GET['empresa'])
    $conexion = conectar_PostgreSQL();
    $query = "select agregarBienVehiculo(cast($bien as smallint), cast('$cantidad' as smallint),'$placa',cast('$año' as smallint),'$propietario',cast('$modelo' as smallint),cast('$tipo' as smallint), cast('$empresa' as smallint));";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}

//agregar vehiculo POST
function agregarEquipo($bien,$cantidad,$modelo,$tipo,$empresa)
{

    //_GET['bien'],$_GET['cantidad'],$_GET['modelo'],$_GET['tipo'],$_GET['empresa'])
    $conexion = conectar_PostgreSQL();
    $query = "select agregarBienEquipo(cast('$bien' as smallint), cast('$cantidad' as smallint), cast('$modelo' as smallint) ,'$tipo', cast('$empresa' as smallint)  );";
    $result = pg_query($conexion, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

    if ($result ->execute())
        echo "('error':0, 'mensaje':'El registro de persona se ha insertado satisfactoriamente')";
    else
    {
        $error=$result->errorInfo()[2];
        echo "error";
    }
    // Free resultset liberar los datos
    pg_free_result($result);

    // Closing connection cerrar la conexión
    pg_close($conexion);
}

?>


