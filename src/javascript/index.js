const spinningMenu = document.querySelector('.spinningmenu'); // Not currently used yet
const spinningContainer = spinningMenu.querySelector('ul'); // Not currently used yet
const spinningElements = spinningContainer.querySelectorAll('li');

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
