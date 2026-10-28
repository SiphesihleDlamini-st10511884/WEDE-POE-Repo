// --- 1. ACCORDION (About Page) ---
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// --- 2. SEARCH FILTER (Products Page) ---
function searchProducts() {
    let input = document.getElementById('product-search').value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');

    // Loop through all product cards and hide the ones that don't match the search
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// --- 3. LIGHTBOX (Products Page) ---
function openLightbox(imgSrc) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    if(lightbox) {
        lightbox.style.display = 'flex';
        lightboxImg.src = imgSrc;
    }
}

function closeLightbox() {
    let lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.style.display = 'none';
    }
}

// --- Helper Function for Form Errors ---
// This puts a red error message under the input field
function showError(inputId, message) {
    let inputElement = document.getElementById(inputId);
    let oldError = inputElement.parentElement.querySelector('.error-msg');
    if (oldError) oldError.remove();
    
    let errorSpan = document.createElement('span');
    errorSpan.className = 'error-msg';
    errorSpan.style.color = 'red';
    errorSpan.style.fontSize = '0.85rem';
    errorSpan.style.display = 'block';
    errorSpan.innerText = message;
    
    inputElement.parentElement.appendChild(errorSpan);
    inputElement.style.borderColor = 'red';
}

function clearError(inputId) {
    let inputElement = document.getElementById(inputId);
    let oldError = inputElement.parentElement.querySelector('.error-msg');
    if (oldError) oldError.remove();
    inputElement.style.borderColor = '#d7ccc8';
}

// --- 4. ENQUIRY FORM VALIDATION & AJAX (Enquiry Page) ---
let enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop normal form submission

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let date = document.getElementById('eventdate').value;
        let isValid = true;

        // Clear old errors
        ['name', 'email', 'phone', 'eventdate'].forEach(clearError);

        // Check inputs
        if (name === '') { showError('name', 'Name is required.'); isValid = false; }
        if (email === '') { showError('email', 'Email is required.'); isValid = false; }
        if (phone === '') { showError('phone', 'Phone is required.'); isValid = false; }
        if (date === '') { showError('eventdate', 'Event date is required.'); isValid = false; }

        if (!isValid) return; // Stop if there are errors

        // Simulate AJAX sending
        let responseDiv = document.getElementById('enquiry-response');
        responseDiv.style.display = 'block';
        responseDiv.style.backgroundColor = '#fff3cd';
        responseDiv.style.color = '#856404';
        responseDiv.innerHTML = "Sending your enquiry... Please wait.";

        setTimeout(function() {
            responseDiv.style.backgroundColor = '#d4edda';
            responseDiv.style.color = '#155724';
            responseDiv.innerHTML = `<strong>Thank you, ${name}!</strong><br>We have received your cake enquiry for <strong>${date}</strong>. We will contact you at <strong>${email}</strong> within 24 hours.`;
            enquiryForm.reset();
        }, 1500); 
    });
}

// --- 5. CONTACT FORM VALIDATION & MAILTO (Contact Page) ---
let contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('fullname').value.trim();
        let email = document.getElementById('email2').value.trim();
        let phone = document.getElementById('phone2').value.trim();
        let subject = document.getElementById('subject').value.trim();
        let msg = document.getElementById('message').value.trim();
        let isValid = true;

        // Clear old errors
        ['fullname', 'email2', 'phone2', 'message'].forEach(clearError);

        // Check inputs
        if (name === '') { showError('fullname', 'Name is required.'); isValid = false; }
        if (email === '') { showError('email2', 'Email is required.'); isValid = false; }
        if (phone === '') { showError('phone2', 'Phone is required.'); isValid = false; }
        if (msg === '') { showError('message', 'Message is required.'); isValid = false; }

        if (!isValid) return;

        // Simulate AJAX for email compilation
        let responseDiv = document.getElementById('contact-response');
        responseDiv.style.display = 'block';
        responseDiv.innerHTML = "Compiling email...";

        setTimeout(function() {
            let mailtoLink = `mailto:hello@bakedbysihle.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\nMessage:\n" + msg)}`;
            
            responseDiv.innerHTML = "Your email app has been opened. Please send the email to complete your message.";
            
            // Open the email app
            window.location.href = mailtoLink;
            contactForm.reset();
        }, 1000);
    });
}

// --- 6. INTERACTIVE LEAFLET MAP (Contact Page) ---
let mapContainer = document.getElementById('map');
if (mapContainer) {
    // Center on South Africa roughly
    let map = L.map('map').setView([-26.1954, 28.0352], 6);
    
    // Load the OpenStreetMap design
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marker 1: Johannesburg
    L.marker([-26.1954, 28.0352]).addTo(map)
        .bindPopup('<b>Baked By Sihle</b><br>17 Wolmarans Street, Johannesburg.').openPopup();

    // Marker 2: Polokwane
    L.marker([-23.8996, 29.4618]).addTo(map)
        .bindPopup('<b>Baked By Sihle</b><br>50 Rissik Street, Polokwane.');
}