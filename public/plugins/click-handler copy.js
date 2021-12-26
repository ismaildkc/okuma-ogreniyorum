AFRAME.registerComponent("click-handler", {
  init: function () {
    this.marker = document.querySelector(".marker");
    this.isVisible = false;

    this.playAudio = this.playAudio.bind(this);

    this.el.sceneEl.addEventListener("markerFound", (e) => {
      this.isVisible = true;
    });

    this.el.sceneEl.addEventListener("markerLost", (e) => {
      this.isVisible = false;
    });

  },
  
  update: function () {
    this.marker.addEventListener("click", this.playAudio)
    this.marker.addEventListener("touchstart", this.playAudio)
  },

  remove: function () {},

  playAudio: function(ev){
    console.log("ev", ev.detail.intersectedEl.id);
    let sound = document.querySelector(".voice-" + ev.detail.intersectedEl.id);
    // console.log(document.querySelector('a-marker').object3D);
    sound.components.sound.stopSound();
    sound.components.sound.playSound();
  }
});
