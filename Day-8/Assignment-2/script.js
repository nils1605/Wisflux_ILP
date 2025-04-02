// Animation configuration
const animationSteps = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(1.5)" },
    { transform: "rotate(0) scale(1)" }
];

const animationConfig = {
    duration: 2000, // 2 seconds
    iterations: 1,
    fill: "forwards"
};

// Function to animate an image and return a Promise
function animateImage(image) {
    return image.animate(animationSteps, animationConfig).finished;
}

// Get image elements
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

// Start animations sequentially using Promise chaining
animateImage(img1)
    .then(() => animateImage(img2))
    .then(() => animateImage(img3))
    .then(() => console.log("All animations completed!"));
