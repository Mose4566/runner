let road = {
  dashes: [
    {
      pos: {
        x: undefined,
        y: undefined,
      },
    },
    {
      pos: {
        x: undefined,
        y: undefined,
      },
    },
    {
      pos: {
        x: undefined,
        y: undefined,
      },
    },
  ],
  color: "yellow",
  aspectRatio: 3 / 10,
  relativeWidth: 0.1,
  halfDim: {
    x: undefined,
    y: undefined,
  },
  dim: {
    x: undefined,
    y: undefined,
  },
  draw: function () {
    // view.con.translate(car.pos.x, car.pos.y);
    // view.con.rotate(car.pos.a);
    // view.con.drawImage(
    //   car.img,
    //   -car.halfDim.x,
    //   -car.halfDim.y,
    //   car.dim.x,
    //   car.dim.y
    // );
    // view.con.rotate(-car.pos.a);
    // view.con.translate(-car.pos.x, -car.pos.y);
  },
  update: function (timeChange) {
    // let angle = -Math.PI / 2;
    // if (controller.d || controller.ArrowRight) {
    //   car.pos.x += car.speed.x * timeChange;
    //   angle += Math.PI / 8;
    // }
    // if (controller.a || controller.ArrowLeft) {
    //   car.pos.x -= car.speed.x * timeChange;
    //   angle -= Math.PI / 8;
    // }
    // car.pos.a = angle;

    // if (car.pos.x > can.width - car.halfDim.y) {
    //   car.pos.x = can.width - car.halfDim.y;
    //   car.pos.a = car.relativeStartPos.a;
    // }
    // if (car.pos.x < car.halfDim.y) {
    //   car.pos.x = car.halfDim.y;
    //   car.pos.a = car.relativeStartPos.a;
    // }
  },
  init: function () {},
  resize: function (oldWidth, oldHeight) {
    road.dim.x = road.relativeWidth * can.width;
    road.dim.y = road.dim.x * road.aspectRatio;
    road.halfDim.x = road.dim.x / 2;
    road.halfDim.y = road.dim.y / 2;
    for (let i = 0; i < road.dashes.length; i++) {
      let dash = road.dashes[i];
      if (dash.pos.x === undefined) {
        dash.pos.x = 0.5 * can.width;
      } else {
        dash.pos.x = (can.width * dash.pos.x) / oldWidth;
      }
      if (dash.pos.y === undefined) {
        dash.pos.y = 0.5 * can.height; // fix this ; only valid for middle dash
      } else {
        dash.pos.y = (can.height * dash.pos.y) / oldHeight;
      }
    }
  },
};
