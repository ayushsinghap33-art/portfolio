```javascript
const texts = [
    "Final Year CSE Student",
    "Full Stack Developer",
    "AI Enthusiast",
    "React Developer",
    "Future Software Engineer"
];

let count = 0;
let index = 0;

function type() {

    if (count === texts.length) {
        count = 0;
    }

    let currentText = texts[count];
    let letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 120);
    }
}

type();

ScrollReveal().reveal(
    '.project-card, .skill-card, .edu-card, .card',
    {
        delay: 200,
        distance: '50px',
        duration: 1000,
        origin: 'bottom'
    }
);
```
