window.onload = function (e) {
    console.log('documento cargado')
    document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
    document.querySelectorAll("h2")[1].innerText = "h2 cambiado"
    // document.getElementsByClassName("first").style.color = "blue"
    console.log(document.getElementsByClassName("first"))
}