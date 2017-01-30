const spinningMenu = document.querySelector('.spinningmenu');
const spinningContainer = spinningMenu.querySelector('ul');
const spinningElements = spinningContainer.querySelectorAll('li');
const lastSpinningElement = spinningContainer.querySelector('li:first-child');


// rotation duration complete (in seconds)
const rotationDuration = 30;
// calculated duration of single item
const rotationDurationSingle = rotationDuration / spinningElements.length;

function initializeSpin() {
  spinningElements.forEach((el,i) => {
    el.style.animation = `rot ${rotationDuration}s infinite -${rotationDurationSingle * i}s linear`;
  });
}

initializeSpin();
