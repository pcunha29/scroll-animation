// IMAGE SEQUENCE CODE

// var images = [
//   './images/ezgif-frame-001.png',
//   './images/ezgif-frame-002.png',
//   './images/ezgif-frame-003.png',
//   './images/ezgif-frame-004.png',
//   './images/ezgif-frame-005.png',
//   './images/ezgif-frame-006.png',
//   './images/ezgif-frame-007.png',
//   './images/ezgif-frame-008.png',
//   './images/ezgif-frame-009.png',
//   './images/ezgif-frame-010.png',
//   './images/ezgif-frame-011.png',
//   './images/ezgif-frame-012.png',
//   './images/ezgif-frame-013.png',
// ];

// // TweenMax can tween any property of any object. We use this object to cycle through the array
// var obj = { curImg: 0 };

// // create tween
// var tween = TweenMax.to(obj, 0.5, {
//   curImg: images.length - 1, // animate propery curImg to number of images
//   roundProps: 'curImg', // only integers so it can be used as an array index
//   repeat: 3, // repeat 3 times
//   immediateRender: true, // load first image automatically
//   ease: Linear.easeNone, // show every image the same ammount of time
//   onUpdate: function () {
//     $('#myimg').attr('src', images[obj.curImg]); // set the image source
//   },
// });

// // init controller
// var imgController = new ScrollMagic.Controller();

// // build scene
// var scene = new ScrollMagic.Scene({ triggerElement: '#trigger', duration: 300 })
//   .setTween(tween)
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(imgController);

// // handle form change
// $('form.move input[name=duration]:radio').change(function () {
//   scene.duration($(this).val());
// });

// const section = document.querySelector('.image-intro');
// const canvas = section.querySelector('canvas');

// const controllerImg = new ScrollMagic.Controller();

// let imgScene = new ScrollMagic.Scene({
//   duration: 200,
//   triggerElement: section,
//   triggerHook: 1,
// });

// // Video animation
// let accel = 1;
// let scroll1 = 0;
// let delay1 = 0;

// videoScene.on('update', (e) => {
//   // /1000 just to be in sec
//   scroll1 = e.scrollPos / 1000;
// });

// setInterval(() => {
//   delay1 += (scroll1 - delay1) * accelValue;

//   video.currentTime = delay1;
// }, 40);

const html = document.documentElement;
const canv = document.getElementById('hero-lightpass');
const context = canv.getContext('2d');

const frameCount = 200;
const currentFrame = (index) =>
  `./images/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canv.width = 1158;
canv.height = 770;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  console.log(scrollTop);
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();
