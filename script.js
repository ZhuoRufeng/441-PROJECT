// Peter

// Object containing the prices of each course
const coursePrices = {
    "Course 1": 15,
    "Course 2": 20,
    "Course 3": 25,
    "Course 4": 30,
    "Course 5": 35
};

let cart = {
    "Course 1": 0,
    "Course 2": 0,
    "Course 3": 0,
    "Course 4": 0,
    "Course 5": 0
};

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('course.html')) {
        checkLoginStatus();
    }
// Event listeners for each course's add and remove buttons
    const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        const addButton = course.querySelector('button');
        const courseName = course.querySelector('h2').textContent;

        addButton.addEventListener('click', () => {
            const quantityInput = course.querySelector('input[type="text"]');
            const quantity = parseInt(quantityInput.value.trim());
            cart[courseName] += quantity; 
            updateTotalPrice(); 
        });

        const removeButton = course.querySelector('.remove-course');
        removeButton.addEventListener('click', () => {
            cart[courseName] = 0; 
            const quantityInput = course.querySelector('input[type="text"]');
            quantityInput.value = '';
            updateTotalPrice(); 
        });
    });

    const clearCartButton = document.querySelector('.clear-cart');
    clearCartButton.addEventListener('click', () => {
        Object.keys(cart).forEach(course => cart[course] = 0); 
        document.querySelectorAll('.course input[type="text"]').forEach(input => input.value = '');
        updateTotalPrice(); 
    });

    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', () => {
        let totalPrice = 0;
        Object.keys(cart).forEach(course => totalPrice += cart[course] * coursePrices[course]);
        alert(`You should pay Peter for $${totalPrice}`); // Display total price
    });
});


function checkLoginStatus() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        console.log("User is not logged in. Redirecting to login page...");
        window.location.href = 'login.html'; 
    } else {
        console.log("User is logged in. Access granted.");
    }
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true'); 
        window.location.href = 'course.html';
    } else { 
        alert('Incorrect email or password.');
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert('Registration successful! You can now login.');
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match.');
    }
});
// Function to update the total price based on the items in the cart
function updateTotalPrice() {
    let totalPrice = 0;
    Object.keys(cart).forEach(course => totalPrice += cart[course] * coursePrices[course]);
    const totalPriceElement = document.querySelector('.total-price-section h2');
    totalPriceElement.textContent = `Total Price for All Courses: $${totalPrice}`;
}
document.getElementById('logoutButton')?.addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
    window.location.href = 'login.html'; 
});
let slideIndex = 1;
showSlides(slideIndex);

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// Dynamic Counters
const counters = document.querySelectorAll('.counter-number');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// Testimonials Carousel
let testimonialIndex = 1;
showTestimonials(testimonialIndex);

function prevTestimonial() {
  showTestimonials(testimonialIndex -= 1);
}

function nextTestimonial() {
  showTestimonials(testimonialIndex += 1);
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial-slide");
  if (n > testimonials.length) {
    testimonialIndex = 1;
  }
  if (n < 1) {
    testimonialIndex = testimonials.length;
  }
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  testimonials[testimonialIndex - 1].style.display = "block";
}
// Add interactivity to course cards (example)
const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
  card.addEventListener('click', () => {
    // Here you can add code to show detailed course information
    alert('You clicked on a course card. You can add detailed course info display here.');
  });
});