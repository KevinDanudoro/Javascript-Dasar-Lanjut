// // Html Fragments menggunakan backtick (``)

// const mhs = {
//     nama: "Kevin Danudoro",
//     prodi: "Teknik Komputer",
//     nim: "205150301111002",
//     umur: 19
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;

// console.log(`1. kevin danudoro
// 2. kenny danuarta`);



// // Html Fragments dengan object > 1

// const mhs = [
//     {
//         nama: "Kevin Danudoro",
//         prodi: "Teknik Komputer"
//     },

//     {
//         nama: "Kenny Danuarta",
//         prodi: "Teknik Informatika"
//     },

//     {
//         nama: "Miouke Kezia",
//         prodi: "Teknik Pertanian"
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.prodi}</li>
//         </ul>`)
//     .join('')}
// </div>`;

// console.log(el);

// document.body.innerHTML = el;



// // Conditional pada Html Fragments

// const mhs = [
//     {
//         nama: "Kevin Danudoro",
//         sakit: true
//     },

//     {
//         nama: "Kenny Danuarta",
//         sakit: false
//     },

//     {
//         nama: "Miouke Kezia",
//         sakit: true
//     },
// ]

// const izin = `<div class="izin">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         ${(m.sakit == true)? `<li>Izin</li>`: '<li>Hadir</li>'}
//     </ul>`).join('')}
// </div>`;

// document.body.innerHTML = izin;



// Html Fragments bersarang

// const mhs = {
//     nama: "Kevin Danudoro",
//     semester: 5,
//     mataKuliah: [
//         'Pemrograman Lanjut',
//         'Basis Data Terapan',
//         'Bahasa Indonesia',
//         'Matematika Komputasi',
//         'Statistika'
//     ]
// }

// cetakMataKuliah = matKul => 
//     `<ol> 
//         ${matKul.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`;

// const ol = 
// `<div class="mhs">
//     <h2>Nama Mahasiswa: ${mhs.nama}</h2>
//     <span class="semester">Semester:       ${mhs.semester}</span>
//     <h4>Mata Kuliah:    </h4>${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = ol;



// // Tagged Templates digunakan untuk menyaring elemen yang ingin ditampilkan pada halaman web

// function coba (strings, ...values){ // ...values adalah argumen rest parameter = bisa menampung arg dari template
//     // let hasil = '';
//     // strings.forEach((str, index) => {
//     //     hasil += `${str}${values[index] || ''}` // == (values[index] == undefined)? '' : values[index]
//     // });

//     // return hasil;


//     return strings.reduce((result, str, index) => `${result}${str}<span class="hl">${values[index] || ''}</span>`, '');
// }
// const taggedTemplate = coba`Halo nama saya ${nama}, saya ${umur} tahun, dari prodi ${prodi}.`;
// document.body.innerHTML = taggedTemplate;

// // Latihan
// const nama = "Kevin Danudoro";
// const umur = 19;
// const prodi = "Teknik Komputer";

// const saring = (strings, ...args) => {
//     return strings.reduce((storage, pengumpul, index=0) => `${storage}${pengumpul}<span class="block">${args[index] || ''}</span>`, '');
// }

// const hasil = saring`Halo nama saya ${nama}, saya ${umur} tahun dari prodi ${prodi}.`;
// console.log(hasil);

// document.body.innerHTML = hasil;