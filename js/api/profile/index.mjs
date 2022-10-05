import { authFetch } from "../authFetch.mjs";
import { socialBaseUrl } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";
const method = "get";

export function getProfile() {
  const userName = document.querySelector("#userName");
  const userEMail = document.querySelector("#userEmail");
}

// export async function getProfile(profileData) {
//   const getProfileUrl = socialBaseUrl + action;
//   console.log(getProfileUrl)
//   const response = await authFetch(getProfileUrl, {
//     method,
//     body: JSON.stringify(profileData)
//   })

//   const result = await response.json();
//   console.log(result)
// }




// GET INFOMARTION FROM LOCAL STORAGE!!!!!! //