AFRAME.registerComponent("click-handler", {
  init: function () {
    this.isVisible = false;

    this.el.sceneEl.addEventListener("markerFound", (e) => {
      this.isVisible = true;
    });

    this.el.sceneEl.addEventListener("markerLost", (e) => {
      this.isVisible = false;
    });

    const marker = document.querySelector(".marker");
    marker.addEventListener("click", function(ev, target){
      console.log("ev", ev.detail.intersectedEl.id);
      let sound = document.querySelector(".sound-" + ev.detail.intersectedEl.id);
      // console.log(document.querySelector('a-marker').object3D);
      
      sound.components.sound.stopSound();
      sound.components.sound.playSound();

      
      
    })
  },

  update: function () {},

  remove: function () {},
});
