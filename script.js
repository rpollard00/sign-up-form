const passwordField = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const firstnameReq = document.querySelector("#firstname-req");
const lastnameReq = document.querySelector("#lastname-req");

let firstNameValue = "";
let lastNameValue = "";
let passwordValue = "";
let confirmValue = "";

const validPass = () => {
  if (passwordValue.length > 0 && confirmValue.length > 0) {
    if (
      passwordValue !== confirmValue &&
      !passwordField.classList.contains("invalid-input") &&
      !passwordConfirm.classList.contains("invalid-input")
    ) {
      console.log("Works");
      passwordField.classList.add("invalid-input");
      passwordConfirm.classList.add("invalid-input");
      passwordField.classList.remove("valid-pass");
      passwordConfirm.classList.remove("valid-pass");
    } else if (passwordValue === confirmValue && passwordValue.length > 8) {
      passwordField.classList.remove("invalid-input");
      passwordConfirm.classList.remove("invalid-input");
      passwordField.classList.add("valid-pass");
      passwordConfirm.classList.add("valid-pass");
    }
  }
};

const checkInput = (e) => {
  if (e.target.value.length > 0) {
    req = document.querySelector(`#${e.target.id} + span`);
    req.classList.remove("req");
    req.classList.add("req-good");
  } else if (e.target.value.length === 0) {
    req = document.querySelector(`#${e.target.id} + span`);
    req.classList.remove("req-good");
    req.classList.add("req");
  }
  console.log(e.target.value);
};
firstname.addEventListener("input", () => {
  firstNameValue = firstname.value;
});

firstname.addEventListener("input", (e) => {
  checkInput(e);
});

lastname.addEventListener("input", () => {
  lastNameValue = lastname.value;
});

lastname.addEventListener("input", (e) => {
  checkInput(e);
});

passwordField.addEventListener("input", () => {
  passwordValue = passwordField.value;
});
passwordConfirm.addEventListener("input", () => {
  confirmValue = passwordConfirm.value;
});

passwordField.addEventListener("input", validPass);
passwordConfirm.addEventListener("input", validPass);
