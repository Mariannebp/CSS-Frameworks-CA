import { socialBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";
const author = "?_author=true";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("An post ID is required to make updates")
  }
  
  const updatePostUrl = `${socialBaseUrl}${action}/${postData.id}${author}`;

  const response = await authFetch(updatePostUrl, {
    method,
    body: JSON.stringify(postData)
  })

  // const post = await response.json();

  return await response.json();
}