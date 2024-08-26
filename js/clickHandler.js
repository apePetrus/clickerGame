/* This will be listened and trigger
incrementCounter(), updateClicks(), updateRocks(), checkThreshold() */
export function handleClick(){
    const counterUpdate = new CustomEvent('counterUpdated');
    document.dispatchEvent(counterUpdate);
}
window.handleClick = handleClick;  // Turn global


/* This will be listened and trigger rockItemUpgradeEffects(),
which upgrades the rock counter then make the upgrade button to become closed */
export function upgradeToRockItem(){
    const upgradeToRockItemEvent = new CustomEvent('rockItemUpgradeEvent');
    document.dispatchEvent(upgradeToRockItemEvent);
}
window.upgradeToRockItem = upgradeToRockItem;