AFRAME.registerComponent('sound-handler', {
  init: function () {
    // this.soundEl = document.querySelector('[sound]');
    this.marker = document.querySelectorAll('a-marker');
    console.log("marker", this.marker);

    this.visible = false;
  },

  tick: function () {
    this.marker.forEach(element => {

      if (element.object3D.visible == true && !this.visible) {

        this.playSound(element)
        this.visible = true;
      } else if (!element.object3D.visible) {
        this.visible = false;
      }
    });
    
  },

  playSound(el){
    let curMarker = el.querySelector(".clickable")
    let sound = document.querySelector(".sound-" + curMarker.id);
    let duration = document.querySelector("#sound-" + curMarker.id).duration;
    
    sound.components.sound.pauseSound();
    sound.components.sound.playSound();
    
    // setTimeout(() => {
    //   sound.components.sound.stopSound();
    // }, duration * 1000);
    
  }
});