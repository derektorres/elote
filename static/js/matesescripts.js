document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representada por: btnOK
    var btnOK = document.getElementById("btn-sumar");

    //declaramos un evento click a ese boton
    btnOK.addEventListener("click",function() {
        //declaramos una variable que represente 
        var value1 = parseFloat(document.getElementById("input-value1").value);
        var value2 = parseFloat(document.getElementById("input-value2").value);
        //isNaN significa is not a number
        if(isNaN(value1) || isNaN(value2)) {
            alert("Introduce solamente un valor numerico");
            console.error("El usuario oomgresp im valor invalido");
            return;
        }
        var result = value1 + value2 ;
        //muestra una alerta del navegador con el resultado de la suna
        alert("la suma de los valores es " + result);
        console.log("se imprimio el resultado")


    })

})

document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representada por: btnOK
    var btnOK = document.getElementById("btn-restar");

    //declaramos un evento click a ese boton
    btnOK.addEventListener("click",function() {
        //declaramos una variable que represente 
        var value1 = parseFloat(document.getElementById("input-value1").value);
        var value2 = parseFloat(document.getElementById("input-value2").value);
        //isNaN significa is not a number
        if(isNaN(value1) || isNaN(value2)) {
            alert("Introduce solamente un valor numerico");
            console.error("El usuario oomgresp im valor invalido");
            return;
        }
        var result = value1 - value2 ;
        //muestra una alerta del navegador con el resultado de la resta
        alert("la resta de los valores es " + result);
        console.log("se imprimio el resultado")


    })

})

document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representada por: btnOK
    var btnOK = document.getElementById("btn-multiplicar");

    //declaramos un evento click a ese boton
    btnOK.addEventListener("click",function() {
        //declaramos una variable que represente 
        var value1 = parseFloat(document.getElementById("input-value1").value);
        var value2 = parseFloat(document.getElementById("input-value2").value);
        //isNaN significa is not a number
        if(isNaN(value1) || isNaN(value2)) {
            alert("Introduce solamente un valor numerico");
            console.error("El usuario oomgresp im valor invalido");
            return;
        }
        var result = value1 * value2 ;
        //muestra una alerta del navegador con el resultado de la multiplicacion
        alert("la multiplicacion de los valores es " + result);
        console.log("se imprimio el resultado")


    })

})

document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representada por: btnOK
    var btnOK = document.getElementById("btn-dividir");

    //declaramos un evento click a ese boton
    btnOK.addEventListener("click",function() {
        //declaramos una variable que represente 
        var value1 = parseFloat(document.getElementById("input-value1").value);
        var value2 = parseFloat(document.getElementById("input-value2").value);
        //isNaN significa is not a number
        if(isNaN(value1) || isNaN(value2)) {
            alert("Introduce solamente un valor numerico");
            console.error("El usuario oomgresp im valor invalido");
            return;
        }
        var result = value1 / value2 ;
        //muestra una alerta del navegador con el resultado de la division
        alert("la division de los valores es " + result);
        console.log("se imprimio el resultado")


    })

})