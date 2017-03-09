const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();

canvas.width = 800;
canvas.height = 600;
canvas.style.border = '1px solid #333333';
canvas.style.backgroundColor = 'black';
canvas.style.cursor = 'crosshair';
document.body.appendChild(canvas);
image.src = 'lance.jpg';

const clearCanvas = () => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawCicleClip = (ctx, {x, y}) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2*Math.PI);
  ctx.clip();
  ctx.drawImage(image, 0, 0, 800, 800 * image.height / image.width);
  ctx.restore();
};

const getMouseCoordinates = (canvas, {clientX, clientY}) => {
  const { left, top }= canvas.getBoundingClientRect();
  return {
    x: clientX - left,
    y: clientY - top
  };
};

image.onload = () => {
  canvas.addEventListener('mousemove', (event) => {
    clearCanvas();
    drawCicleClip(
      ctx,
      getMouseCoordinates(canvas, event)
    );
  });
};

// Create canvas for Hanoi game
// const canvas = document.getElementById('hanoiCanvas');
// const ctx = canvas.getContext('2d');
//
// const drawTower = () => {
//   ctx.fillStyle = '#0FF';
//   ctx.fillRect(canvas.width/2, canvas.height-10, 75, 10);
//
//   ctx.fillStyle = '#FF0';
//   ctx.fillRect(canvas.width/2+10, canvas.height-20, 55, 10);
//
//   ctx.fillStyle = '#F0F';
//   ctx.fillRect(canvas.width/2+20, canvas.height-30, 35, 10);
//
//   ctx.fillStyle = '#00F';
//   ctx.fillRect(canvas.width/2+30, canvas.height-40, 15, 10);
// }
//
// drawTower();
