import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item"><a class="gallery__link" href="${image.original}" onclick="return false;"><img class='gallery__image' src="${image.preview}" data-source="${image.original}" alt="${image.description}" width="300"> </a></div>`
  )
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", markup);

const imagesRef = document.querySelectorAll(".gallery img");

const onImageClick = (event) => {
  const { target } = event;

  imagesRef.forEach((image) => {
    if (image.getAttribute("alt") === target.alt) {
      const instance = basicLightbox.create(`
    <div class="modal">
    <img src='${image.getAttribute("data-source")}' alt='${image.getAttribute(
        "alt"
      )}'>
    </div>
`);
      instance.show();
      const modalEl = instance.element();
      if (modalEl) {
        modalEl.addEventListener("click", (event) => {
          instance.close();
        });
        document.addEventListener("keydown", (escape) => {
          if (escape.key === "Escape") {
            instance.close();
          }
        });
      }
    }
  });
};

galleryRef.addEventListener("click", onImageClick);
