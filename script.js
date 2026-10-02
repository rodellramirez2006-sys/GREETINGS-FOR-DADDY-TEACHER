const startButton = document.getElementById("startButton");
const openLetterButton = document.getElementById("openLetterButton");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const letterCard = document.getElementById("letterCard");
const thankButton = document.getElementById("thankButton");
const thankMessage = document.getElementById("thankMessage");

let letterOpened = false;

startButton.addEventListener("click", () => {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
});

openLetterButton.addEventListener("click", () => {
    if (letterOpened) return;

    letterOpened = true;
    envelopeWrapper.classList.add("opening");
    openLetterButton.disabled = true;

    setTimeout(() => {
        letterCard.classList.add("show");

        setTimeout(() => {
            letterCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 150);
    }, 900);
});

thankButton.addEventListener("click", () => {
    thankMessage.classList.add("show");
    thankButton.textContent = "💙 Appreciation Sent!";

    thankButton.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ],
        { duration: 450 }
    );
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

window.addEventListener("mousemove", event => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    document.querySelectorAll(".floating-items span").forEach((item, index) => {
        const amount = (index + 1) * 0.4;

        item.style.transform =
            `translate(${x * amount}px, ${y * amount}px)`;
    });
});
