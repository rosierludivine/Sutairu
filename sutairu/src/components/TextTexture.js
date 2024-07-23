import { CanvasTexture } from 'three';

export default function TextTexture(text, color) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 512;
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText(text, 50, 256);
  return new CanvasTexture(canvas);
}
