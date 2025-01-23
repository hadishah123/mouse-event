const containerEl = document.querySelector(".container");
const mouseXEl = document.getElementById("mouseX");
const mouseYEl = document.getElementById("mouseY");

window.addEventListener("mousemove", (event) => {
    mouseXEl.textContent = event.clientX;
    mouseYEl.textContent = event.clientY;

    // Calculate background color based on mouse position
    const maxColorValue = 255;
    const xColor = Math.round(event.clientX / window.innerWidth * maxColorValue);
    const yColor = Math.round(event.clientY / window.innerHeight * maxColorValue);

    // Create a dynamic color using RGB values
    const backgroundColor = `rgb(${xColor}, ${yColor}, ${maxColorValue - xColor})`;
    document.body.style.backgroundColor = backgroundColor;
});
