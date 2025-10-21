document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representativa del boton
    var btnOK = document.getElementById("btn-calcular");

    //declaramos un evento click a este boton
    btnOK.addEventListener("click",function() {
        //declaramos las variables que representan los datos proporcionados
        var value1 = parseFloat(document.getElementById("input-largo").value);
        var value2 = parseFloat(document.getElementById("input-ancho").value);
        var value3 = parseFloat(document.getElementById("input-azulejo").value);
        var value4 = parseFloat(document.getElementById("input-precio").value);
        //isNaN significa is not a number
        if(isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4)) {
            alert("Introduce solamente un valor numerico");
            console.error("El usuario oomgresp im valor invalido");
            return;
        }
        //operaciones
        //AREA DEL PISO
        var Area_superficie = (value1*100) * (value2* 100) ;
        //AREA DE LOS AZULEJOS
        var area_azulejo = value3 * value3;
        //CANTIDAD DE AZULEJOS NECESARIOS
        var cantidad_azulejo = Area_superficie / area_azulejo;
        //PRECIO TOTAL
        var precio_total = cantidad_azulejo * value4;


        //Imprimir o cambiar los valores de los parrafos por el de los resultados obtenidos
        
        var salida = document.getElementById("resultado-area-piso");
        salida.textContent = "El Area del piso: " + Area_superficie + "cm^2";
        
        var salida = document.getElementById("resultado-area-azulejo");
        salida.textContent = "El Area del azulejo: " + area_azulejo + "cm^2";

        var salida = document.getElementById("resultado-cantidad-azulejo");
        salida.textContent = "La Cantidad de azulejos necesarios es: " + cantidad_azulejo + "Unidades";

        var salida = document.getElementById("resultado-precio-total");
        salida.textContent = "El Precio total: " + precio_total + "MX";
        

        console.log("se imprimieron los resultados");


    })

})