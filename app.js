let app = {
  timePrior: 0,

  animate: function (timeNow) {
    let timeChange = timeNow - app.timePrior;
    car.update(timeChange);
    view.con.clearRect(0, 0, view.can.width, view.can.height);
    car.draw();
    app.timePrior = timeNow;
    requestAnimationFrame(app.animate);
  },

  init: function () {
    view.init();
    car.init();
    road.init();
    controller.init();

    window.onresize = view.resize;
    view.resize();
    requestAnimationFrame(app.animate);
  },
};

window.onload = app.init;
