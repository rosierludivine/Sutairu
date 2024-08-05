import { TextureLoader } from 'three';

export default function createLogoTexture(logoImage, color) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = new Image();

  canvas.width = 256;
  canvas.height = 256;

  return new Promise((resolve, reject) => {
    image.src = logoImage;
    image.onload = () => {
      // Définir la taille du logo
      const logoWidth = 20; // ajuster la largeur du logo
      const logoHeight = 20; // ajuster la hauteur du logo

      // Calculer les offsets pour centrer le logo
      const offsetX = (canvas.width - logoWidth) / 6;
      const offsetY = (canvas.height - logoHeight) / 2;

      // Définir la couleur de fond du canvas
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Dessiner le logo sur le canvas
      context.drawImage(image, offsetX, offsetY, logoWidth, logoHeight);

      // Créer la texture
      const texture = new TextureLoader().load(canvas.toDataURL());
      texture.needsUpdate = true;
      resolve(texture);
    };
    image.onerror = (error) => {
      reject(error);
    };
  });
}
