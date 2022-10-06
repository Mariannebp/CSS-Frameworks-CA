import { setRegisterUserFormListener } from "./handlers/register.mjs";
import { setLoginUserFormListener } from "./handlers/login.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";
import { setCreateNewPostListener } from "./handlers/createPost.mjs";
import { getPostsFeed } from "./handlers/getPosts.mjs";
import { getPostFeedUser } from "./handlers/getPosts.mjs";
import * as post from "./api/posts/index.mjs";
import { load } from "./storage/index.mjs";

import { getProfile } from "./api/profile/index.mjs";


const path = location.pathname;

if (path === `/pages/login.html`) {
  setLoginUserFormListener();
} else if (path === `/pages/register.html`) {
  setRegisterUserFormListener();
} else if (path === `/pages/profile.html` || `index.html`) {
  setCreateNewPostListener();
} else if (path === `/pages/.............`) {
  setUpdatePostListener();
} 


getProfile();
getPostsFeed();
getPostFeedUser();

const username = load("profile");
console.log(username)



// async function testTemplateOne() {
//   const posts = await post.getPosts();
//   const postings = posts.pop();
//   const container = document.querySelector("#postsFeed");
//   renderPost(postings, container)
// }

// testTemplateOne()


post.getPosts().then(console.log)
// post.getPost(958).then(console.log)

// updatePost()
// posts.getOne()

