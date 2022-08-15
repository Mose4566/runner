let controller = {
  handleKD: function (e) {
    e.preventDefault();
    controller[e.key] = true;
  },

  handleKU: function (e) {
    e.preventDefault();
    controller[e.key] = false;
  },

  init: function () {
    window.addEventListener("keydown", controller.handleKD);
    window.addEventListener("keyup", controller.handleKU);
  },
};
