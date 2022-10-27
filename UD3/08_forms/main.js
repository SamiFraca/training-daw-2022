window.onload = function () {
  //   console.log(document.main_form.elements);

  console.log(document.getElementById("pregunta_si").value);
  //   console.log(document.getElementById("pregunta_si").checked);

  document.getElementById("pregunta_si").onchange = changeValue;
  document.getElementById("pregunta_no").onchange = changeValue;
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //   }
};
// let For = document.main_form.elements;
// for (let index = 0; index < For.length; index++) {
//   if (For[index].getElementById("submit"))
//     () => {
//       const element = For[index];
//       console.log(element);
//     };
// }

const Privacy = document.getElementById("privacidad");
const Conditions = document.getElementById("condiciones");
function terms_changed() {
  if (Privacy.checked && Conditions.checked) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}

function changeValue(e) {
  console.log("changed" + e.target.value);
}
