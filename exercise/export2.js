// # 2 (Export Default)
// # Untuk menghitung BMI (Body Mass Index)
// # Rumus : BMI = berat / (tinggi * tinggi), berat dalam kg dan tinggi dalam meter
// # Tampilkan juga hasil BMI termasuk kategori apa (Obesitas, dst)

let sherren = {
    tinggi: 1.61,
    berat: 50,    
};
let BMI = (tinggi, berat) => {
    let hasil = berat / (tinggi * tinggi);
    return hasil;
};

export {sherren};
export default BMI;
