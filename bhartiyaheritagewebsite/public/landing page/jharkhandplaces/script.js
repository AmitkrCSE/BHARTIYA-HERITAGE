


let currentSlideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Function to navigate slides manually
function changeSlide(step) {
  const slides = document.querySelectorAll('.slide');
  currentSlideIndex = (currentSlideIndex + step + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

// Auto slider logic
function startAutoSlider() {
  const slides = document.querySelectorAll('.slide');
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }, 3000); // Change slide every second
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Show the first slide
  showSlide(currentSlideIndex);

  // Add event listeners for navigation buttons
  prevButton.addEventListener('click', () => changeSlide(-1));
  nextButton.addEventListener('click', () => changeSlide(1));

  // Start the auto slider
  startAutoSlider();
});




let currentPlaceIndex = 0;

// Function to show a specific place
function showPlace(index) {
  // Get all the buttons and place content
  const tabs = document.querySelectorAll('.tab-btn');
  const places = document.querySelectorAll('.place');

  // Remove active class from all buttons and places
  tabs.forEach((tab) => tab.classList.remove('active'));
  places.forEach((place) => place.classList.remove('active'));

  // Add active class to the selected button and place
  tabs[index].classList.add('active');
  places[index].classList.add('active');
}

// Initialize the first place as active on page load
document.addEventListener('DOMContentLoaded', () => {
  showPlace(currentPlaceIndex);
});







function showPlace(index) {
  // Get all place elements
  const places = document.querySelectorAll('.place');
  const buttons = document.querySelectorAll('.tab-btn');

  // Hide all places and remove active class from all buttons
  places.forEach((place, i) => {
    place.style.display = 'none';
    buttons[i].classList.remove('active');
  });

  // Show the selected place and add active class to the clicked button
  places[index].style.display = 'flex';
  buttons[index].classList.add('active');
}

// Initialize the first place as visible
showPlace(0);
















