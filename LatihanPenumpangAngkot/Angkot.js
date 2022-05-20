penumpang = [];

var isSame = function(nama){
    for(var i=0; i < penumpang.length; i++){
        if(penumpang[i] == nama) return true;
    }
    return false;
}

var isUndefined = function(){
    for(var i=0; i < penumpang.length; i++){
        if(penumpang[i] == undefined) return i;
    }
    return -1;
}

var tambahPenumpang = function(nama){
    if(penumpang.length == 0){
        penumpang[0] = nama;
        console.log(penumpang);
    }
    else if(isSame(nama)) console.log(nama + " sudah ada di angkot");
    else if(isUndefined() != -1){ 
        penumpang[isUndefined()] = nama;
        console.log(penumpang);
    }
    else {
        penumpang[penumpang.length] = nama;
        console.log(penumpang)
    }
}

var hapusPenumpang = function(nama){
    if(penumpang.length == 0){
        console.log('Angkot Kosong');
    }
    else {
        for(var i=0; i < penumpang.length; i++){
            if(penumpang[i] == nama){
                penumpang[i] = undefined;
                console.log(nama + ' telah turun dari angkot');
                return;
            }
            else if(i == penumpang.length - 1){
                console.log('Penumpang dengan nama ' + nama + ' tidak ditemukan');
                return;
            }
        }
    }
}
