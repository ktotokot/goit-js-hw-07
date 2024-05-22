// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"


const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const onInputChange = (event) => {
  const nameValue = event.target.value.trim();
  if ( nameValue === ""){
outputName.textContent = `Anonymous`; 
  }
    else {
      outputName.textContent = nameValue;
    }

};

inputName.addEventListener("input", onInputChange);