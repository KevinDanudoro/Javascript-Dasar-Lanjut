// // Promise = asycrhonous
// /* 
// Object yang merepresentasikan keberhasilan / kegagalan sebuah
// event yang asynchronous di masa yang akan datang
// */

// // Janji (terpenuhi / ingkar)
// // States (fulfilled / rejected / pending)
// // Callback (resolve / reject / finally)
// // aksi (then / catch)

// // resolve ditangkap oleh .then sedangkan reject ditangkap oleh .catch

// Biasanya dipakai saat request ke API
// Contoh sederhana 1
// let ditepati = true;       
// const janji1 = new Promise((resolve, reject) => {   // resolve dan reject == callback
//                 // Promise((fullfiled, rejected)) -> tidak boleh terbalik
//                 // parameter ke-1 selalu ditangkap .then dan parameter ke-2 sebaliknya
//     if(ditepati) {
//         resolve('janji ditepati');  
//     }
//     else {
//         reject('ingkar janji');
//     }
// }); 

// janji1
//     .then(response => console.log('OK ' + response))    // .then menangkap callback func saat promise ditepati (resolve) 
//     .catch(response => console.log('Not OK ' + response));  // .catch menangkap callback func saat tidak promise ditepati (reject) 

// console.log(janji1);

// Contoh sederhana 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu');
        }, 2000)
    }
    else {
        setTimeout(() => {
            reject('Tidak ditepati setelah beberapa waktu');
        }, 2000)
    }
});

console.log('mulai')
// console.log(janji2.then(response => console.log(response)));
// Hasil promise hanya bisa ditangkap/ditampilkan oleh then/catch saat memasuki asychronous 

console.log(janji2
    .finally(() => console.log('Selesai menunggu'))     // Melakuakn eksekusi sebelum menampilkan hasil promise (terpenuhi / ingkar)
    .then(response => console.log('OK ' + response)) 
    .catch(response => console.log('Not OK ' + response)));

console.log('selesai')




// // Promise.all()
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve({
//             judul : 'Avengers',
//             directur: 'Kevin Danudoro',
//             actors: 'Keke, Kenny' 
//         })
//     }, 1000);
// })
    
// const kota = new Promise(resolve => {
//     setTimeout(() => {
//         resolve({
//             nama: 'Bandung',
//             suhu: 30,
//             cuaca: 'Berawan'     
//         })
//     }, 500)
// })

// film.then(response => console.log(response));
// kota.then(response => console.log(response));

/*Sama dengan cara di bawah*/

// Promise.all([film, kota]).then( Response => {
//     const [film, cuaca] = Response;
//     console.log(film);
//     console.log(cuaca);
// })