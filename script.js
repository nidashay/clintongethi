const text = [
    "Python Developer",
    "C++ Programmer",
    "Low-end PC Warrior",
    "Building dumb-nidashay"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const speed = 100;

function type() {
    if (index >= text.length) index = 0;

    if (!isDeleting) {
        currentText = text[index].substring(0, charIndex++);
    } else {
        currentText = text[index].substring(0, charIndex--);
    }

    document.querySelector(".typing").textContent = currentText;

    if (!isDeleting && charIndex === text[index].length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();
