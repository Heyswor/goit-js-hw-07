import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}" onclick="return false;">
          <img class='gallery__image' src="${image.preview}" data-source="${image.original}" alt="${image.description}" width="300">
        </a>
      </div>`
  )
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", markup);

const imageRef = document.querySelectorAll(".gallery img");
console.log(imageRef);
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <img src='' alt=''>
//     </div>
// `);

const onImageClick = (event) => {
  imageRef.forEach((image) => {
    console.log(image);
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src='${image.getAttribute("data-source")}' alt=''>
    </div>
`);
    instance.show(() => {});
  });
};

// const instance = basicLightbox.create(`
//     <div class="modal">
//     <img>
//     </div>
// `);
// const modalEl = instance.element();

// const markup = galleryItems
//   .map(
//     (image) =>
//       `<div class="gallery__item"><a class="gallery__link" href="${image.original}" onclick="return false;"><img class='gallery__image' src="${image.preview}" data-source="${image.original}" alt="${image.description}" width="300"> </a></div>`
//   )
//   .join("");
// galleryRef.insertAdjacentHTML("afterbegin", markup);

// const onImageClick = (event) => {
//   const { target } = event;

//   if (target.nodeName !== "IMG") {
//     return;
//   }

//   galleryItems.map((element) => {
//     if (target.alt === element.description) {
//       instance.show(() => {
//         const bigImg = modalEl.querySelector("img");
//         bigImg.classList = "modalImg";
//         bigImg.src = target.dataset.source;
//         bigImg.alt = target.alt;
//         if (modalEl) {
//           modalEl.addEventListener("click", (event) => {
//             instance.close(() => {
//               event.target.src.remove();
//             });
//           });
//         }
//       });
//     }
//   });
// };

// document.addEventListener("keydown", (escape) => {
//   if (escape.key === "Escape") {
//     instance.close(() => {
//       target.remove();
//     });
//   }
// });

galleryRef.addEventListener("click", onImageClick);
