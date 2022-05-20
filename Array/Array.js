// Manipulasi data array

var arr = ['kevin', 'danu', 'doro'];

/*
// join = menggabungkan array menjadi string
console.log(arr.join(' '));
*/

/*
// length = mencari panjang array
console.log(arr.length);
*/

/*
// push = menambah data array di index terakhir
arr.push('kenny', 'danuarta')
console.log(arr.join(' '));
*/

/*
// pop = menghapus data array di index terakhir
arr.pop()
console.log(arr.join(' '));
*/

/*
// unshift = menambah data array di awal index
//arr.unshift('saya');
//console.log(arr.join(' '));
*/

/*
// shift = menghapus data array di awal index
arr.shift();
console.log(arr.join(' '));
*/

/*
// splice = menyisipkan/menghapus data array di tengah2 index
// menyisipkan
arr.splice(1, 0, 'kenny', 'danuarta'); // sisipkan data mulai dari index 1
console.log(arr.join(' '));

//menghapus
arr.splice(1, 2); // hapus data sebanyak 2 index, mulai dari index 1
console.log(arr.join(' '));
*/

/*
// slice = menduplikasi array mulai dari index tertentu
var arr2 = arr.slice(1, 3);
console.log(arr.join(' '));
console.log(arr2.join(' '));
*/

/*
// forEach = memberi suatu perlakuan pada masing2 index pada array
var angka = [0,1,2,3,4,5,6,7,8,9]

angka.forEach(function(i){
    console.log(i);
});

arr.forEach(function(e, i){
    console.log("Index ke-" + (i+1) + " adalah: " + e);
})
*/

/*
// map = memberi suatu perlakuan pada masing2 index pada array sekaligus mengembalikan data ke bentuk array
var angka = [0,1,2,3,4]
var angka2 = angka.map(function(e, i){
    console.log("Index ke-" + (i) + " adalah: " + e);
    return e*2 // dapat me-return nilai data
});

console.log(angka2.join(' '));
*/

/*
// sort = mengurutkan isi array
var angka = [5,4,2,6,3, 10, 22]
angka.sort(function(a,b){
    return a-b;  // ====>   digunakan untuk ascending sort
});

console.log(angka.join(' - '))
*/

/*
// filter = mencari data pada array dengan kriteria tertentu sekaligus me-return data tsb (dapat berupa array)
var angka = [5,4,2,6,3, 10, 22];
var angka2 = angka.filter(function(x){
    if(x > 5) return x;
});

console.log(angka2.join(' '));
*/

/*
// find = mencari data namun hanya mengembalikan 1 nilai saja
var angka = [5,4,2,6,3, 10, 22];
var angka2 = angka.find(function(x){
    if(x == 22) return x;
});

console.log(angka2);
*/

