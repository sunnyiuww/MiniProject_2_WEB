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
