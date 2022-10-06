import { socialBaseUrl } from "../constants.mjs"; 
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const author = "?_author=true";

export async function getPosts() {
  const getPostsUrl = `${socialBaseUrl}${action}${author}`;

  const response = await authFetch(getPostsUrl);

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("A postId is required");
  }

  const getPostUrl = `${socialBaseUrl}${action}/${id}${author}`;

  const response = await authFetch(getPostUrl);

  return await response.json();
}