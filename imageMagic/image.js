const html = document.documentElement;
const imageIntro = document.querySelector('.image-intro');
const canv = imageIntro.querySelector('canvas');
const context = canv.getContext('2d');
const frameCount = 200;

const currentFrame = (index) =>
  `../images/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

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
img.onload = () => {
  context.drawImage(img, 0, 0);
};

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: imageIntro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(imageIntro)
  .addTo(controller);

scene.on('update', (e) => {
  let scrollpos = 0;
  const scrollTop = html.scrollTop;
  const scrollFraction = scrollTop / 2000;

  scrollpos = e.scrollPos;

  const imgIndex = Math.ceil(scrollFraction * frameCount);

  img.src = currentFrame(imgIndex + 1);
});

preloadImages();
