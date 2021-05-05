import galleryItems from "./gallery-items.js";
console.log(galleryItems);

const refs = {
  jsGallery: document.querySelector(".js-gallery"),
  jsLightbox: document.querySelector(".js-lightbox"),
  modalCloseBtn: document.querySelector(".lightbox__button"),
  lightboxImage: document.querySelector(".lightbox__image"),
};

const gallery = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
  })
  .join(" ");

refs.jsGallery.insertAdjacentHTML("afterbegin", gallery);

refs.jsGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  const targetImage = event.target;

  if (targetImage.classList.contains("gallery")) {
    return;
  }
  targetImage.classList.add("is-open");

  refs.lightboxImage.src = targetImage.src;
  refs.lightboxImage.alt = targetImage.alt;
}

// refs.modalCloseBtn.addEventListener("click", onModalCloseBtnClick);

// function onModalCloseBtnClick(event) {
//   const openImage = refs.jsGallery.querySelector("is-open");
//   if (openImage) {
//     openImage.classList.remove("is-open");
//   }
// }

// Создай галерею с возможностью клика по ее элементам и
// просмотра полноразмерного изображения в модальном окне.

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели
// предыдущее.
