/* GUIDE FOR NAMING gameLogic.js FUNCTIONS:
    everything that makes clicking automatic is called nameWorker (e.g. slaveWorker, dogWorker) */

import { updateRocks } from "./uiUpdates";

let counter = 0;
let rocks = 0;
let rockPickingLevel = 1;

let slaveCost = 15;
let slaves = 0;

export function getCounter(){  // Getter
    return counter;
}


export function getRocks(){  // Getter
    return rocks;
}


// Increment the counters based on picking level
export function incrementCounter(){
    counter += 1;
    rocks += rockPickingLevel;
}


// Check counter and make CustomEvents, like in-game events and achievements
export function checkThreshold(){
    if (counter == 10){  // If == 10, the listener will trigger rockItemEnablerButton()
        const rockItemEnablerEvent = new CustomEvent('rockItemEnabler');
        document.dispatchEvent(rockItemEnablerEvent);
    }
}

// Upgrade the Picking Level
export function rockItemUpgradeEffects(){
    rockPickingLevel = 2;

    const rockItemButtonClose = new CustomEvent('rockItemButtonCloseEvent');
    document.dispatchEvent(rockItemButtonClose);
}


export function slaveWorker(){
    if (rocks >= slaveCost){
        rocks -= slaveCost;
        slave += 1;
        slaveCost = Math.round(slaveCost * 1.15);

        
    }
}
