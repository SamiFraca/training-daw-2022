window.onload = function () {

  console.log(document.getElementById("pregunta_si").value);


  document.getElementById("pregunta_si").onchange = changeValue;
  document.getElementById("pregunta_no").onchange = changeValue;
  document.getElementById("submit").style.display = "none";
  Privacy = document.getElementById("privacidad");
  Conditions = document.getElementById("condiciones");

};


function terms_changed() {
  document.getElementById("submit").style.display = "none";
  if (Privacy.checked && Conditions.checked) {
    document.getElementById("submit").style.display = "block"
  } else {
    document.getElementById("submit").style.display = "none"
  }
}

function changeValue(e) {
  console.log("changed" + e.target.value);
}
