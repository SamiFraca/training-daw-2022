window.onload = function (e) {
    console.log('documento cargado')
}
console.log(document.getElementsByTagName("p"));
function ToggleHidden(num) {
    if (document.getElementById(`contenidos_${num}`).style.display === "none") {
        document.getElementById(`contenidos_${num}`).style.display = "block"
        document.getElementById(`enlace_${num}`).innerHTML = "Ocultar"
    } else {
        document.getElementById(`contenidos_${num}`).style.display = "none"
        document.getElementById(`enlace_${num}`).innerHTML = "Mostrar"
    }
}