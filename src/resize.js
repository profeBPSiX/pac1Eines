const sharp = require('sharp');
const fs = require('fs');

const inputImage = './img-pac2/icona.png';

const sizes = [64];
sizes.forEach(size => {
    sharp(inputImage)
        .resize({ width: size })
        .toFile(`img-pac2/icona-${size}.png`)
        .then(() => console.log(`Imatge creada a ${size}px`))
        .catch(err => console.error('Error creant imatge:', err));
});