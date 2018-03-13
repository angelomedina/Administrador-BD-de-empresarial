//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    nacionalidad();
    puesto();
    tipoSalario();
    empresa();
    distrito();
}

function myOnLoadII() {
    nacionalidadII();
    distritoII();
    distritoIII();


}

function myOnLoadProductos() {
    marcaProducto();
    modeloProducto();
    facturaProducto();
}


function myOnLoadVehiculos() {
    modeloVehiculo();
    tipoVehiculo();
    empresaVehiculo();
    modeloEquipo();
    empresaEquipo();
}


//////////////////////////////////////// Agregar Nacionalidad//////////////////////////////////////////////////////

function empresaEquipo()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            var dato=obj[0]+" "+obj[1];
            addOptions("empresa-equipo", dato);
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getidEmpresaPHP()", true);
    xhttp.send();
}

function modeloVehiculo()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);
            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("modelo-vehiculo", pais);
                    pais = "";
                }
            }
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getModeloVehiculoPHP()", true);
    xhttp.send();
}

function tipoVehiculo()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);
            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("tipo-vehiculo", pais);
                    pais = "";
                }
            }
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getTipoVehiculoPHP()", true);
    xhttp.send();
}

function empresaVehiculo()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            var dato=obj[0]+" "+obj[1];
            //console.log(dato);
            addOptions("empresa-vehiculo", dato);
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getidEmpresaPHP()", true);
    xhttp.send();
}

//consulta las nacionalidades
function nacionalidad()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);
            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                        addOptions("nacionalidad-empleado", pais);
                        pais = "";
                }
            }
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getNacionalidadPHP", true);
    xhttp.send();
}
function nacionalidadII()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);
            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("nacionalidad-cliente-persona", pais);
                    pais = "";
                }
            }
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getNacionalidadPHP", true);
    xhttp.send();
}

function distrito()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("distrito-empleado", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getDistritoPHP()", true);
    xhttp.send();
}


function facturaProducto()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("factura-producto", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getFacturaPHP()", true);
    xhttp.send();
}


function modeloEquipo()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("modelo-equipo", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getModeloEquipoPHP()", true);
    xhttp.send();
}

function marcaProducto()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("marca-producto", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getMarcaPHP()", true);
    xhttp.send();
}

function modeloProducto()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("modelo-producto", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getModeloPHP()", true);
    xhttp.send();
}


function distritoII()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("distrito-cliente-persona", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getDistritoPHP()", true);
    xhttp.send();
}

function distritoIII()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            //console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("distrito-cliente-empresarial", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getDistritoPHP()", true);
    xhttp.send();
}

function tipoSalario() {

    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            console.log(obj);

            for (var i in obj)
            {
                var pieza=obj[i];

                if(pieza != "," ) {
                    pais=pais+pieza;
                }
                else {
                    addOptions("tiposalario-empleado", pais);
                    pais = "";
                }
            }

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getTipoSalarioPHP()", true);
    xhttp.send();
}

function puesto() {

        var pais;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                obj=eval (this.responseText);
                //console.log(obj);
                for (var i in obj)
                {
                    var pieza=obj[i];

                    if(pieza != "," ) {
                        pais=pais+pieza;
                    }
                    else {
                        addOptions("puesto-empleado", pais);
                        pais = "";
                    }
                }
            }
        };
        xhttp.open("GET", "../IndexPHP/index.php?func=getPuestoPHP()", true);
        xhttp.send();
}

function empresa()
{
    var pais;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            obj=eval (this.responseText);

            var dato=obj[0]+" "+obj[1];
            //console.log(dato);
            addOptions("id-empresa", dato);
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=getidEmpresaPHP()", true);
    xhttp.send();
}
//agrega las nacionalidades obtenidas de la consulta nacionalidad
function addOptions(domElement, array) {

    if (array != "") {
        if(array != undefined) {
            var select = document.getElementsByName(domElement)[0];
            var option = document.createElement("option");
            option.text = array;
            select.add(option);
        }
    }
}

function addOptionsEmpresa(domElement, array) {

            var select = document.getElementsByName(domElement);
            var option = document.createElement("option");
            option.text = array;
            select.add(option);
}

//prueba de Add Nacionalida -->sirve
function agregarNacionaliad() {

    var id = document.getElementById('agregar-pais-id').value;
    var nombre= document.getElementById('agregar-pais-nombre').value;
    var div = document.getElementById("textDiv");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            div.textContent = "Solicitud Enviada";

            console.log(id);
            console.log(nombre);
            console.log("Bien");
            limpiar();
            nacionalidad();

        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=agregarPaisPHP&id="+id+"&nombre="+nombre, true);
    xhttp.send();
}

//Limpia el combobox de nacionalidad
function limpiar() {
    var select = document.getElementById('nacionalidad-empleado');
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

function limpiarFactura() {
    var select = document.getElementById('factura-producto');
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

////////////////////////////////////// Agregar Empleado///////////////////////////////////////////////////////

//funcion de agregar empleado
function agregarEmpleado() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var nacionalidad         = document.getElementById('nacionalidad-empleado').value;             // castear
    if(nacionalidad=='Costarricense')
    {
        nacionalidad = 1;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var fechanacimiento      = document.getElementById('fechanacimiento-empleado').value;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var estadocivil          = document.getElementById('estadocivil-empleado').value;              // castear
    if(estadocivil== "Casado")
    {
        estadocivil=1;
    }
    if(estadocivil== "Soltero")
    {
        estadocivil=2;
    }
    if(estadocivil== "Unión Libre")
    {
        estadocivil=3;
    }
    var poliza                = document.getElementById('poliza-empleado').value;
    var cuentabanco           = document.getElementById('cuentabancaria-empleado').value;
    var salario               = document.getElementById('salario-empleado').value;
    var tiposalario           =  document.getElementById('tiposalario-empleado').value; //valores unicos en la base de datos
    var puesto                =  document.getElementById('puesto-empleado').value;      //valores unicos en la base de datos
    var fechanainiciolaboral  = document.getElementById('fecha-empleado').value;
    var telefono              = document.getElementById('telefono-empleado').value;
    var idEmpresa             = document.getElementById('id-empresa').value;
    var sennas                 = document.getElementById('señas-empleado').value;
    var distrito                 = document.getElementById('distrito-empleado').value;
    var nombre                = document.getElementById('nombre-empleado').value;
    var apellidoI            = document.getElementById('apellido1-empleado').value;
    var apellidoII           = document.getElementById('apellido2-empleado').value;
    var cedula               = document.getElementById('cedula-empleado').value;
    var mensaje = document.getElementById("mensajeI");

    var genero               = document.getElementById('genero-empleado').value;                   // castear
    if(genero == 'Masculino')
    {
        genero='M';
    }
    else
    {
        genero='F';
    }

    var valorNacionalidad="";
    for (var i = 0; i < nacionalidad.length; i++) {

        valorNacionalidad=valorNacionalidad+nacionalidad[i];
        if(nacionalidad.charAt(i) == " " )
        {
            console.log(nacionalidad[i]);
            break;
        }
    }

    var valoridEmpresa="";
    for (var i = 0; i < idEmpresa.length; i++) {

        valoridEmpresa=valoridEmpresa+idEmpresa[i];
        if(idEmpresa.charAt(i) == " " )
        {
            console.log(idEmpresa[i]);
            break;
        }
    }

    var valorPuesto="";
    for (var i = 0; i < puesto.length; i++) {

        valorPuesto=valorPuesto+puesto[i];
        if(idEmpresa.charAt(i) == " " )
        {
            console.log(puesto[i]);
            break;
        }
    }


    var valorTipoSalario="";
    for (var i = 0; i < tiposalario.length; i++) {

        valorTipoSalario=valorTipoSalario+tiposalario[i];
        if(tiposalario.charAt(i) == " " )
        {
            console.log(tiposalario[i]);
            break;
        }
    }

    var valorDistrito="";
    for (var i = 0; i < distrito.length; i++) {

        valorDistrito=valorDistrito+distrito[i];
        if(distrito.charAt(i) == " " )
        {
            console.log(distrito[i]);
            break;
        }
    }

    var idNacionalidad= Number(valorNacionalidad);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            console.log(estadocivil);

            mensaje.textContent = "Solicitud Enviada";
            limpiarForm();
            console.log("Bien");
        }
    };
    xhttp.open("GET", "../IndexPHP/index.php?func=agregarEmpleadoPHP&cedula="+cedula+ "&genero="+genero + "&nombre="+nombre + "&primerApellido="+apellidoI + "&segundoApellido="+apellidoII+ "&fechanacimiento="+fechanacimiento + "&idEstado="+estadocivil+ "&idNacionalidad="+idNacionalidad + "&telefono="+telefono + "&poliza="+poliza+ "&cuentaBancaria="+cuentabanco + "&salario="+salario+ "&idtipoSalario="+valorTipoSalario + "&idpuestoLaboral="+valorPuesto + "&inicioLaboral="+fechanainiciolaboral+ "&idempresa="+valoridEmpresa+ "&distrito="+valorDistrito+ "&señas="+sennas, true);
    xhttp.send();

}


function limpiarForm() {
    document.getElementById("contenidoI").reset();
    document.getElementById("contenidoII").reset();
}

function limpiarFormII() {
    document.getElementById("contenidoIII").reset();
    document.getElementById("contenidoIV").reset();
}


function limpiarFormIII() {
    document.getElementById("contenidoV").reset();
}


//funcion de agregar empleado
function agregarClientePersona() {
    var nombre                = document.getElementById('nombre-cliente-persona').value;
    var apellidoI            = document.getElementById('apellido1-cliente-persona').value;
    var apellidoII           = document.getElementById('apellido2-cliente-persona').value;
    var cedula               = document.getElementById('cedula-cliente-persona').value;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var nacionalidad         = document.getElementById('nacionalidad-cliente-persona').value;             // castear
    if(nacionalidad=='Costarricense')
    {
        nacionalidad = 1;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var fechanacimiento      = document.getElementById('fechanacimiento-cliente-persona').value;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var genero               = document.getElementById('genero-cliente-persona').value;                   // castear
    if(genero == 'Masculino')
    {
        genero='M';
    }
    else
    {
        genero='F';
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var estadocivil          = document.getElementById('estadocivil-cliente-persona').value;              // castear
    if(estadocivil== "Casado")
    {
        estadocivil=1;
    }
    if(estadocivil== "Soltero")
    {
        estadocivil=2;
    }
    if(estadocivil== "Unión Libre")
    {
        estadocivil=3;
    }
    //conversion

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var telefono              = document.getElementById('telefono-cliente-persona').value;
    var sennas                 = document.getElementById('señas-cliente-persona').value;
    var distrito                 = document.getElementById('distrito-cliente-persona').value;
    var mensaje = document.getElementById("mensajeII");


    var valorNacionalidad="";
    for (var i = 0; i < nacionalidad.length; i++) {

        valorNacionalidad=valorNacionalidad+nacionalidad[i];
        if(nacionalidad.charAt(i) == " " )
        {
            //console.log(nacionalidad[i]);
            break;
        }
    }

    var valorDistrito="";
    for (var i = 0; i < distrito.length; i++) {

        valorDistrito=valorDistrito+distrito[i];
        if(distrito.charAt(i) == " " )
        {
            console.log(distrito[i]);
            break;
        }
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {

            console.log(estadocivil);
            mensaje.textContent = "Solicitud Enviada";
            limpiarFormII();
            console.log("Bien");
        }
    };

    var idNacionalidad= Number(valorNacionalidad);

    xhttp.open("GET","../IndexPHP/index.php?func=agregarClientePersonaPHP()&cedula="+cedula+ "&genero="+genero+ "&apellidoI="+apellidoI+ "&apellidoI="+apellidoII+ "&nacimiento="+fechanacimiento+ "&estado="+estadocivil+ "&nacionalidad="+valorNacionalidad+ "&telefono="+telefono+ "&factura="+null+ "&distrito="+valorDistrito+ "&señas="+sennas, true);
    xhttp.send();
}

function agregarClienteEmpresarial() {

    var cedula = document.getElementById('cedula-cliente-empresarial').value;
    var cedulaJuridica = document.getElementById('cedulajuridica-cliente-empresarial').value;
    var nombre = document.getElementById('nombre-cliente-empresarial').value;
    var telefono = document.getElementById('telefono-cliente-empresarial').value;
    var distrito  = document.getElementById('distrito-cliente-empresarial').value; // obtener el numero
    var sennas  = document.getElementById('señas-cliente-empresarial').value;

    var valorDistrito="";
    for (var i = 0; i < distrito.length; i++) {

        valorDistrito=valorDistrito+distrito[i];
        if(distrito.charAt(i) == " " )
        {
            console.log(distrito[i]);
            break;
        }
    }

    var mensaje = document.getElementById("mensajeIII");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {

            console.log(nombre);
            mensaje.textContent = "Solicitud Enviada";
            limpiarFormIII();
            console.log("Bien");
        }
    };

  //$cedula,$cedulaJuridica,$nombreEmpresa,$señas,$distrito,$telefono
    xhttp.open("GET","../IndexPHP/index.php?func=agregarClienteEmpresarialPHP()&cedula="+cedula+"&cedulaJuridica="+cedulaJuridica+"&nombre="+nombre+"&señas="+sennas +"&distrito="+valorDistrito +"&telefono="+telefono, true);
    xhttp.send();

}

function agregarFactura() {
    var id=document.getElementById('id-factura').value;
    var nombre=document.getElementById('nombre-factura').value;
    var mensaje = document.getElementById("textDivProducto");



    console.log("entre");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            console.log(nombre);
            console.log(id);
            mensaje.textContent = "Solicitud Enviada";
            limpiarFactura();
            facturaProducto();
        }
    };
    //../IndexPHP/index.php?func=agregarFacturaPHP()&id="+id+"&nombre="+nombre
    xhttp.open("GET","../IndexPHP/index.php?func=agregarFacturaPHP()&id="+id+"&nombre="+nombre, true);
    xhttp.send();
}


function  agregarProducto() {
    var codigo=document.getElementById('codigo-producto').value;
    var cantidad=document.getElementById('cantidad-producto').value;
    var factura=document.getElementById('factura-producto').value;
    var marca=document.getElementById('marca-producto').value;
    var modelo=document.getElementById('modelo-producto').value;
    var mensaje = document.getElementById("mensaje-producto");



    var valoridFactura="";
    for (var i = 0; i < factura.length; i++) {

        valoridFactura=valoridFactura+factura[i];
        if(factura.charAt(i) == " " )
        {
            break;
        }
    }

    var valoridMarca="";
    for (var i = 0; i < marca.length; i++) {

        valoridMarca=valoridMarca+marca[i];
        if(marca.charAt(i) == " " )
        {
            break;
        }
    }
    var intMarca = Number(valoridMarca)

    var valoridModelo="";
    for (var i = 0; i < modelo.length; i++) {

        valoridModelo=valoridModelo+modelo[i];
        if(modelo.charAt(i) == " " )
        {
            break;
        }
    }
    var intModelo = Number(valoridModelo)


    var intCantidad = Number(cantidad)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {


            console.log(cantidad);
            mensaje.textContent = "Solicitud Enviada";
        }
    };
    //$codigo,$factura,$marca,$modelo,$cantidad
    //agregarProductoPHP()
    xhttp.open("GET","../IndexPHP/index.php?func=agregarProductoPHP()&codigo="+codigo+"&factura="+valoridFactura+"&marca="+intMarca+"&modelo="+intModelo,"&cantidad="+cantidad, true);
    xhttp.send();
}

function  agregarVehiculo() {
    var bien=document.getElementById('id-bien-vehiculo').value;
    var cantidad=document.getElementById('cantidad-vehiculo').value;
    var placa=document.getElementById('placa-vehiculo').value;
    var año=document.getElementById('año-vehiculo').value;
    var propietario=document.getElementById('propietario-vehiculo').value;
    var modelo= document.getElementById("modelo-vehiculo").value;
    var tipo= document.getElementById("tipo-vehiculo").value;
    var empresa= document.getElementById("empresa-vehiculo").value;

    var mensaje = document.getElementById("mensajeVehiculo");

    var valoridModelo="";
    for (var i = 0; i < modelo.length; i++) {

        valoridModelo=valoridModelo+modelo[i];
        if(modelo.charAt(i) == " " )
        {
            break;
        }
    }

    var valorTipo="";
    for (var i = 0; i < tipo.length; i++) {

        valorTipo=valorTipo+tipo[i];
        if(tipo.charAt(i) == " " )
        {
            break;
        }
    }

    var valorEmpresa="";
    for (var i = 0; i < empresa.length; i++) {

        valorEmpresa=valorEmpresa+empresa[i];
        if(empresa.charAt(i) == " " )
        {
            break;
        }
    }



    //var intCantidad = Number(cantidad)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {

            mensaje.textContent = "Solicitud Enviada";
            document.getElementById("contenidoVehiculo").reset();
        }
    };
    xhttp.open("GET","../IndexPHP/index.php?func=agregarVehiculo&bien="+bien+"&cantidad="+cantidad+"&placa="+placa+"&año="+año+"&propietario="+propietario+"&modelo="+valoridModelo+"&tipo="+valorTipo+"&empresa="+valorEmpresa, true);
    xhttp.send();
}

function  agregarEquipo() {
    var bien=document.getElementById('bien-equipo').value;
    var cantidad=document.getElementById('cantidad-equipo').value;
    var modelo= document.getElementById("modelo-equipo").value;
    var tipo= document.getElementById("tipo-equipo").value;
    var empresa= document.getElementById("modelo-equipo").value;

    var mensaje = document.getElementById("mensajeEquipo");

    var valoridModelo="";
    for (var i = 0; i < modelo.length; i++) {

        valoridModelo=valoridModelo+modelo[i];
        if(modelo.charAt(i) == " " )
        {
            break;
        }
    }

    var valorEmpresa="";
    for (var i = 0; i < empresa.length; i++) {

        valorEmpresa=valorEmpresa+empresa[i];
        if(empresa.charAt(i) == " " )
        {
            break;
        }
    }

    var n = bien.toString();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            console.log(bien);

            mensaje.textContent = "Solicitud Enviada";
            //document.getElementById("contenidoEquipo").reset();
        }
    };
    xhttp.open("GET","../IndexPHP/index.php?func=agregarEquipo()"+"&bien="+n+"&cantidad="+cantidad+"&modelo="+valoridModelo+"&tipo="+tipo+"&empresa="+valorEmpresa, true);
    xhttp.send();
}