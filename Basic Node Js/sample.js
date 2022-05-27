// Writable stream adalah teknik untuk menulis berkas
const fs = require('fs');

const WritableStream = fs.createWriteStream('output.txt');

WritableStream.write('Ini adalah teks baris pertama \n');
WritableStream.write('Ini adalah teks baris kedua \n');
WritableStream.end('Akhir dari writable Stream !')