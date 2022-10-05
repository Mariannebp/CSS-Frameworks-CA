export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("shadow", "rounded", "m-auto", "mb-4", "p-3");
  post.innerHTML = postData.title;

  if (postData.img) {
    const img = document.createElement(`img`);
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData))
}