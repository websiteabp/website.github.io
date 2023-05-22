const nama = "Aditya BP";
let usia = 19;

function biodatagenerate() {
    if(usia == 19) {
        // KONDISI PERTAMA
        console.log(`kamu dewasa`);
    } else {
        // JIKA KONDISI TIDAK TERPENUHI
        console.log(`kamu belum dewasa`);
    }
    console.log(`Nama saya adalah ${nama} dan usia saya ${usia} tahun`)
}

console.log(nama);
console.log(usia);

biodatagenerate();