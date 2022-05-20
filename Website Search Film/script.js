// Jquery---------------------------------------

// $('.search-button').on('click', function(){

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=dca61bcc&&s=' + $('.input-keyword').val(),
//         success: (result) => {      // result = variabel penyimpanan objek hasil pencarian API 
//             const movies = result.Search;       // seluruh data di dalam array search (isinya = objek) dimasukkan ke variabel movies bertipe data array
//             let cards = '';     console.log(movies); console.log(result)

//             movies.forEach(m => {
//                 cards += showCards(m);          // Masukkan akumulasi string yang berisi systax html dengan m adalah masing2 objek pada array
//             });
//             $('.movie-container').html(cards);  // Kembalikan ke file HTML (index.html)
    

//             $('.modal-detail-button').on('click', function() {  // saat tombol dengan class modal-detail-button tertentu ditekan maka jalankan fungsi
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=dca61bcc&&i=' + $(this).data('imdbid'),    // this mengacu pada id imdb yang tersimpan pada tag tombol
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);     
//                         $('.modal-body').html(movieDetail);
//                     },

//                     error:(e) => {
//                         console.log(e.responseText)  // saat terjadi error, tampilkan kesalahan di console
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//           console.log(e.responseText)  
//         }
//     })

// });



// Fetch    model = ribet--------------------------------

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function() {

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=dca61bcc&&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             let cards = '';
//             response.Search.forEach(m => cards += showCards(m));

//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // Ketika tombol detail tertentu ditekan
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(singleButton => {
//                 singleButton.addEventListener('click', function(){
//                     fetch('http://www.omdbapi.com/?apikey=dca61bcc&&i=' + this.dataset.imdbid)
//                         .then(response => response.json())
//                         .then(response => {
//                             const modalDetail = showMovieDetail(response);

//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = modalDetail;
//                     })
//                 });
//             });
//         });
//     });


// // Tanpa Error Handling========================================================================
// Fetch    model = rapi ------------------------------

// const searchButton = document.querySelector('.search-button');  // Search Button
// searchButton.addEventListener('click', async function() {   // async berfungsi memberi tahu JS bahwa di dalam func ada async func

//     const inputKeyword = document.querySelector('.input-keyword');
//     const movies = await getMovies(inputKeyword.value); // memerintah JS untuk menunggu func getMovies() menyelesaikan tugasnya
//     updateUI(movies)
// }) // async dan await harus selalu bersama

// document.addEventListener('click', async function(e) {      // Detail Button
//     if(e.target.classList.contains('modal-detail-button')){
//         const imdbid = e.target.dataset.imdbid;
//         const movieDetail = await getMoviesDetail(imdbid); 
//         updateModal(movieDetail);
//     }
// })

// function getMoviesDetail(id){   // untuk request data API
//     return fetch('http://www.omdbapi.com/?apikey=dca61bcc&&i=' + id)
//             .then(response => response.json())
//             .then(response => response)
// }

// function getMovies(keyword) {   // untuk request data API
//     return fetch('http://www.omdbapi.com/?apikey=dca61bcc&&s=' + keyword)
//             .then(response => response.json())
//             .then(response => response.Search);
// }

// function updateUI(movies) {     // untuk mengubah tampilan html
//     let cards = '';

//     movies.forEach(m => cards += showCards(m));     // menumpuk syntax cards html  
//     const movieContainer = document.querySelector('.movie-container');
//     movieContainer.innerHTML = cards;
// }

// function updateModal(movie) {
//     const modal = showMovieDetail(movie);
//     const modalBody = document.querySelector('.modal-body')
//     modalBody.innerHTML = modal;
// }



const searchButton = document.querySelector('.search-button');  
searchButton.addEventListener('click', async function() {   
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        console.log(inputKeyword.value);
        const movies = await getMovies(inputKeyword.value); 
        updateUI(movies)
    } 
    catch(err) {
        alert(err);
    }
}) 

function getMovies(keyword) {   
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&&s=' + keyword)
            .then(response => { 
                if(response.ok == false){
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => { 
                if(response.Response === "False"){
                    throw new Error(response.Error);
                }
                return response.Search;
            })
}

function updateUI(movies) {   
    let cards = '';

    movies.forEach(m => cards += showCards(m));    
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}






document.addEventListener('click', async function(e) {      // Detail Button
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMoviesDetail(imdbid); 
        updateModal(movieDetail);
    }
})

function getMoviesDetail(id){   // untuk request data API
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&&i=' + id)
            .then(response => response.json())
            .then(response => response)
}

function updateModal(movie) {
    const modal = showMovieDetail(movie);
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = modal;
}





// Template HTML
function showCards(m){
    return `<div class="col-md-4 my-4">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" 
                    data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}