import { setRegisterUserFormListener } from "./handlers/register.mjs";
import { setLoginUserFormListener } from "./handlers/login.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";
import { setCreateNewPostListener } from "./handlers/createPost.mjs";
import { getProfile } from "./api/profile/index.mjs";
import * as posts from "./handlers/getPosts.mjs";
// import { setSearchPostsListener } from "./handlers/searchPosts.mjs";

const path = location.pathname;

if (path === `/pages/login.html`) {
  setLoginUserFormListener();
} else if (path === `/pages/register.html`) {
  setRegisterUserFormListener();
} else if (path === `/pages/profile.html`) {
  getProfile();
  setCreateNewPostListener();
  posts.getPostFeedUser();
} else if (path === `/pages/editPost.html`) {
  setUpdatePostListener();
} else if (path === `/index.html`) {
  setCreateNewPostListener();
  posts.getPostsFeed();
  posts.getPostsFeedSearched();
  // setSearchPostsListener();
} else if (path === `/pages/singlePost.html`) {
  posts.getPostSingle();
}
