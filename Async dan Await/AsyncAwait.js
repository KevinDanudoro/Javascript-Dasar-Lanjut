// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Selesai');
//         }, 2000);
//     })
// }

// cobaPromise().then(response => console.log('1. ' + response));

// async function cobaAsync () {
//     const test = await cobaPromise();   // await langsung mengubah promise ke resolve tanpa menggunakan .then 
//     console.log(test)
// }
// cobaAsync();

// Namun async await tidak dapat menerima reject dari promise 
// Maka digunakan syntax try dan catch

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000;

        if(waktu < 5000){
            setTimeout(() => {
                resolve('Selesai');
            }, 2000);
        }
        else {
            reject('Kelamaan!!');
        }
    })
}

async function cobaAsync () {
    try {   // try digunakan untuk menangkap resolve
        const test = await cobaPromise();   // karena menggunakan await otomatis 'test' menerima resolve dari promise
        console.log(test)
    } 
    catch(err) {    // catch digunakan untuk menangkap reject/error yang terjadi yang kemudian ditangkap parameter 
        console.log(err);
    }
}
cobaAsync();
