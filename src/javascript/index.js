const spinningMenu = document.querySelector('.spinningmenu');
const spinningContainer = spinningMenu.querySelector('ul');
const spinningElements = spinningContainer.querySelectorAll('li');
const lastSpinningElement = spinningContainer.querySelector('li:first-child');


// rotation duration complete (in seconds)
const rotationDuration = 15;
// calculated duration of single item
const rotationDurationSingle = rotationDuration / spinningElements.length;
// set initial position of elements

function initializeSpin() {
  spinningElements.forEach((el,i) => {
    // el.style.transform = `rotate(${360/spinningElements.length * i}deg) translate(-250px) rotate(-${360/spinningElements.length * i}deg)`;
    el.style.animation = `rot ${rotationDuration}s infinite -${rotationDurationSingle * i}s linear`;
    spinningContainer.classList.add = 'is-spinning';
  });
}

initializeSpin();
