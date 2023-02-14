//  1 (Export)
//  Untuk mengkonversi suhu dari fahrenheit ke celcius
//  Tampilkan dengan contoh format : 99.20 Fahrenheit = 37.33 Celcius

let fhren = 99.20;
let celc = 37.33;

const fahrenheit=(fahrenheit) => 
{
    const hasil = 5/9*(fahrenheit-32);
    return hasil; }
       
export {fhren, celc, fahrenheit};