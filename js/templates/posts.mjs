import { load } from "../storage/index.mjs";


/**
 * A function that sets the template to display each post fetched to the main posts feed.
 * 
 * @param {string} postData - passes a url.
 * @returns 
 */
export function postTemplateFeed(postData) {  
  const { title, media, author, updated, id } = postData;
  const { name, avatar } = author;

  const post = document.createElement("div");
  post.classList.add("shadow", "rounded", "m-auto", "mb-4", "p-3");

  const postContent = document.createElement("div");
  postContent.classList.add("border")
  post.append(postContent)
  
  if (avatar) {
    const user = document.createElement("div");
    user.classList.add("d-flex", "mt-3");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("ms-3", "mb-4");
    postAuthor.innerHTML = name;

    const UserAvatar = document.createElement("img");
    UserAvatar.classList.add("ms-3", "d-flex", "justify-items-start")
    UserAvatar.src = avatar;
    UserAvatar.alt = "Avatar";
    UserAvatar.height = "32";
    user.append(UserAvatar, postAuthor)
    postContent.append(user)
  } else {
    const user = document.createElement("div");
    user.classList.add("d-flex", "mt-3");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("ms-3", "mb-4");
    postAuthor.innerHTML = name;

    const UserAvatar = document.createElement("img");
    UserAvatar.src = "/img/avatar-1606939.png";
    UserAvatar.classList.add("ms-3", "d-flex");
    UserAvatar.alt = "Avatar";
    UserAvatar.height = "32";
    user.append(UserAvatar, postAuthor)
    postContent.append(user)
    }

  const date = updated.split("T");
  const dateShortened = date[0];
  const dateFormatting = dateShortened.replace("-", "/");
  const readDate = dateFormatting.replace("-", "/")
  const postDate = document.createElement("p")
  postDate.classList.add("text-end", "me-5")
  postDate.innerHTML = readDate; 
  
  const postTitle = document.createElement("h4");
  postTitle.classList.add("font-monospace", "m-3", "text-center");
  postTitle.innerHTML = title;

  postContent.append(postDate, postTitle)
  
  if (media) {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "mb-3", "w-75")
    img.src = media;
    img.alt = `Image from ${title}`;
    postContent.append(img)
  }

  const readMore = document.createElement("a");
  readMore.classList.add("d-flex", "justify-content-end", "text-info", "m-3", "me-5");
  readMore.setAttribute("href", `/pages/singlePost.html?id=${id}`);
  readMore.innerHTML = "Read more...";

  postContent.append(readMore)

  return post;
}


export function postTemplateFeedUser(postData) {  
  const { title, body, media, updated, id } = postData;

  const post = document.createElement("div");
  post.classList.add("shadow", "rounded", "m-auto", "mb-4", "p-3");
  
  const postContent = document.createElement("div");
  postContent.classList.add("border")
  post.append(postContent)
  
  const date = updated.split("T");
  const dateShortened = date[0];
  const dateFormatting = dateShortened.replace("-", "/");
  const readDate = dateFormatting.replace("-", "/")
  const postDate = document.createElement("p")
  postDate.classList.add("text-end", "m-3", "me-4")
  postDate.innerHTML = readDate; 

  const postTitle = document.createElement("h4");
  postTitle.classList.add("font-monospace", "m-3");
  postTitle.innerHTML = title;

  postContent.append(postDate, postTitle);
  
  if (media) {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "w-75");
    img.src = media;
    img.alt = `Image from ${title}`;
    postContent.append(img);
  }

  const postBody = document.createElement("p");
  postBody.classList.add("m-3", "mb-4");
  postBody.innerHTML = body;

  const buttons = document.createElement("div");
  buttons.classList.add("d-flex", "justify-content-end", "align-items-center", "m-3");
  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-edit", "me-3");
  editButton.setAttribute("id", "editButton");
  editButton.innerHTML = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-delete", "me-3");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.innerHTML = "Delete";
  buttons.append(editButton, deleteButton);

  editButton.addEventListener("click", () => location.href = "editPost.html")
  deleteButton.addEventListener("click", () => location.href = "register.html")

  postContent.append(postBody, buttons);
  
  return post;
}


export function postTemplateSingle(postData) { 
  const { title, body, media, author, updated } = postData;
  const { name, avatar } = author;

  const headTitle = document.querySelector("title");
  const navTitle = document.querySelector("#navTitle");

  headTitle.innerHTML = title;
  navTitle.innerHTML = title;

  const post = document.createElement("div");
  post.classList.add("shadow", "rounded", "m-auto", "mb-4", "p-3");

  const postContent = document.createElement("div");
  postContent.classList.add("border")

  post.append(postContent)
  
  if (avatar) {
    const user = document.createElement("div");
    user.classList.add("d-flex", "mt-3");
    user.setAttribute("style", "min-width: 250px")

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("ms-3", "mb-4");
    postAuthor.innerHTML = name;

    const userAvatar = document.createElement("img");
    userAvatar.classList.add("ms-3", "d-flex", "justify-items-start")
    userAvatar.src = avatar;
    userAvatar.alt = "Avatar";
    userAvatar.height = "32";
    user.append(userAvatar, postAuthor)
    postContent.append(user)
  } else {
    const user = document.createElement("div");
    user.classList.add("d-flex", "mt-3");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("ms-3", "mb-4");
    postAuthor.innerHTML = name;

    const userAvatar = document.createElement("img");
    userAvatar.src = "/img/avatar-1606939.png";
    userAvatar.classList.add("ms-3", "d-flex");
    userAvatar.alt = "Avatar";
    userAvatar.height = "32";
    user.append(userAvatar, postAuthor)
    postContent.append(user)
    }

  const date = updated.split("T");
  const dateShortened = date[0];
  const dateFormatting = dateShortened.replace("-", "/");
  const readDate = dateFormatting.replace("-", "/")
  const postDate = document.createElement("p")
  postDate.classList.add("text-end", "me-4")
  postDate.innerHTML = readDate;  
  
  const postTitle = document.createElement("h4");
  postTitle.classList.add("font-monospace", "m-3");
  postTitle.innerHTML = title;

  postContent.append(postDate, postTitle)
  
  if (media) {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "w-75")
    img.src = media;
    img.alt = `Image from ${title}`;
    postContent.append(img)
  }

  const postBody = document.createElement("p");
  postBody.classList.add("m-auto", "mt-3", "mb-4", "w-75");
  postBody.innerHTML = body;

  postContent.append(postBody);

  return post;
}


export function renderPosts(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeed));
}

export function renderPostsUser(postDataList, parent) {
  const username = load("profile");
  const { name } = username;
  const message = document.querySelector("#errorMessage")

  postDataList.forEach(e => {
    if (e.author.name === name) {
      message.innerHTML = "";
      parent.append(postTemplateFeedUser(e));
      console.log(e.author.name) 
    } 
  })
}

export function renderPostSingle(postDataSingle, parent) {
  parent.append(postTemplateSingle(postDataSingle));
}

