// let n1 = 10;
// let n2 = 9;
// let n3 = 8.5;
// let n4 = 9.8;

function calcularMedia(n) {
    let total = n[0] + (n[1] * 2) + n[2] + n[3];
    let media = total/5;
    return media.toFixed(1);
}

let mediaG = calcularMedia([10, 9.5, 9, 9.8]);
alert("Media do Gleidson: " + mediaG);

let mediaA = calcularMedia([9, 7, 6.8, 9]);
alert("Media do Alessandro: " + mediaA);

let mediaM = calcularMedia([10, 8, 9, 10]);
alert("Media da Maritana: " + mediaM);