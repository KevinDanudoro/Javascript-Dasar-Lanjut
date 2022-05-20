// Synchronous Callback

// function halo(nama){
//     alert('Hai ' + nama); 
// }

// function panggil(callback){
//     const nama = prompt('Masukkan nama anda: ');
//     callback(nama);
// }

// panggil(halo);


// const mhs = [
//     {
//         nama: 'Kevin',
//         prodi: 'Teknik Komputer',
//         nim: 205150
//     },

//     {
//         nama: 'Kenny',
//         prodi: 'Teknik Mesin',
//         nim: 205151
//     },

//     {
//         nama: 'Keke',
//         prodi: 'Teknik Kimia',
//         nim: 205152
//     },

//     {
//         nama: 'Koko',
//         prodi: 'Teknik Pertanian',
//         nim: 205153
//     }
// ]

// const nama = mhs.map(m => m.nama);
// console.log(nama);


// // Asynchronous Callback

console.log('Mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    
    success: (mhs) => {
        mhs.forEach( m => console.log(m.nama));
    },
    
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('Selesai');

