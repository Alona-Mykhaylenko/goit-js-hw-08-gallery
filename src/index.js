import galleryItems from "./gallery-items.js";

const refs = {
  jsGallery: document.querySelector(".js-gallery"),
  jsLightbox: document.querySelector(".js-lightbox"),
  lightBox: document.querySelector(".lightbox"),
  modalCloseBtn: document.querySelector(".lightbox__button"),
  lightboxImage: document.querySelector(".lightbox__image"),
  lighBoxOverlay: document.querySelector(".lightbox__overlay"),
};

const gallery = galleryItems
  .map((image, index) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      data-index="${index}"
      alt="${image.description}"
    />
  </a>
</li>`;
  })
  .join(" ");

refs.jsGallery.insertAdjacentHTML("afterbegin", gallery);

let currentIndex = 0;

refs.jsGallery.addEventListener("click", (event) => {
  event.preventDefault();
  const targetImage = event.target;

  if (targetImage.classList.contains("gallery")) return;

  refs.lightBox.classList.add("is-open");
  currentIndex = +targetImage.dataset.index;
  replaceImage(targetImage.dataset.source, targetImage.alt);
  window.addEventListener("keydown", galleryScroll);
});

refs.jsLightbox.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") return;
  else closeLightBox(event);
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeLightBox(event);
  }
});

function closeLightBox(event) {
  refs.lightBox.classList.remove("is-open");
  replaceImage();
  window.removeEventListener("keydown", galleryScroll);
}

function replaceImage(src, alt) {
  refs.lightboxImage.src = src;
  refs.lightboxImage.alt = alt;
}

// ============== Adding scrolling of images in modal window=============  //

function galleryScroll(event) {
  if (event.code === "ArrowRight") {
    if (currentIndex === galleryItems.length) {
      currentIndex = 0;
    }
    currentIndex += 1;
    replaceImage(
      galleryItems[currentIndex].original,
      galleryItems[currentIndex].description
    );
  } else if (event.code === "ArrowLeft") {
    if (currentIndex === 0) {
      currentIndex = galleryItems.length;
    }
    currentIndex -= 1;
    replaceImage(
      galleryItems[currentIndex].original,
      galleryItems[currentIndex].description
    );
  }
}

// - Add checking for the border index
// - add and remove event listener only when opening the modal window

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
