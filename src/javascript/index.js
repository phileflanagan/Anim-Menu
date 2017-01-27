const spinningMenu = document.querySelector('.spinningmenu');
const spinningContainer = spinningMenu.querySelector('ul');
const spinningElements = spinningContainer.querySelectorAll('li');
const lastSpinningElement = spinningContainer.querySelector('li:last-child');


const rotationDuration = 15; //seconds
// lastSpinningElement.style.borderColor = 'yellow';
function endInitSpinning() {
  spinningElements.forEach((el, i) => {
    el.style.animation = `rot ${rotationDuration}s infinite 0.0s linear`;
  });
}

lastSpinningElement.addEventListener('animationiteration', endInitSpinning)
