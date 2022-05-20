// // Membuat Object
// //                       ============= Object Literal  =============

// var peserta1 = {
//     Nama : "Kevin Danudoro",
//     Nim :"205150301111002",
//     Tim : {
//         Kode : 3,
//         Anggota : ["Brian Aditya, Thoriq Adillah, Kevin Danudoro"],
//     },
//     NoTelp : "081380859045",
//     Email : "kevindanudoro@student.ub.ac.id",
//     Cabang : "Software Development",
// }





// //                   =============== Function Decleration ===============

// function buatObject(nama, nim, kode, anggota, noTelp, email, cabang){
//     var peserta = {};

//     peserta.Nama = nama;
//     peserta.Nim = nim;

//     peserta.Tim = {};
//     peserta.Tim.Kode = kode;
//     peserta.Tim.Anggota = anggota;

//     peserta.NoTelp = noTelp;
//     peserta.Email = email;
//     peserta.cabang = cabang;
//     return peserta;
// }

// //var peserta2 =  buatObject("kevin", 205150, 3, ['kevin', 'keke', 'kenny'], '08138085', "kevindanudoro@gmail.com", "Lari Estafet");
// //var peserta3 = buatObject("kenny", 205151, 3, ['kevin', 'keke', 'kenny'], '08138559', "kennydanuarta@gmail.com", "Lari Estafet");





//                         ================= Constructor  =================

// function mahasiswa(nama, nim, jurusan, ipk){
//     // Mirip dengan Function Decleration 
//     // var this = {};   ===> hanya perumpamaan

//     this.Nama = nama;
//     this.Nim = nim;
//     this.Jurusan = jurusan;
//     this.Ipk = ipk;

//     // return this;   ===> hanya perumpamaan
// }

// var mhs1 = new mahasiswa("kevin Danudoro", "20515030", "Teknik Komputer", 3.6);





//                           =============== Object.create() ===============
// const methodPlayer = {
//     makan: function(porsi){
//         this.energi += porsi; 
//         console.log(`Selamat makan ${this.nama}`);
//         return this; // this == player1 || player2
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//         return this;
//     },

//     tidur: function(jam){
//         this.energi += 2*jam;
//         console.log(`Selamat tidur ${this.nama}`);
//         return this;
//     },
// }

// function Player(nama, energi){
//     // let player = {};
//     let player = Object.create(methodPlayer);

//     player.nama = nama;
//     player.energi = energi;
//     // player.main = methodPlayer.main;
//     // player.tidur = methodPlayer.tidur;
//     // player.makan = methodPlayer.makan;
    
//     return player;
// }

// let player1 = Player("kevin", 10);
// let player2 = Player("kenny", 20);




//                            ================= PROTOTYPE ==================

// object yang dibuat otomatis oleh JS saat membuat object (let player = {} || Object.create()).
// Menggunakan This maka harus ada  ==========(NEW)==========

// function Player(nama, energi){
//     // let this = Object.create(Player.prototype)  ==>  otomatis dibuat JS saat membuat func Player.

//     this.nama = nama;
//     this.energi = energi;
// }

// Player.prototype.makan = function(porsi){
//     this.energi += porsi; 
//     console.log(`Selamat makan ${this.nama}`);
//     return this;
// }
// Player.prototype.tidur = function(jam){
//     this.energi -= jam;
//     console.log(`Selamat bermain ${this.nama}`);
//     return this;
// }

// Player.prototype.main = function(jam){
//     this.energi += 2*jam;
//     console.log(`Selamat tidur ${this.nama}`);
//     return this;
// }

// let player1 = new Player("kevin", 10);
// let player2 = new Player("kenny", 20);




//                       ================ VERSI KELAS DARI PROTOTYPE ================

// class Player{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi){
//         this.energi += porsi; 
//         console.log(`Selamat makan ${this.nama}`);
//         return this;
//     }
//     tidur(jam){
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//         return this;
//     }

//     main(jam){
//         this.energi += 2*jam;
//         console.log(`Selamat tidur ${this.nama}`);
//         return this;
//     }
// }

// let player1 = new Player("kevin", 10);
// let player2 = new Player("kenny", 20);