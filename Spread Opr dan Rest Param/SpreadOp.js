// // Spread Operator
// // Memecah iterables menjadi single element
// // iterables = array, object, arguments, node list, string

// const mhs = ['Kevin', 'Kenny', 'Keke'];
// console.log(...mhs[0]);

// // Menggabungkan 2 array

// const mhs = ['Kevin', 'Kenny', 'Keke'];
// const dosen = ['Hendra', 'Heni', 'Purna'];

// const orang = [...mhs, ...dosen]; // lebih fleksibel spread operator
// const orang2 = mhs.concat(dosen);

// const orang3 = [...mhs, 'Aji', ...dosen]; // kemudahan menambahkan data pada array

// console.log(orang);
// console.log(orang2);
// console.log(orang3);


// // Mengcopy array
// const mhs = ['Kevin', 'Kenny', 'Keke'];

// const mhsCopy = mhs;     // Cara di samping tidak benar2 mengcopy karena array mhs dan mhsCopy tetap terhubung
// mhsCopy[0] = 'koko';     // Perubahan pada mhsCopy mempengaruhi parent-nya
                       
// console.log(mhs);
// console.log(mhsCopy);

// const mhs2 = ['Kevin', 'Kenny', 'Keke'];
// const mhsCopy2 = [...mhs2];
// mhsCopy2[0] = 'jiji';

// console.log(mhs2);
// console.log(mhsCopy2);


// // Praktek pada Html

// const namaHtml = document.querySelectorAll('li');
// console.log(...namaHtml);

// const mhs = [...namaHtml].map(nama => nama.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');       // nama variabel harus sama dengan class
const huruf = [...nama.textContent].map(nama => `<span>${(nama == ' ')? '&nbsp': nama}</span>`).join('');
nama.innerHTML = huruf;         // nama variabel harus sama dengan class

/*
{
    let acc = '';

    if(nama == ' ') acc += `<p></p>`
    else acc += `<span>${nama}</span>`
    return acc;

    })
    .join('');
*/ 