import { load } from "../../storage/index.mjs";

export function getProfile() {
  const userName = document.querySelector("#userName");
  const userEmail = document.querySelector("#userEmail");
  const userAvatar = document.querySelector("#userAvatar");
  const userInfo = load("profile");

  userName.innerHTML = userInfo.name;
  userEmail.innerHTML = userInfo.email;

  if (userInfo.avatar) {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "w-50")
    img.src = userInfo.avatar;
    img.alt = `Profile image of ${userInfo.name}`;
    userAvatar.append(img);
  } else {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "w-50")
    img.src = "/img/avatar-1606939.png";
    img.alt = "Profile avatar default";
    userAvatar.append(img);
  }
}