// Modal functionality
const modal = document.getElementById('customize-modal');
const closeBtn = document.getElementsByClassName('close')[0];

// Get all customize buttons
const customizeBtns = document.querySelectorAll('.customize-btn');

// Add event listeners to customize buttons
customizeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const product = this.parentElement.getAttribute('data-product');
        document.getElementById('product-select').value = product;
        modal.style.display = 'block';
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Form submission
const form = document.getElementById('customize-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const product = formData.get('product');
    const image = formData.get('image');
    const text = formData.get('text');
    const color = formData.get('color');
    
    // Here you would typically send the data to a server
    // For now, we'll just log it and show an alert
    console.log('Customization submitted:', { product, image, text, color });
    alert(`Thank you for your customization request!\nProduct: ${product}\nText: ${text}\nColor: ${color}\nImage: ${image ? image.name : 'None'}`);
    
    // Close the modal
    modal.style.display = 'none';
    
    // Reset the form
    form.reset();
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Observe product and bestseller items
const productItems = document.querySelectorAll('.product, .bestseller, .feature, .testimonial, .gallery-grid img');
productItems.forEach(item => {
    observer.observe(item);
});

// Hero text animation
const heroText = document.querySelector('.hero h2');
const heroP = document.querySelector('.hero p');
const heroBtn = document.querySelector('.hero .btn');

setTimeout(() => {
    heroText.classList.add('animate');
}, 500);

setTimeout(() => {
    heroP.classList.add('animate');
}, 1000);

setTimeout(() => {
    heroBtn.classList.add('animate');
}, 1500);

// Lightbox functionality for gallery
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-image" src="" alt="">
    <div class="lightbox-caption"></div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        lightbox.style.display = 'flex';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
