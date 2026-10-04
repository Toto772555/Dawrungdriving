(() => {
    const links = [...document.querySelectorAll('.customer-gallery-grid a')];
    const viewer = document.querySelector('.gallery-viewer');
    if (!links.length || !viewer) return;

    const image = viewer.querySelector('.gallery-viewer-image');
    const count = viewer.querySelector('.gallery-viewer-count');
    let current = 0;
    let opener;

    function showImage(index) {
        current = (index + links.length) % links.length;
        image.src = links[current].href;
        image.alt = links[current].querySelector('img').alt;
        count.textContent = `ภาพที่ ${current + 1} / ${links.length}`;
    }

    links.forEach((link, index) => {
        link.setAttribute('aria-haspopup', 'dialog');
        link.addEventListener('click', (event) => {
            event.preventDefault();
            opener = link;
            showImage(index);
            viewer.showModal();
            document.body.classList.add('gallery-viewer-open');
        });
    });

    viewer.querySelector('.gallery-viewer-close').addEventListener('click', () => viewer.close());
    viewer.querySelector('.gallery-viewer-prev').addEventListener('click', () => showImage(current - 1));
    viewer.querySelector('.gallery-viewer-next').addEventListener('click', () => showImage(current + 1));
    viewer.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            showImage(current + (event.key === 'ArrowLeft' ? -1 : 1));
        }
    });
    viewer.addEventListener('click', (event) => {
        if (event.target !== viewer) return;
        const bounds = viewer.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
    });
    viewer.addEventListener('close', () => {
        document.body.classList.remove('gallery-viewer-open');
        opener?.focus({ preventScroll: true });
    });
})();
