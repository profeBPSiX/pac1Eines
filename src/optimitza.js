const sharp = require('sharp');
const fs = require('fs');



sharp('img-pac2/icona.png')
  .jpeg({ quality: 75 })
  .toFile('img-pac2/icona.webp')
  .then(() => {
    console.log('Imatge optimitzada!');
  })
  .catch(err => {
    console.error('Error optimitzant la imatge:', err);
  });