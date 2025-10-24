document.addEventListener("DOMContentLoaded", function() {

    //declaramos una variable en javaScript representada por: btnOK
    var btnOK = document.getElementById("btn-OK");

    //declaramos un evento click a ese boton
    btnOK.addEventListener("click",function() {
        //declaramos una variable que represente 
        var name = document.getElementById("input-name");

        //muestra una alerta del navegador con el contenido del input
        alert("Hello word " + name.value);
        console.log("se imprimio el nombre")



    })

})