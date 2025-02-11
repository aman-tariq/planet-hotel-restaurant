let currentSlide = 0;
const slides = document.querySelectorAll('.slider img'); // Get all the slider images

function changeSlide() {
  // Hide all slides by setting opacity to 0
  slides.forEach(slide => {
    slide.style.opacity = '0';
  });

  slides[currentSlide].style.opacity = '1';
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(changeSlide, 5000); // 5000ms = 5 seconds

changeSlide();

window.addEventListener('load', function() {
  const specialOffer = document.getElementById('specialOffer');
  specialOffer.classList.add('visible'); // Add visible class to trigger transition
});

window.addEventListener("scroll", function() {
  const headings = document.querySelectorAll(".scroll-heading"); // Select all elements with this class
  const viewportHeight = window.innerHeight;

  headings.forEach(function(heading) {
    const headingPosition = heading.getBoundingClientRect().top;

    // When the heading enters the viewport, animate it
    if (headingPosition <= viewportHeight / 1.5) {
      heading.classList.add("visible");
    } else {
      heading.classList.remove("visible");
    }
  });
});

// about section
// Select the left and right columns
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');

// Define observer options
const observerOptions = {
  root: null, // Use the viewport
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger when 50% of the element is visible
};

// Function to handle adding and removing the 'active' class
const handleActiveClass = (entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('active'); // Add 'active' class when in viewport
  } else {
    entry.target.classList.remove('active'); // Remove 'active' class when out of viewport
  }
};

// Create the IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(handleActiveClass); // Handle adding/removing 'active' class
}, observerOptions);

// Start observing the left and right columns
observer.observe(leftColumn);
observer.observe(rightColumn);
