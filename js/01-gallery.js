import { galleryItems } from './gallery-items.js';
const boxGallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

boxGallery.insertAdjacentHTML("beforeend", markup);

boxGallery.addEventListener("click", openModal);

function openModal(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const dataSource = evt.target.getAttribute("data-source");
    
    const instance = basicLightbox.create(
        `<img src="${dataSource}"/> `)
    
    instance.show();

    document.addEventListener("keydown", closeEscModal, { once: true });

    function closeEscModal(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}