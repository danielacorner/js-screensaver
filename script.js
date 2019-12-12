// make a screensaver thing
const sSaver = document.querySelector(".screensaverThing");
const ssHeight = 100;
const ssWidth = 100;
sSaver.style.width = `${ssWidth}px`;
sSaver.style.height = `${ssHeight}px`;

console.dir(sSaver);

let offsetLeft = 0;
let offsetTop = 0;
// start moving it
let isMovingDown = true;
let isMovingRight = true;
function moveTheThing() {
  // as soon as we hit some number??? then reverse
  // what number (use window.innerHeight)
  const offsetTopLimit = window.innerHeight - ssHeight;
  // const shouldMoveUp = isMovingDown && offsetTop >= offsetTopLimit

  const didHitLimitBottom = offsetTop >= offsetTopLimit;
  const didHitLimitTop = offsetTop < 0;

  if (didHitLimitBottom || didHitLimitTop) {
    isMovingDown = !isMovingDown;
    randomizeBackgroundColour();
  }

  if (!isMovingDown) {
    offsetTop -= 1;
  } else {
    offsetTop += 1;
  }

  const offsetLeftLimit = window.innerWidth - ssWidth;
  // const shouldMoveUp = isMovingDown && offsetTop >= offsetTopLimit

  const didHitLimitLeft = offsetLeft >= offsetLeftLimit;
  const didHitLimitRight = offsetLeft < 0;

  if (didHitLimitLeft || didHitLimitRight) {
    isMovingRight = !isMovingRight;
    randomizeBackgroundColour();
  }

  if (!isMovingRight) {
    offsetLeft -= 1;
  } else {
    offsetLeft += 1;
  }

  sSaver.style.transform = `translate(${offsetLeft}px,${offsetTop}px)`;
}

setInterval(moveTheThing, 1);

function randomizeBackgroundColour() {
  sSaver.style.background = `hsl(${Math.random() * 360},70%,70%)`;
}
