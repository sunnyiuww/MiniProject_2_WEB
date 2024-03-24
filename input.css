var textToType = "Information System Student";
var typingSpeed = 90; 
var deleteSpeed = 80; 
var typingInterval = 10000;

function typeEffect(element, text, typingSpeed, deleteSpeed, interval) {
    var i = 0;
    var isDeleting = false;

    var timer = setInterval(function() {
        if (isDeleting) {
            element.textContent = text.substring(0, i - 1);
            i--;
        } else {
            element.textContent = text.substring(0, i + 1);
            i++;
        }

        if (i === text.length + 1) {
            isDeleting = true;
        }

        if (isDeleting && i === 0) {
            isDeleting = false;
        }

        if (!isDeleting && i === text.length) {
            setTimeout(function() {
                clearInterval(timer);
                typeEffect(element, textToType, typingSpeed, deleteSpeed, interval);
            }, interval);
        }
    }, isDeleting ? deleteSpeed : typingSpeed);
}

var typingTextElement = document.getElementById("typing-text-content");
typeEffect(typingTextElement, textToType, typingSpeed, deleteSpeed, typingInterval);

typingTextElement.style.color = "#9400FF";


// Inisialisasi ScrollReveal
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Menerapkan efek reveal pada setiap elemen yang diinginkan
sr.reveal('.blob1, .blob2', { origin: 'top' });
sr.reveal('.container > div', { origin: 'bottom', interval: 200 });
sr.reveal('.home-img, .educations-container, .certificates-box, .contact form', { origin: 'bottom', interval: 200 });
sr.reveal('.home-contact h1, .about-img', { origin: 'left' });
sr.reveal('.home-contact p, .about-content', { origin: 'right' });
sr.reveal('.user-pic', { origin: 'bottom', interval: 200 });

// Menambahkan efek reveal pada elemen teks <h4> di bagian "About"
sr.reveal('.container > div > h4, .container > h4.title', { origin: 'bottom', interval: 200 });

// Menambahkan efek reveal pada bagian "Contact"
sr.reveal('#contact .container > div, #contact form', { origin: 'bottom', interval: 200 });
