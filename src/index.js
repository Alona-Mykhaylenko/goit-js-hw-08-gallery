import galleryItems from "./gallery-items.js";
console.log(galleryItems);

const refs = {
  jsGallery: document.querySelector(".js-gallery"),
  jsLightbox: document.querySelector(".js-lightbox"),
  lightBox: document.querySelector(".lightbox"),
  modalCloseBtn: document.querySelector(".lightbox__button"),
  lightboxImage: document.querySelector(".lightbox__image"),
  lighBoxOverlay: document.querySelector(".lightbox__overlay"),
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

refs.jsGallery.addEventListener("click", (event) => {
  event.preventDefault();
  const targetImage = event.target;

  if (targetImage.classList.contains("gallery")) return;

  refs.lightBox.classList.add("is-open");
  refs.lightboxImage.src = targetImage.dataset.source;
  refs.lightboxImage.alt = targetImage.alt;
});

refs.jsLightbox.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("lightbox__overlay") ||
    event.target.classList.contains("lightbox__button") ||
    event.target.code === "Escape"
  ) {
    closeLightBox(event);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeLightBox(event);
  }
});

function closeLightBox(event) {
  refs.lightBox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
}

// refs.lightBox.addEventListener("keydown", (event) => {
//   if (
//     refs.lightBox.classList.contains("is-open") &&
//     event.code === "ArrowRight"
//   ) {
//     const imageArray = refs.jsGallery.children;
//     console.log(imageArray);

//     const galleryMove = [...imageArray].map((item, index) => {
//       return item[index+1];
//     });
//   }
// });

// refs.lightBox.addEventListener("keydown", (event) => {
//   if (
//     refs.lightBox.classList.contains("is-open") &&
//     event.code === "ArrowRight"
//   ) {
//     const imageArray = refs.jsGallery.children;
//     console.log(imageArray);

//     currentImageIndex = imageArray.indexOf(targetImage);

//     refs.lightboxImage.src = targetImage[currentImageIndex + 1].dataset.source;
//     // refs.lightboxImage.alt = targetImage.alt;
//   }
// });

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

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне
// клавишами "влево" и "вправо".
