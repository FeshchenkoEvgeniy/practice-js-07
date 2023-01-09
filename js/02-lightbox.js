import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxGallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

boxGallery.insertAdjacentHTML("beforeend", markup);

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: "250ms"
});
console.log(boxGallery);