// // High Order Function adalah fungsi yang memiliki argumen/return value berupa fungsi lain.
// // Contoh:

// function orang(nama){
//     return function(waktu){     // return value berupa fungsi
//         return `nama saya ${nama}, selamat ${waktu} semuanya...`;
//     }
// }

// let salam = orang('kenny');
// console.log(salam('malam'))

// function tugas(hitung, a, b) {      // argumen berupa fungsi
//     console.log(`Hasil penjumlahan ${a} + ${b} = ${hitung(a, b)}`)
// }
// function hitung(a, b){
//     return `${a+b}`;
// }
// tugas(hitung, 10, 12);

///////////////////////////////////////////////////////////////////////////////////////

// // filter, map, reduce menggunakan arrow fn
// const angka = [5,10,3,0,7,4,8];

// const angka2 = angka.filter(x => x>5);
// const angka3 = angka2.map(x => x*2);
// const angka4 = angka3.reduce((prev, curr) => prev+curr);

// console.log(angka4);

// // cara meringkas fungsi diatas
// const newAngka = angka.filter(x => x > 5)
//     .map(x => x*2)
//     .reduce((prev, curr) => prev + curr);

// console.log(newAngka);

///////////////////////////////////////////////////////////////////////////////////////

// Latihan High Order Function

// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pilih hanya JAVASCRIPT LANJUTAN
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
    .map(item => item.dataset.duration)

// ubag durasi menjadi int dan detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':');
        return parts;
    })

    .map(convert => parseInt(convert[0] * 60) + parseInt(convert[1]))

// ubah formatnya jadi jam:menit:detik.
    .reduce((prev, curr) => prev + curr);

const jam = Math.floor(jsLanjut/3600);
const menit = Math.floor((jsLanjut- jam*3600)/60);
const detik = Math.floor(jsLanjut- jam*3600 - menit*60);

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`

const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT')).length;
const pJml = document.querySelector('.jumlah-video');
pJml.textContent = `${jumlahVideo} Video`;


// ///////////////////////////////////////////////////////////////////////////////////////
