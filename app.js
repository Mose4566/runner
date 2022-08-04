const ASPECT_RATIO = 16/9; //height to width ratio


let can, con;

window.onload = init;


function animate(timeNow) {
  
}

function init() {
  can = document.getElementById("can");
  con = can.getContext("2d")
  
  window.onresize = resize;
  resize();
  requestAnimationFrame(animate);
}

function resize() {
  if (window.innerHeight / window.innerWidth < ASPECT_RATIO) {
    // use full window height
    can.style.top = 0;
    can.height = window.innerHeight;
    can.width = can.height / ASPECT_RATIO;
    can.style.left = (window.innerWidth - can.width) / 2 + "px";
  } else {
    // use full window width
    can.style.left = 0;
    can.width = window.innerWidth;
    can.height = can.width * ASPECT_RATIO;
    can.style.top = (window.innerHeight - can.height) / 2 + "px";
  }
}
