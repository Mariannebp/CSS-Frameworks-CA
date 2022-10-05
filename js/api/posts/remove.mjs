import { socialBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("An post ID is required to delete")
  }
  
  const removePostUrl = `${socialBaseUrl}${action}/${id}`

  const response = await authFetch(removePostUrl, {
    method
  })

  return await response.json();
}