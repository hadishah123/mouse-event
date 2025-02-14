const containerEl = document.querySelector(".container");
const mouseXEl = document.getElementById("mouseX");
const mouseYEl = document.getElementById("mouseY");

// Apply smooth transition to body background
document.body.style.transition = "background-color 0.2s ease-in-out";

// Apply styles for better text readability
mouseXEl.style.cssText = `
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
`;
mouseYEl.style.cssText = mouseXEl.style.cssText; // Apply same styles

window.addEventListener("mousemove", (event) => {
    mouseXEl.textContent = event.clientX;
    mouseYEl.textContent = event.clientY;

    // Restrict color range for better contrast
    const minColor = 100;
    const maxColor = 255;
    const xColor = Math.round(minColor + (event.clientX / window.innerWidth) * (maxColor - minColor));
    const yColor = Math.round(minColor + (event.clientY / window.innerHeight) * (maxColor - minColor));

    // Set background color
    document.body.style.backgroundColor = `rgb(${xColor}, ${yColor}, ${maxColor - xColor})`;
});
