// List penggunaan High Order Func pada tipe data tertentu
/*
forEach = array, nodelist
for..of = string, array, nodelist, argument
for..in = object
*/

// // Cara agar web tidak lelet event loop =  https://www.youtube.com/watch?v=wVtdv5BHhno&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=20

// // Mengubah Object menjadi Array

// const siswa =  {
//     nama: 'Kevin',
//     kelas: 6,
//     umur: 16,
//     ekskul: 'Badminton'
// }
// const arrSiswa = siswa => {
//     const arr = [];
//     for(const ident in siswa){
//         arr.push(siswa[ident]);
//     }
//     return arr;
// }
// console.log(arrSiswa(siswa));


// // Mengubah Object menjadi Array (Arguments)
// function myFunc(...myArgs){      
//     return arguments
// }

// const b =Array.from(myFunc(1,2,3,4));
// console.log(b);


// // Memisahkan string menjadi array
// const nama = 'Kevin Danudoro';
// const huruf = [...nama].join(' ')
// console.log(huruf)


// // Mengambil document Html lewat tag <li></li> ke dalam bentuk nodelist
// const liMhs = document.querySelectorAll('li');  // ambil semua data pada tag <li>


// // Mengambil document Html lewat class ke dalam bentuk nodelist
// const liMhs = document.querySelectorAll('.nama');  // ambil semua data pada class nama


// // Mengakses teks pada tag Html 
// const liMhs = document.querySelectorAll('li');  // ambil semua data pada tag <li>
// console.log(liMhs[0].textContent);


// // Mengubah Nodelist menjadi array
//  const liMhs = document.querySelectorAll('li');  // ambil semua data pada tag <li>
// const mhs = [...liMhs].map(m => m.textContent);

