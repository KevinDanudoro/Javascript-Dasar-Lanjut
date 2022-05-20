// // Fungsi Deklarasi
// function totalVolumeKubus(sisi1, sisi2){
//     var hasil;
//     hasil = sisi1*sisi1*sisi1 + sisi2*sisi2*sisi2;

//     alert('Volume Kubus Total: ' + hasil);
// }
// var a = parseInt(prompt('Masukkan sisi kubus 1: ')); // parseInt() digunakan untuk mengubah string menjadi int.
// var b = parseInt(prompt('Masukkan sisi kubus 2: '));

// totalVolumeKubus(a,b);

//////////////////////////////////////////////////////////////////////////////////

// // Fungsi Ekspresi
// var volumeBalok =  function (p, l, t){
//     var hasil;
//     hasil = p*l*t;

//     alert('Volume Balok: ' + hasil);
// }
// volumeBalok(5, 4, 3);

//////////////////////////////////////////////////////////////////////////////////

// // Kasus saat jumlah argumen > ketimbang parameter suatu fungsi 
// var volumeBalok =  function (sisi1, sisi2, sisi3){
//     var hasil;
//     hasil = sisi1*sisi2*sisi3;
//     alert('Volume Balok tanpa args: ' + hasil);

//     hasil *= arguments[3]; // 'arguments' adalah array yang menyimpan seluruh argumen dari eksekusi fungsi 
//     alert('Volume Balok dengan args: ' + hasil);
// }
// volumeBalok(5, 4, 3, 9);

//////////////////////////////////////////////////////////////////////////////////

// // Arrow Function
// var luasSegitiga = (alas, tinggi) => {      // Kalau hanya ada 1 parameter maka tidak perlu menggunakan '()'.
//     return (alas*tinggi)/2;                 // Jika hanya terdapat return pada fungsi maka '{}' dan 'return' tidak...
// }                                           // perlu ditulis.                                   

// console.log(luasSegitiga(5, 4));

// let mahasiswa = ['kevin danudoro', 'kenny danuarta', 'miouke kezia'];

// // =========== Cara 1 ============
// let jmlHuruf = mahasiswa.map( function(nama) {               
//     return ({ 
//         nama: nama, 
//         namaLength: nama.length
//      })
// })

// //        ===========Cara 1 == Cara 2===========

// // ========== Cara 2 =============
// let jmlHuruf = mahasiswa.map((nama) => ({ 
//     nama: nama,
//     namaLenght: nama.length,
// }));

// console.table(jmlHuruf);

//////////////////////////////////////////////////////////////////////////////////

// This pada Arrow Function
// Contoh This pada fungsi ekspresi

// let Mahasiswa = function(){
//     this.nama = 'Kevin Danudoro',
//     this.jurusan = 'Teknik Komputer'
//     this.Halo = function(){
//         return `Halo nama saya ${this.nama}, saya dari jurusan ${this.jurusan}.`
//     }
// }
// let kevin = new Mahasiswa();


// let Mahasiswa = function() { 
//     this.nama = 'Kevin Danudoro',
//     this.jurusan = 'Teknik Komputer'
//     this.Halo = () => {  // Arrow function tidak mengenal sistem this, maka akan mencari this diluar scopenya
//         return `Halo nama saya ${this.nama}, saya dari jurusan ${this.jurusan}.`
//     }

//     setInterval(() => {             // setInterval = menjalankan suatu perintah dengan interval tertentu.
//         console.log(this.nama);     // Arrow function tidak terkena hoisting sehingga dapat membaca nilai this.nama...
//     }, 1000);                       // yang berada di luar scopenya.
// }
// let kevin = new Mahasiswa();

//////////////////////////////////////////////////////////////////////////////////

// Kelola website dengan arrow function dan CSS
const box = document.querySelector('.box');

box.addEventListener('click', function(){       // tidak bisa menggunaka arrow fn karena tidak kenal komsep this. 
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout( () => {      // disini digunakan arrow fn karena sifat dari arrow fn itu sendiri yaitu tidak kena hoisting
        this.classList.toggle(dua);   // arrow fn akan mencari this di luar scopenya
    }, 500);

});

