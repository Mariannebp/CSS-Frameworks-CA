import { getPosts } from "../api/posts/get.mjs";
import { updatePost } from "../api/posts/update.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPosts(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;
    
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries())
      post.id = id;

      updatePost(post)
    })
  }
}