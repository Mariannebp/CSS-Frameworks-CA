import { createPost } from "../api/posts/create.mjs";

export function setCreateNewPostListener() {
  const form = document.querySelector("#addNewPost");
  const newTitle = document.querySelector("#title");
  const newText = document.querySelector("#text");
  const newMedia = document.querySelector("#media");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = newTitle.value;
      const text = newText.value;
      const media = newMedia.value;

      createPost({
        title: title,
        body: text,
        media: media,
      })
    })
  }
}
