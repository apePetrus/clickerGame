import { getCounter, getRocks } from "./gameLogic.js";

// Update the clicking counter info
export function updateClicks(){
    const clicks = document.getElementById("counter");
    clicks.innerText = getCounter() + " clicks";
}
window.updateClicks = updateClicks;

// Update the rocks counter info
export function updateRocks(){
    const rockCounter = document.getElementById("rocks");
    rockCounter.innerText = getRocks() + " rocks";
}


// Triggered after 10 clicks and look like clickable
export function rockItemEnablerButton(){
    const rockItem = document.getElementById("rockItem");
    rockItem.innerText = "Break rocks with a rock";
}


// Make the button to look like not clickable anymore
export function rockItemButtonCloser(){
    const textStr = "Break rocks with a rock!";
    const rockItem = document.getElementById("rockItem");
    rockItem.innerText = textStr.strike();
}


/* TO-DO: make the rockItemButtonCloser() write the text with strike() */