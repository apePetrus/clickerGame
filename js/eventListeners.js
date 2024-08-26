import { incrementCounter, checkThreshold, rockItemUpgradeEffects } from "./gameLogic.js";
import { updateClicks, updateRocks, rockItemEnablerButton, rockItemButtonCloser } from "./uiUpdates.js";

// Comes from clickHandler.js from handleClick()
document.addEventListener('counterUpdated', () => {
    incrementCounter();
    updateClicks();
    updateRocks();
    checkThreshold();
});

// Comes from clickHandler.js from upgradeToRockItem()
document.addEventListener('rockItemUpgradeEvent', () => {
    rockItemUpgradeEffects();
});

// Comes from gameLogic.js from checkThreshold() when (counter == 10)
document.addEventListener('rockItemEnabler', () => {
    rockItemEnablerButton();
});

// Comes from gameLogic.js from rockUpgradeItemEffects
document.addEventListener('rockItemButtonCloseEvent', () => {
    rockItemButtonCloser();
})