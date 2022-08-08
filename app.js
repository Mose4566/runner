const ASPECT_RATIO = 16 / 9; //height to width ratio

// let controller = {
//   a: false,
//   d: false,
//   ArrowLeft: false,
//   ArrowRight: false,
// };
let controller = {};
let can, con;
let timePrior = 0;
let car = {
  relativeSpeed: {
    x : 0.1 / 1000,
    y : 0.1 / 1000,
  },
  speed: {
    x : undefined,
    y : undefined,
  },
  img: undefined,
  aspectRatio: 803 / 1443,
  relativeWidth: 0.2,
  relativeStartPos: {
    x: 0.5,
    y: 0.9,
  },
  halfDim: {
    x: undefined,
    y: undefined,
  },
  dim: {
    x: undefined,
    y: undefined,
  },
  pos: {
    x: undefined,
    y: undefined,
    a: -Math.PI / 2,
  },
  draw: function () {
    con.translate(car.pos.x, car.pos.y);
    con.rotate(car.pos.a);
    con.drawImage(
      car.img,
      -car.halfDim.x,
      -car.halfDim.y,
      car.dim.x,
      car.dim.y
    );
    con.rotate(-car.pos.a);
    con.translate(-car.pos.x, -car.pos.y);
  },
  update: function (timeChange) {
    let angle = -Math.PI / 2;
    if (controller.d || controller.ArrowRight) {
      car.pos.x+= car.speed.x * timeChange;
      angle+= Math.PI / 8;
    }
    if (controller.a || controller.ArrowLeft) {
      car.pos.x-= car.speed.x * timeChange;
      angle-= Math.PI / 8;
    }
    car.pos.a = angle;
  },
};

window.onload = init;

function animate(timeNow) {
  let timeChange = timeNow - timePrior;
  car.update(timeChange);
  con.clearRect(0, 0, can.width, can.height);
  car.draw();
  timePrior = timeNow;
  requestAnimationFrame(animate);
}

function init() {
  can = document.getElementById("can");
  con = can.getContext("2d");
  car.img = document.getElementById("car");

  window.addEventListener("keydown", handleKD);
  window.addEventListener("keyup", handleKU);

  window.onresize = resize;
  resize();
  requestAnimationFrame(animate);
}

function resize() {
  let oldWidth = can.width;
  let oldHeight = can.height;
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
  car.dim.x = car.relativeWidth * can.width;
  car.dim.y = car.dim.x * car.aspectRatio;
  car.halfDim.x = car.dim.x / 2;
  car.halfDim.y = car.dim.y / 2;
  if (car.pos.x === undefined) {
    car.pos.x = car.relativeStartPos.x * can.width;
  } else {
    car.pos.x = (can.width * car.pos.x) / oldWidth;
  }
  if (car.pos.y === undefined) {
    car.pos.y = car.relativeStartPos.y * can.height;
  } else {
    car.pos.y = (can.height * car.pos.y) / oldHeight;
  }
  car.speed.x = car.relativeSpeed.x * can.width;
  car.speed.y = car.relativeSpeed.y * can.height;
}

function handleKD(e) {
  e.preventDefault();
  controller[e.key] = true;
  // switch (e.key) {
  //   case "ArrowLeft":
  //     controller.ArrowLeft = true;
  //     break;
  //   case "a":
  //     controller.a = true;
  //     break;
  //   case "ArrowRight":
  //     controller.ArrowRight = true;
  //     break;
  //   case "d":
  //     controller.d = true;
  //     break;
  // }
}

function handleKU(e) {
  e.preventDefault();
  controller[e.key] = false;
  // switch (e.key) {
  //   case "ArrowLeft":
  //     controller.ArrowLeft = false;
  //     break;
  //   case "a":
  //     controller.a = false;
  //     break;
  //   case "ArrowRight":
  //     controller.ArrowRight = false;
  //     break;
  //   case "d":
  //     controller.d = false;
  //     break;
  // }
}
