// // Closure = fungsi yang berada di dalam fungsi

// function ucapSalam(waktu){
//     return function cetak(nama){    // nama fungsi yaitu 'cetak' dapat dihapus.
//         console.log(`Selamat ${waktu} ${nama}, semoga sehat selalu.`);
//     }
// }
 
// let selamatPagi = ucapSalam("Pagi");    // di dalam variabel selamatPagi, terdapat fungsi cetak hasil return di fungsi ucapSalam.
//                                         // namun nilai dari variabel waktu tetap tersimpan
// let selamatSiang = ucapSalam("Siang");
// let selamatMalam = ucapSalam("Malam");

// selamatPagi("Kevin");
// selamatSiang("Kenny");
// selamatMalam("Keke");

// //           ================== CARA 1 ==================
// let counter = 0;

// let add = function (counter) {
//     return function(){          //1. ====> 
//         return(++counter);      //2. ====>  Ketiga baris ini akan di return ke variabel add dengan counter = 0.
//     }                           //3. ====>
// }
// let tampil = add(counter);      // ====>  Masukkan fungsi add ke variabel tampil.

// counter =  10;

// console.log(tampil());          // ====>  Fungsi tampil akan menjalankan fungsi kedua di dalam fungsi add '1.'
// console.log(tampil());          // ====>  Nantinya fungsi tampil hanya akan mengacu pada counter di fungsi add().
// console.log(tampil());          // ====>  Tiap perubahan nilai counter yang disebabkan tampil() akan disimpan di add().


// //         ================== CARA 2 ===================

// let add = (function (){         //  =====>  Menggunakan cara khusus dimana ada tambahan ( function(){} ) ();
//     let counter = 0;
//     return function(){         
//         return(++counter);
//     }                          
// })(); 

// counter =  10;

// console.log(add());         
// console.log(add());          
// console.log(add());    