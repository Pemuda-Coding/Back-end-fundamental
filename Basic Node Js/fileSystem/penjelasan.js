//  method fs.readFile(). Method ini menerima tiga argumen: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses

const fs = require('fs');

// Asynchronus
// const fileReadCallback = (error, data ) => {
//     if(error){
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// }

// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// Synchronus
// const fs = require('fs');
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);