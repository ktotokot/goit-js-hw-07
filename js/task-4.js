const formEl = document.querySelector(".login-form");


formEl.addEventListener("submit", evnt => {
    evnt.preventDefault();

const email = formEl.elements.email.value.trim();
const password = formEl.elements.password.value.trim();


if (email !== "" && password !== ""){
  console.log({email, password});
}
else {
  alert(`All form fields must be filled in`);
}
formEl.reset();
  });