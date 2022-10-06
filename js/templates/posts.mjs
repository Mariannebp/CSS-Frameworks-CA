

export function postTemplateFeed(postData) {  
  const post = document.createElement("div");
  post.classList.add("shadow", "rounded", "m-auto", "mb-4", "p-3");
  
  if (postData.author.avatar) {
    const user = document.createElement("div");
    user.classList.add("d-flex");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("ms-3", "mb-4");
    postAuthor.innerHTML = postData.author.name;

    const avatar = document.createElement("img");
    avatar.classList.add("ms-3", "d-flex", "justify-items-start")
    avatar.src = postData.author.avatar;
    avatar.alt = `Avatar for ${postData.author.avatar}`;
    avatar.height = "32";
    user.append(avatar, postAuthor)
    post.append(user)
  } else {
    const user = document.createElement("div");
    user.classList.add("d-flex");

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("ms-3", "mb-4");
    postAuthor.innerHTML = postData.author.name;

    const avatar = document.createElement("img");
    avatar.src = "/img/avatar-1606939.png";
    avatar.classList.add("ms-3", "d-flex");
    avatar.alt = `Avatar for ${postData.author.avatar}`;
    avatar.height = "32";
    user.append(avatar, postAuthor)
    post.append(user)
    }

  const postTitle = document.createElement("h4");
  postTitle.classList.add("font-monospace", "m-3");
  postTitle.innerHTML = postData.title;

  const postDate = document.createElement("p");
  postDate.classList.add("m-3", "mb-4", "text-end");
  postDate.innerHTML = postData.created;

  post.append(postTitle, postDate)
  
  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "w-75")
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  const postBody = document.createElement("p");
  postBody.classList.add("m-3", "mb-4");
  postBody.innerHTML = postData.body;

  post.append(postBody);
  

  return post;
}


export function postTemplateFeedUser(postData) {  
  const post = document.createElement("div");
  post.classList.add("shadow", "rounded", "m-auto", "mb-4", "p-3");

  const postTitle = document.createElement("h4");
  postTitle.classList.add("font-monospace", "m-3");
  postTitle.innerHTML = postData.title;

  const postDate = document.createElement("p");
  postDate.classList.add("m-3", "mb-4", "text-end");
  postDate.innerHTML = postData.created;

  post.append(postTitle, postDate);
  
  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("d-flex", "align-items-center", "m-auto", "w-75");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img);
  }

  const postBody = document.createElement("p");
  postBody.classList.add("m-3", "mb-4");
  postBody.innerHTML = postData.body;

  const buttons = document.createElement("div");
  buttons.classList.add("d-flex", "justify-content-end", "align-items-center", "m-3");
  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-error", "me-3");
  editButton.setAttribute("id", "editButton");
  editButton.innerHTML = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-delete", "me-3");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.innerHTML = "Delete";
  buttons.append(editButton, deleteButton);

  post.append(postBody, buttons);
  

  return post;
}



export function renderPosts(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeed));
}

export function renderPostsUser(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeedUser));
}

