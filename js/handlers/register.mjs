import { register } from "../api/auth/register.mjs";

export function setRegisterUserFormListener() {
  const form = document.querySelector("#registerUserForm");

  form.addEventListener("submit", event => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    // const action = form.action;
    // const method = form.method;

    register(profile)
})
}
