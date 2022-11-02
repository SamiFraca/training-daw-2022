window.onload = function (e) {
    console.log('documento cargado')
    //Cambiar el título del segundo h2
    document.querySelectorAll("h2")[1].innerText = "new h2 title"
    //Seleccionar el elemento con id == username
    document.getElementById("username")
    //Cambiar el color de todos los .first que estén dentro de un artículo
    let articles = document.getElementsByTagName("article")
    for (let i = 0; i < articles.length; i++) {
        articles[i].querySelector("p").style.color = "blue";
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
    document.getElementById("introduction").querySelector("p").style.backgroundColor="lightblue"
    //Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    document.querySelectorAll(".buttons > button").forEach(e => e.style.color = "green");
}