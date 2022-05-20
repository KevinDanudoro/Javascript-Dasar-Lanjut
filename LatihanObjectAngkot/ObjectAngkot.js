
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar = 3000){
        if(this.penumpang.length == 0) return "Angkot Masih Kosong";

        for(var i=0; i<this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.kas += bayar;
                this.penumpang.splice(i, 1);
                return `${namaPenumpang} telah turun. Bayar ${bayar}`;
            }
            else if(i == this.penumpang.length - 1){
                return "Tidak ditemukan Penumpang";
            }
        }
    }
}

var angkot1 = new Angkot('kevin danudoro', ['lebak bulus', 'ciputat'], [], 0);
var angkot2 = new Angkot('kenny danuarta', ['parung', 'ciputat'], [], 0);