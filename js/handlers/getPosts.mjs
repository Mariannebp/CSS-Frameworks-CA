import { renderPosts } from "../templates/posts.mjs";
import { renderPostsUser } from "../templates/posts.mjs";
import { renderPostSingle } from "../templates/posts.mjs";
import * as post from "../api/posts/index.mjs";

export async function getPostsFeed() {
  const posts = await post.getPosts();
  const container = document.querySelector("#postsFeed");
  renderPosts(posts, container)
}

export async function getPostFeedUser() {
  const posts = await post.getPosts();
  const container = document.querySelector("#usersPosts");
  renderPostsUser(posts, container)
}

export async function getPostSingle() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const postSingle = await post.getPost(id);
  console.log(postSingle)
  const container = document.querySelector("#singlePost");
  renderPostSingle(postSingle, container)
}

