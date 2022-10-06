import { renderPosts } from "../templates/posts.mjs";
import { renderPostsUser } from "../templates/posts.mjs";
import * as post from "../api/posts/index.mjs";
import { load } from "../storage/index.mjs";


export async function getPostsFeed() {
  const posts = await post.getPosts();
  const container = document.querySelector("#postsFeed");
  renderPosts(posts, container)
}


const username = load("profile")

export async function getPostFeedUser() {
  const posts = await post.getPosts();
  const container = document.querySelector("#usersPosts");
  if (username.name === posts.name) {
    renderPostsUser(posts, container)
  }
}


