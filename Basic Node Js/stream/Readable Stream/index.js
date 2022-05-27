// Readable adalah teknik untuk mengirim sebuah file menjadi bagian-bagian kecil. Contohnya itu ketika anda membuka youtube namun sinyal internet anda kurang, maka ia akan mengirimkan file tersebut dengan bagian kecil-kecil sehingga kita bisa menonton tanpa menunggu semua file tersebut berhasil di reload.

const fs = require('fs');
// const { solve } = require('path');

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
    /*
    Fungsi createReadStream() menerima dua argumen, yang pertama adalah lokasi berkas yang hendak dibaca dan yang kedua adalah objek konfigurasi
    */
});

readableStream.on('readable', () => {
    try{
        process.stdout.write(`[${readableStream.read()}]`);
    }catch(error){

    }
});

readableStream.on('end', () => {
    console.log('Done');
});