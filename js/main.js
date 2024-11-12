clickButton = document.getElementById("clickButton");
clickDisplay = document.getElementById("clickDisplay");

if (!localStorage.getItem("clickCounter")){
  localStorage.setItem('clickCounter', 0);
}
let clickCounter = localStorage.getItem('clickCounter');

clickDisplay.textContent = clickCounter;


clickButton.addEventListener('click', () => {
  clickCounter++;
  localStorage.setItem('clickCounter', clickCounter);
  
  clickDisplay.textContent = clickCounter;
});


