import '@/styles/index.scss'

let startExperience = () => {
  window.location.href = "/deneyim.html"
}

let toggleModal = () => {
  let video = document.querySelector("video");
  let modal = document.querySelector(".modal-wrapper");
  modal.classList.toggle("hide");

  if(video.paused){
    video.play();
  }else{
    video.pause()
  }
}

// let button = document.querySelector("#start")
// button.onclick = startExperience


let closeButton = document.querySelector(".close");
closeButton.onclick = toggleModal;

let showVideo = document.querySelector(".show-video");
showVideo.onclick = toggleModal;