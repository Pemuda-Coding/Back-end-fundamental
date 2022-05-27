const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// Fungsi yang akan di jalankan ketika event onLifeHuman terjadi
const birthdayEventListener= (name) => {
    console.log(`Happy Birthday ${name}`);
}

const diedDayEvenetListener= (age) => {
    console.log(`Anda akan meninggal pada umur ${age}`);
}

const onLifeHuman = ({name, age}) => {
    birthdayEventListener(name);
    diedDayEvenetListener(age);
}

// Mendaftarkan fungsi onLifeHuman sebagai listener dari birthDay
myEventEmitter.on('birthday', onLifeHuman);

// Memicu event birthDay untuk terjadi
myEventEmitter.emit('birthday', {name: "Momo", age : 45});

// Event di nodeJs itu ibaratkan sebuah kejadian. Semisal ketika kita mendengar alarm hp berbunyi dan kita langsung bergegas untuk mematikannya. Di dalam dunia programming juga sama seperti itu konsepnya