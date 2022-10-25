window.onload = function (e) {
    console.log('documento cargado')
    document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
    document.querySelectorAll("h2")[1].innerText = "h2 cambiado"
    document.querySelectorAll("article")
    console.log(document.getElementsByTagName("article")[1].getElementsByClassName("first"))
    console.log(document.getElementsByClassName("first"))
}