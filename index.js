const buttonContainer = document.getElementById("button-container");
const button = document.getElementById("button");
const glow = buttonContainer.querySelector("#button-glow");

const containerOffsetLeft = buttonContainer.offsetLeft;
const containerOffsetTop = buttonContainer.offsetTop;

const buttonContainerCenterX = containerOffsetLeft + (buttonContainer.offsetWidth / 2);
const buttonContainerCenterY = containerOffsetTop + (buttonContainer.offsetHeight / 2);

buttonContainer.addEventListener("mousemove", (e) => {
    // Positions, 100 is half of glow size (200)
    const left = e.clientX - containerOffsetLeft - 100;
    const top = e.clientY - containerOffsetTop - 100;

    // Position glow
    glow.style.left = `${left}px`;
    glow.style.top = `${top}px`;

    const distance = distanceFromCenter(e.clientX, e.clientY);

    // Won't work well; only hides glow in corners
    const maxDistance = distanceFromCenter(containerOffsetLeft, containerOffsetTop);
    glow.style.opacity = (maxDistance - distance) / 800;

    console.log(((maxDistance - distance) / 100) - 2);

    // wip
    // if (distanceFromCenterX > distanceFromCenterY) {
    //     glow.style.opacity = Math.abs(distanceFromCenterX(e.clientX) - distance) / 100;
    // }
    // else {
    //     glow.style.opacity = Math.abs(distanceFromCenterY(e.clientY) - distance) / 100;
    // }
});

function distanceFromCenterX(left) {
    return Math.abs(buttonContainerCenterX - left);
}

function distanceFromCenterY(top) {
    return Math.abs(buttonContainerCenterX - top);
}

function distanceFromCenter(left, top) {
    const x = distanceFromCenterX(left);
    const y = distanceFromCenterY(top);

    // Hypotenuse with Pythagorean
    return Math.sqrt(x*x + y*y);
}