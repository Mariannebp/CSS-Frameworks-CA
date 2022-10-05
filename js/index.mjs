import { setRegisterUserFormListener } from "./handlers/register.mjs";
import { setLoginUserFormListener } from "./handlers/login.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";
import { setCreateNewPostListener } from "./handlers/createPost.mjs";
// import { getProfile } from "./api/profile/index.mjs";

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




// getProfile();


// updatePost()

// posts.get()

// posts.getOne()

