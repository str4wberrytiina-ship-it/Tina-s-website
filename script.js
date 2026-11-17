
document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("close");

    // Open artwork
    document.querySelectorAll(".lightbox-trigger").forEach(image => {

        image.addEventListener("click", () => {

            if (!lightbox || !lightboxImage) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        });

    });

    // Close lightbox
    function closeLightbox() {

        if (!lightbox || !lightboxImage) return;

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }

    // Close button
    if (closeButton) {
        closeButton.addEventListener("click", closeLightbox);
    }

    // Click outside artwork
    if (lightbox) {

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

    }

    // Escape key
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

});
