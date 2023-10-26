let email_input = document.getElementsByClassName("input-hold");

for (let i = 0; i <= email_input.length; i++) {
  email_input[i].addEventListener("invalid", () => {
    input_error(email_input[i]);
  });

  email_input[i].addEventListener("input", () => {
    input_error(email_input[i]);
  });
}
console.log(email_input[i]);

function input_error(x) {
  if (x.validity.valueMissing) {
    x.setCustomValidity(" this fill is required .");
  } else if (x.validity.typeMismatch) {
    x.setCustomValidity("invalid , please enter a valid Email format");
  } else {
    x.setCustomValidity("");
    return true;
  }
  
}