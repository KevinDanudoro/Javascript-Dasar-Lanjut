// // Rest Parameter = menerima seluruh argument pada fungsi meskipun tidak ada parameter.

// function myFunc(...myArgs){         // rest parameter harus diakhir seluruh parameter  (...myArgs, a) (X)
//     return `${myArgs.join(' ')}`
//     return arguments
//     return [...arguments]
// }

// const a = Array.from(myFunc(1,2,3,4))
// const a = myFunc(1,2,3,4,5)
// console.log(a);


// // Penjumlahan pada arguments

// function myFunc(...myArgs){
//     let hasil = 0;
//     for(const angka of myArgs){
//         hasil += angka;
//     }
//     return hasil;
// }

// // const a = myFunc(1,2,3,4,5).reduce((acc, plus) => acc+plus);
// const a = myFunc(1,2,3,4,5);
// console.log(a)


// // Array Destructuring

// const siswa = ['Kevin', 'Kenny', 'Keke', 'Arel'];

// const [Ketua, Wakil, ...Anggota] = siswa;
// console.log(Ketua, Wakil, Anggota);


// const gemastik = {
//     frontEnd: 'Brian Aditya',
//     backEnd: 'Kevin Danudoro',
//     devOps: 'Thoriq'
// }

// const {frontEnd:ketua, ...anggota} = gemastik;
// console.log(anggota)


// function filterBy(parameter, ...values){
//     // const hasil = values.map(data => {if(typeof(data) == parameter) return data}); 
//     // map() tidak bisa digunakan karena mengembalikan data array sama banyak dengan parentnya

//     let number = [];
//     for(const data of values){
//         if(typeof(data) == parameter) number.push(data);
//     }

//     // return hasil;
//     return number;      // Bisa digunakan

//     return values.filter(data => typeof(data) === parameter); // Bisa digunakan
// }

// console.log(filterBy('boolean', 10, false, 'lalal', 3, []));