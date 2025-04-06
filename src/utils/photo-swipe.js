import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#award-gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
  wheelToZoom: true,
  closeOnVerticalDrag: true,
});

document.addEventListener("astro:page-load", () => {
  lightbox.init();
});
