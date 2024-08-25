let counter = 0;

function handleClick(){
    incrementCounter();
    updateClicks();
    checkThreshold();
}

function incrementCounter(){
    counter += 1;
}

function updateClicks(){
    const clicks = document.getElementById("counter");
    clicks.innerText = counter + " clicks";
}

function tooMuch(){
    const tooMuch = document.getElementById("toomuch");
    tooMuch.innerText = "Wow, you clicked too much!"
}

function checkThreshold(){
    if (counter > 10){
        tooMuch();
    }
}