import { socialBaseUrl } from "../constants.mjs";

const action = "/auth/register";
const method = "post"

export async function register(profile) {
  const registerUrl = socialBaseUrl + action;
  const body = JSON.stringify(profile);
  
  const response = await fetch(registerUrl, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  })

  if (response.ok) {
    alert("Registration was successful");
    location.href = "login.html";
  } else {
    alert("Something went wrong, please try again")
  }

}