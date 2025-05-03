document.addEventListener("DOMContentLoaded", () => {
  const aboutUsLink = document.getElementById('about-us-link');
  const contactLink = document.getElementById('contact-link');
  const linkedInLink = document.getElementById('linkedin-link');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dropdownMenuLinks = document.querySelectorAll('#dropdown-menu li a');
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  aboutUsLink.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  const dropdownHoverTargets = [aboutUsLink, contactLink, linkedInLink, ...dropdownMenuLinks];

  dropdownHoverTargets.forEach(el => {
    el.addEventListener('mouseover', () => {
      dropdownMenu.style.display = 'block';
    });

    el.addEventListener('mouseout', () => {
      dropdownMenu.style.display = 'none';
    });
  });


  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (validateName(name) && validateEmail(email)) {
      alert(`Thanks, ${name}! We'll reach out to you at ${email}.`);
      contactForm.reset();
    } else {
      alert('Please fill in both your name and a valid email address.');
    }
  });

   function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

   function validateName(name) {
    return name !== '';
  }

   function sendEmail() {
    console.log("Simulating email sending...");
   }
});

// CSS for animation
const style = document.createElement('style');
// Function to store and retrieve user preferences using localStorage
function storePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Function to trigger animation
function animateImage() {
  const image = document.getElementById('animation-image');
  image.classList.add('animate');
  setTimeout(() => {
      image.classList.remove('animate');
  }, 2000);
}

// Add event listener to button
document.getElementById('animate-btn').addEventListener('click', () => {
  animateImage();
});

const animationEnabled = getPreference('animation-enabled');
if (animationEnabled === 'true') 
{
  document.getElementById('animate-btn').addEventListener('mouseover', () => {
      animateImage();
  });
}

// Store animation enabled preference
storePreference('animation-enabled', 'true');