const buttonContainer = document.getElementById("button-container");
const button = document.getElementById("button");
const glow = buttonContainer.querySelector("#button-glow");

buttonContainer.addEventListener("mousemove", (e) => {
    // Positions, 100 is half of glow size (200)
    const left = e.clientX - buttonContainer.offsetLeft - 100;
    const top = e.clientY - buttonContainer.offsetTop - 100;

    // Position glow
    glow.style.left = `${left}px`;
    glow.style.top = `${top}px`;
});
