const videoIntro = document.querySelector('.video-intro');
const video = videoIntro.querySelector('video');

//SCROLL MAGIC ANIMATION
const controller = new ScrollMagic.Controller();

let videoScene = new ScrollMagic.Scene({
  duration: 12000,
  triggerElement: videoIntro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(videoIntro)
  .addTo(controller);

// Video animation
let accelValue = 0.2;
let scrollpos = 0;
let delay = 0;

videoScene.on('update', (e) => {
  // /1000 just to be in sec
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelValue;

  video.currentTime = delay;
}, 40);
