function RekursiFaktorial(faktorial, hasil=1){
    if(faktorial<1){
        console.log(hasil);
        return;
    }

    hasil *= faktorial;
    RekursiFaktorial(faktorial-1, hasil);
}

//RekursiFaktorial(5);

function DeretFibonacci(i, a=0, b=1, c){
    if(i < 1) return;

    c = a;
    console.log(c);
    a += b;
    b = c;

    DeretFibonacci(i-1, a, b, c);
}

//DeretFibonacci(i = parseInt(prompt()));