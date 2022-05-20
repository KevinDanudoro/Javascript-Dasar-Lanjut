// for..of
// Array
// const array = ['kevin', 'keke', 'kenny'];

// // 1.
// for (let i=0; i < array.length; i++){
//     console.log(array[i]);
// }

// // 2.
// array.forEach(nama => console.log(nama));

// // 3. 
// for( const nama of array ){      //input masing2 data pada array ke const nama.
//     console.log(nama);
// }

// // ketiga cara di atas menghasilkan output yang sama.


// // String
// const nama = 'Kevin Danudoro';

// for(const huruf of nama){
//     console.log(huruf);
// }

// Menggunakan entries()
// const array = ['kevin', 'keke', 'kenny'];

// for(const [index, nama] of array.entries()){
//     console.log(`Mahasisiwa ke-${index + 1} adalah ${nama}.`)
// }

// // for..of pada arguments
// function jumlahAngka (){
//     let hasil=0;

    // for(let i=0; i<arguments.length; i++){       // Bisa 
    //     hasil += arguments[i];
    // }

    // arguments.forEach(angka => hasil += angka);  // Tidak Bisa

    // for( const angka of arguments){              // Bisa
    //     hasil += angka;
    // }

//     return hasil;
// }
// console.log(jumlahAngka(1,2,3,4,5));


// // For..in
// // Bekerja hanya pada object
// const mhs = {
//     nama: 'Kevin',
//     kelas: 'Basis Data Terapan',
//     nim: 205150301111002
// }

// for(const identitas in mhs){
//     console.log(`${identitas}: ${mhs[identitas]}`);
// }