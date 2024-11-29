// Array of 6 images for the slider
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
]
let currentImageIdex = 0;
// Get the image element and button element
const sliderImage = document.getElementById('slider-img');
const changeButton = document.getElementById('change-img-btn');
// function to change image automatically
function changeImageAutomatically(){
    setInterval(() =>{
        currentImageIdex = (currentImageIdex + 1) % images.length;
        sliderImage. = images[currentImageIdex];
    }, 3000);
    // change image every three seconds
}
// function change image when the button is clicked 
changeButton.addEventListener('click', () =>{
    currentImageIdex = (currentImageIdex + 1) % images.length;
    sliderImage.src = images[currentImageIdex];
});
// start automatic image change
changeImageAutomatically();