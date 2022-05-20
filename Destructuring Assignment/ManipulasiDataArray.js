// // Destructuring Assignment
// // Menggunakan array

// const array = [1, 2, 3];

// const [index0, index1,index2] = array; // bisa melewati index yang ditentukan dengan cara 'const [a, , c] = array'
// console.log(index0);
// console.log(index1);
// console.log(index2);



// // Menggunakan object

// const mahasiswa = [
// {
//     nama: 'Kevin Danudoro',
//     prodi: 'Teknik Komputer',
//     absen: 21
// },

// {
//     nama: 'Kenny Danuarta',
//     prodi: 'Teknik Informatika',
//     absen: 12
// },

// {
//     nama: 'Miouke Kezia',
//     prodi: 'Teknik Pertanian',
//     absen: 30
// }
// ];

// ({nama, prodi, absen} = mahasiswa.find(mhs => mhs.nama == 'Miouke Kezia')); // atau bisa pakai const {nama, prodi, absen} = mahasiswa...
// console.log(nama);
// console.log(prodi);
// console.log(absen);

// ({nama:a, prodi:b, absen:c} = mahasiswa.find(mhs => mhs.nama == 'Miouke Kezia')); // atau bisa pakai const {nama, prodi, absen} = mahasiswa...
// console.log(a);
// console.log(b);
// console.log(c);

// const miouke = mahasiswa.find(mhs => mhs.nama == 'Miouke Kezia');

// function printNama({nama}){     // Dilakukan pembongkaran data pada object miouke sebelum dijadikan argumen pada fungsi printNama()
//     return nama;
// }
// console.log(printNama(miouke));



// // Swap data pada array

// let a = 10;
// let b = 22;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);



// Rest parameter

// const array = [10, 3, 5, 9, 7];

// const [a, ...args] = array;      // ...args adalah Rest Parameter
// console.log(a);
// console.log(args);



// Kegunaan Destructuring 

// function penjumlahanPerkalian (a,b) {
//     return [a+b, a*b];
// }

// // const jumlah = penjumlahanPerkalian(4,5)[0];
// // const kali = penjumlahanPerkalian(4,5)[1];

// const [jumlah, kali] = penjumlahanPerkalian(4,5);   // Kelemahan = urutan '[tambah, kurang, dll]' sangat berpengaruh.
// console.log(jumlah, kali);

// // Mengatasi kelemahan di atas

// function kalkulasi (a,b) {
//     return {
//         jumlah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     };
// }
// const {kurang, jumlah, kali, bagi} = kalkulasi(20,5);
// console.log(jumlah,kurang,kali,bagi);

const mahasiswa = {
    nama: 'Kevin',
    prodi: 'Tekkom',
    nilai: {
        uts: 80,
        uas: 90
    }
}

function identitas({nama, prodi, nilai: {uts,uas}}){        // Nested Destructuring pada argument fungsi
    return `Halo nama saya ${nama}, saya dari prodi ${prodi}. nilai uts saya adalah ${uts}, dan uas saya ${uas}.`;
}

console.log(identitas(mahasiswa));