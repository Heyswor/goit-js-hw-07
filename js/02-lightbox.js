import { galleryItems } from './gallery-items.js';
import SimpleLightbox from '../node_modules/simplelightbox/dist/simple-lightbox.esm.js'
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item"><a class="gallery__link" href="${image.original}" onclick="return false;"><img class='gallery__image' src="${image.preview}" data-source="${image.original}" alt="${image.description}" width="300"> </a></div>`
  )
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", markup);


const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
