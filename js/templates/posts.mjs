import { load } from "../storage/index.mjs";
import { removePost } from "../api/posts/remove.mjs";


/**
 * A function that sets the template to display each post fetched to the main posts feed.
 * 
 * @param {string} url that fetches the posts to be displayed.
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

/**
 * A function that sets the template to display each post fetched to the user posts feed.
 * 
 * @param {string} url that fetches the posts to be displayed.
 */
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

  editButton.addEventListener("click", () => location.href = `editPost.html?id=${id}`)
  deleteButton.addEventListener("click", () => removePost(id))

  postContent.append(postBody, buttons);
  
  return post;
}

/**
 * A function that sets the template to display a single post.
 * 
 * @param {string} url that fetches the posts to be displayed.
 */
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

/**
 * A function to display the fetched posts on the chosen location in html
 * 
 * @param {string} url that fetches the posts to be displayed.
 * @param {string} container to the chosen location in the html 
 */
export function renderPosts(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateFeed));
}

export function renderPostFeedFiltered(postDatalist, parent) {
  const container = document.querySelector("#postsFeed");
  const filterText = document.querySelector("#filterText");
  const filterNewest = document.querySelector("#newest");
  const filterTwentyFourHours = document.querySelector("#twentyFour");
  const filterMoreThenTwentyFourHours = document.querySelector("#moreThenTwentyFour");
  const filterLastSevenDays = document.querySelector("#week");
  const filterMoreThenSevenDays = document.querySelector("#moreThenWeek")

  const day = 1000 * 60 * 60 * 24;
  const twoDays = day * 2;
  const week = day * 7;
  const currentTime = new Date();


  filterNewest.addEventListener("click", () => {
    filterText.innerHTML = "Newest (default)";
    container.innerHTML = "";
    parent.append(...postDatalist.map(postTemplateFeed))
  })


  filterTwentyFourHours.addEventListener("click", () => {
    const twentyFour = new Date(currentTime - day).toISOString();
    container.innerHTML = "";

    const filteredDates = postDatalist.filter(post => post.updated >= twentyFour)

    filteredDates.forEach(i => {
      if (i) {
        filterText.innerHTML = "Last 24 hours";
        parent.append(postTemplateFeed(i)) 
      }
    }) 
  })

  filterMoreThenTwentyFourHours.addEventListener("click", () => {
    const moreThenTwentyFour = new Date(currentTime - day).toISOString();
    container.innerHTML = "";

    const filteredDates = postDatalist.filter(post => post.updated <= moreThenTwentyFour)

    filteredDates.forEach(i => {
      if (i) {
        filterText.innerHTML = "More than 24 hours ago";
        parent.append(postTemplateFeed(i)) 
      }
    }) 
  })

  filterFortyEight.addEventListener("click", () => {
    const fortyEight = new Date(currentTime - twoDays).toISOString();
    container.innerHTML = "";

    const filteredDates = postDatalist.filter(post => post.updated >= fortyEight)

    filteredDates.forEach(i => {
      if (i) {
        filterText.innerHTML = "Last 48 hours";
        parent.append(postTemplateFeed(i)) 
      }
    }) 
  })

  filterMoreThenSevenDays.addEventListener("click", () => {
    const lastSevenDays = new Date(currentTime - week).toISOString();
    container.innerHTML = "";

    const filteredDates = postDatalist.filter(post => post.updated <= lastSevenDays)
    console.log(filteredDates)

    filteredDates.forEach(i => {
      if (i) {
        filterText.innerHTML = "More then 7 ago";
        parent.append(postTemplateFeed(i)) 
      }
    }) 
  })
}


/**
 * A function to display the fetched posts that matches the search input, on the chosen location in html
 * 
 * @param {string} url that fetches the posts to be displayed.
 * @param {string} container to the chosen location in the html 
 */
export function renderPostFeedSearched(postDataList, parent) {
  const searchInput = document.querySelector("#search");

  searchInput.addEventListener("input", e => {
    let searchValue = e.target.value.toLowerCase();
    
    const container = document.querySelector("#postsFeed");
    container.innerHTML = "";
    
    postDataList.forEach( i => {
      if (i.title.toLowerCase().startsWith(searchValue) || i.author.name.toLowerCase().startsWith(searchValue)) {
        parent.append(postTemplateFeed(i));
      } 
    })
  })
}

/**
 * A function to display the fetched posts that matches the logged in name on the chosen location in html
 * 
 * @param {string} url that fetches the posts to be displayed.
 * @param {string} container to the chosen location in the html 
 */
export function renderPostsUser(postDataList, parent) {
  const username = load("profile");
  const { name } = username;
  const message = document.querySelector("#errorMessage")

  postDataList.forEach(e => {
    if (e.author.name === name) {
      message.innerHTML = "";
      parent.append(postTemplateFeedUser(e));
    } 
  })
}

/**
 * A function to display the single fetched post on the chosen location in html
 * 
 * @param {string} url that fetches the posts to be displayed.
 * @param {string} container to the chosen location in the html 
 */
export function renderPostSingle(postDataSingle, parent) {
  parent.append(postTemplateSingle(postDataSingle));
}


