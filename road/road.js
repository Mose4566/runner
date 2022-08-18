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
  angle: -Math.PI / 2,
  color: "yellow",
  aspectRatio: 1 / 10,
  relativeHeight: 0.2,
  relativeSpacing: 2,
  halfDim: {
    x: undefined,
    y: undefined,
  },
  dim: {
    x: undefined,
    y: undefined,
  },
  draw: function () {
    view.con.fillStyle = road.color;
    console.log("-------------------");
    for (let i = 0; i < road.dashes.length; ++i) {
      let dash = road.dashes[i];
      console.log(dash.pos);
      view.con.translate(dash.pos.x, dash.pos.y);
      view.con.rotate(road.angle);
      view.con.fillRect(
        -road.halfDim.x,
        -road.halfDim.y,
        road.dim.x,
        road.dim.y
      );
      view.con.rotate(-road.angle);
      view.con.translate(-dash.pos.x, -dash.pos.y);
    }
  },
  update: function (timeChange) {
    for (let i = 0; i < road.dashes.length; ++i) {
      let dash = road.dashes[i];
      dash.pos.y += car.speed.y * timeChange;
      if (dash.pos.y > view.can.height + road.halfDim.x) {
        dash.pos.y -= road.dim.x * road.relativeSpacing * road.dashes.length;
      }
    }
  },
  init: function () {},
  resize: function (oldWidth, oldHeight) {
    road.dim.x = road.relativeHeight * can.height;
    road.dim.y = road.dim.x * road.aspectRatio;
    road.halfDim.x = road.dim.x / 2;
    road.halfDim.y = road.dim.y / 2;
    let midDashIndex = Math.floor(road.dashes.length / 2);
    for (let i = 0; i < road.dashes.length; i++) {
      let dash = road.dashes[i];
      if (dash.pos.x === undefined) {
        dash.pos.x = 0.5 * can.width;
      } else {
        dash.pos.x = (can.width * dash.pos.x) / oldWidth;
      }
      if (dash.pos.y === undefined) {
        dash.pos.y =
          0.5 * can.height +
          (i - midDashIndex) * road.dim.x * road.relativeSpacing;
      } else {
        dash.pos.y = (can.height * dash.pos.y) / oldHeight;
      }
    }
  },
};
