const html = document.documentElement;
const canv = document.getElementById('hero-lightpass');
const context = canv.getContext('2d');

const frameCount = 200;
const currentFrame = (index) =>
  `../images/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    console.log('current', currentFrame(i));
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
  console.log('frameIndex', frameIndex, frameIndex.toString().padStart(3, '0'));
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();
