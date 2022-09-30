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

  const result = await response.json()
  alert("Registration was successful")
  return result

}