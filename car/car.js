let car = {
  relativeSpeed: {
    x: 0.7 / 1000,
    y: 0.7 / 1000,
  },
  speed: {
    x: undefined,
    y: undefined,
  },
  img: undefined,
  aspectRatio: 803 / 1443,
  relativeWidth: 0.2,
  relativeStartPos: {
    x: 0.5,
    y: 0.9,
    a: -Math.PI / 2,
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
  des: {
    x: undefined,
    y: undefined,
  },
  draw: function () {
    view.con.translate(car.pos.x, car.pos.y);
    view.con.rotate(car.pos.a);
    view.con.drawImage(
      car.img,
      -car.halfDim.x,
      -car.halfDim.y,
      car.dim.x,
      car.dim.y
    );
    view.con.rotate(-car.pos.a);
    view.con.translate(-car.pos.x, -car.pos.y);
  },
  update: function (timeChange) {
    let angle = -Math.PI / 2;
    if (controller.d || controller.ArrowRight) {
      car.pos.x += car.speed.x * timeChange;
      angle += Math.PI / 8;
    }
    if (controller.a || controller.ArrowLeft) {
      car.pos.x -= car.speed.x * timeChange;
      angle -= Math.PI / 8;
    }
    car.pos.a = angle;

    if (car.pos.x > can.width - car.halfDim.y) {
      car.pos.x = can.width - car.halfDim.y;
      car.pos.a = car.relativeStartPos.a;
    }
    if (car.pos.x < car.halfDim.y) {
      car.pos.x = car.halfDim.y;
      car.pos.a = car.relativeStartPos.a;
    }
  },
  resize: function (oldWidth, oldHeight) {
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
  },
  init: function () {
    car.img = document.getElementById("car");
  },
};
