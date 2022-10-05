import { socialBaseUrl } from "../constants.mjs"; 
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostsUrl = socialBaseUrl + action;

  const response = await authFetch(getPostsUrl);

  return await response.json();
}