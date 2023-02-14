//nomor 1
import { fhren, celc, formula} from './export.js';

console.log(`${fhren} fahrenheit = ${formula(fhren).toFixed(2)} celcius`);


//nomor 2
import {sherren} from './export2.js';
import BMI from './export2.js';

console.log(`Tinggi Badan = ${sherren.tinggi}m`);
console.log(`Berat Badan  = ${sherren.berat}kg`);
console.log(`BMI : ${BMI(sherren.tinggi, sherren.berat).toFixed(2)}`);

if ( BMI(sherren.tinggi, sherren.berat) < 18.50) 
{
    console.log(`Kategori: Kekurangan Berat Badan`);} 
else if (BMI(sherren.tinggi, sherren.berat) >= 18.50 && BMI(sherren.tinggi, sherren.berat) < 22.90) 
{
    console.log(`Kategori: Normal`)} 
else if (BMI(sherren.tinggi, sherren.berat) > 22.90 && BMI(sherren.tinggi, sherren.berat) <= 24.90) 
{
    console.log(`Kategori: Beresiko`)} 
else if (BMI(sherren.tinggi, sherren.berat) >= 25.00 && BMI(sherren.tinggi, sherren.berat) <= 29.90) 
{
    console.log(`Kategori: Obesitas tingkat 1`)} 