AFRAME.registerComponent('sound-handler', {
   init: function () {
     this.soundEl = document.querySelector('[sound]');
     this.marker = document.querySelector('a-marker');
     this.visible = false;

    var el = this.el;        
    // el.addEventListener('click', function (event) {
    //   console.log(el.object3D.el);
    //   let sound = document.querySelector('[sound]')
    //   sound.components.sound.stopSound();
    //   sound.components.sound.playSound();
    // });
   },
   tick: function () {

     if (this.marker.object3D.visible && !this.visible) {
       console.log("ding")
       this.soundEl.components.sound.stopSound();
       this.soundEl.components.sound.playSound();
       this.visible = true;
     } else if (!this.marker.object3D.visible) {
       this.visible = false;
     }
   }
 });