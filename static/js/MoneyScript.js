document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representada por: btnOK
    var btnOK = document.getElementById("btn-convertir");

    //declaramos un evento click a ese boton
    btnOK.addEventListener("click",function() {
        //declaramos una variable que represente 
        var value1 = parseFloat(document.getElementById("input-valuePesos").value);
        //isNaN significa is not a number
        if(isNaN(value1)) {
            alert("Introduce solamente un valor numerico");
            console.error("El usuario oomgresp im valor invalido");
            return;
        }
        var result = value1 * 20;
        //muestra una alerta del navegador con el resultado de la suna
        alert("la conversion a dolares es " + result);
        console.log("se imprimio el resultado")


    })

})