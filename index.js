"use strict"

window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#5fb378",
        "#c26870",
        "#b9699b",
        "#bbcc7d",
        "#7170c0",
        "#789eb4"
    ];


    // Lets get going with the sound here
    pads.forEach( (pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        })
    })

    // Create a function that makes bubbles
const createBubbles = (index) => {
    const bubble = document.createElement("div");

    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function() {
        visual.removeChild(this)
    })
};
});
