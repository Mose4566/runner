const ASPECT_RATIO = 16 / 9; //height to width ratio

let view = {
  can: undefined,
  con: undefined,
  init: function () {
    view.can = document.getElementById("can");
    view.can.width = 1;
    view.can.height = 1;
    view.con = view.can.getContext("2d");
  },
  resize: function () {
    let oldWidth = view.can.width;
    let oldHeight = view.can.height;
    if (window.innerHeight / window.innerWidth < ASPECT_RATIO) {
      // use full window height
      view.can.style.top = 0;
      view.can.height = window.innerHeight;
      view.can.width = view.can.height / ASPECT_RATIO;
      view.can.style.left = (window.innerWidth - view.can.width) / 2 + "px";
    } else {
      // use full window width
      view.can.style.left = 0;
      view.can.width = window.innerWidth;
      view.can.height = view.can.width * ASPECT_RATIO;
      view.can.style.top = (window.innerHeight - view.can.height) / 2 + "px";
    }
    car.resize(oldWidth, oldHeight);
  },
};
