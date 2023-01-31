const fs = require('fs');

// callback to achieve asynchronous => callback hells
fs.readFile('./data/start.txt', 'utf-8', (error, data1) => {
    fs.readFile(`./data/${data1}.txt`, 'utf-8', (error, data2) => {
        fs.readFile(`./data/append.txt`, 'utf-8', (error, data3) => {
            fs.writeFile('./data/final.txt', `${data2}\n${data3}`, 'utf-8', error => {
                console.log('Your file has been written!')
            });
        });
    });
});

console.log('Will read file!')