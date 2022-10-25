window.onload = function (e) {
    console.log('documento cargado')
    //Cambiar el título del segundo h2
    document.querySelectorAll("h2")[1].innerText = "h2 cambiado"
    //Seleccionar el elemento con id == username
    document.getElementById("username")
    //Cambiar el color de todos los .first que estén dentro de un artículo
    let articles = document.getElementsByTagName("article")
    for (let i = 0; i < articles.length; i++) {
        ClassArticles = articles[i].getElementsByClassName("first")
    }
       //Seleccionar todos lo elementos li con class == item
    var tagLi = document.getElementsByTagName("li")
    for (var i = 0; i < tagLi.length; i++) {
        console.log(tagLi[i].getElementsByClassName("item").length)
    }
    console.log("----------------------------------------------------------")
    //Seleccionar todos lo buttons dentro de class == buttons
    var tagButton = document.getElementsByTagName("button")
    for (var i = 0; i < tagButton.length; i++) {
        console.log(tagButton[i].getElementsByClassName("buttons").length)
    }
    "-----------------------------------------------"
    //Cambiar el código de fondo del primer párrafo
    var divs = document.querySelector("article").innerHTML = "HOLA HOLA HOLA HOLA";

    document.getElementsByTagName("button")
}