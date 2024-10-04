document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button'); // filters buttons like car, buildings etc.
    const galleryItems = document.querySelectorAll('.gallery-item'); // each item related to that category...

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            document.querySelector('.filter-button.active').classList.remove('active');
            button.classList.add('active');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// filter images by category
function filterImages(category) {
    const allImages = document.querySelectorAll(".gallery-item");
    filteredImages = [];
    allImages.forEach((img) => {
        if (category === "all" || img.classList.contains(category)) {
            filteredImages.push({
                src: img.querySelector('img').src,
                caption: img.getAttribute('data-title') || "Image",
                description: img.getAttribute('data-description') || ""
            });

            img.onclick = function () {
                openModal(filteredImages.length - 1);
            };
        } else {

            img.onclick = null;
        }
    });

    filteredImages.forEach((imageObj, index) => {
        const imgElement = Array.from(allImages).find(img => img.querySelector('img').src === imageObj.src);
        if (imgElement) {
            imgElement.onclick = function () {
                openModal(index); // Open the clicked image
            };
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    filterImages("all");
});

document.querySelectorAll(".filter-button").forEach(button => {
    button.onclick = function () {
        const category = this.getAttribute("data-filter");
        filterImages(category);
    };
});

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let modalCaption = document.getElementById("imageCaption");
let modalDescription = document.getElementById("imageDescription");
let currentImageIndex = -1;
let filteredImages = [];
function openModal(index) {
    modal.style.display = "block";
    currentImageIndex = index;
    displayImage(filteredImages[currentImageIndex]);
}

function displayImage(imageObj) {
    modalImg.src = imageObj.src;
    modalCaption.innerHTML = imageObj.caption;
    modalDescription.innerHTML = imageObj.description;
}
document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
};


function nextImage() {
    if (currentImageIndex < filteredImages.length - 1) {
        currentImageIndex++;
        displayImage(filteredImages[currentImageIndex]);
    }
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        displayImage(filteredImages[currentImageIndex]);
    }
}

// Next and Previous button 
document.querySelector(".ooui--next-ltr").onclick = nextImage;
document.querySelector(".ooui--previous-ltr").onclick = previousImage;

//keyboard navigation for modal
document.addEventListener('keydown', function (event) {
    if (modal.style.display === "block") {
        if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "ArrowLeft") {
            previousImage();
        }
    }
});


