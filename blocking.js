const fs = require('fs');

const textIn = fs.readFileSync('./data/input.txt', 'utf-8');

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./data/output.txt', textOut);

console.log('File written!');