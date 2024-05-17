import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#award-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
    wheelToZoom: true,
    closeOnVerticalDrag: true
});

lightbox.init();
