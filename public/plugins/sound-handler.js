AFRAME.registerComponent('sound-handler', {
  init: function () {
    // this.soundEl = document.querySelector('[sound]');
    this.marker = document.querySelectorAll('a-marker');
    console.log("marker", this.marker);

    this.visible = false;
  },

  tick: function () {
    this.marker.forEach(element => {
      let curMarker = element.querySelector(".clickable")
      let sound = document.querySelector(".sound-" + curMarker.id);
      let duration = document.querySelector("#sound-" + curMarker.id).duration;

      if (element.object3D.visible) {

        setTimeout(() => {
          sound.components.sound.stopSound();
        }, duration * 1000);

        sound.components.sound.playSound();

        this.visible = true;
      } else if (!element.object3D.visible) {
        this.visible = false;
      }
    });
  }
});