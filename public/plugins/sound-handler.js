AFRAME.registerComponent('sound-handler', {
  init: function () {
    this.soundEl = document.querySelector('[sound]');
    this.marker = document.querySelector('a-marker');
    this.visible = false;
  },

  tick: function () {
    if (this.marker.object3D.visible && !this.visible) {
      console.log("el", this.el);
      
      // let curMarker = this.el.querySelector(".clickable")
      // console.log("el", curMarker.id);
      // console.log("ding")
      
      // let sound = document.querySelector(".sound-" + curMarker.id);
      
      let sound = document.querySelector(".sound-" + this.el.id);
      sound.components.sound.stopSound();
      sound.components.sound.playSound();
      this.visible = true;
    } else if (!this.marker.object3D.visible) {
      this.visible = false;
    }
  }
});