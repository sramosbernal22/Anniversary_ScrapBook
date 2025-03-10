const imageNames = [
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",
    "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg",
    "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg",
    "image16.jpg", "image17.png", "image18.png"
];
const imagePath = "./images/"; // Path to images folder

const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dot-container");

imageNames.forEach((image, index) => {
    // Create slide div
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");

    // Create image element
    const img = document.createElement("img");
    img.src = imagePath + image;
    img.alt = `Slide ${index + 1}`;

    // Append image to slide and slide to slider
    slideDiv.appendChild(img);
    slider.appendChild(slideDiv);

    // Create dot for navigation
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => currentSlide(index));

    dotContainer.appendChild(dot);
});

// Re-select slides and dots after adding them dynamically
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = i === currentIndex ? 'scale(1)' : 'scale(0.8)';
        slide.style.width = i === currentIndex ? '100%' : '80%';
    });

    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-slide every 10 seconds
setInterval(nextSlide, 10000);
