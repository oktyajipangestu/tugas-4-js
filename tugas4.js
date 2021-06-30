let a = 152;
let b = 156;
let c = 150;

if (a > b) {
    if (a > c) {
        console.log("a memiliki tingi badan tertinggi.");
    }  else if ( a == c ) {
        console.log("a dan c memiliki tingi badan tertinggi");
    } else {
        console.log("c memiliki tinggi badan tertinggi");
    }
} else if (b > a) {
    if (b > c) {
        console.log("b memiliki tingi badan tertinggi");
    } else if ( b == c ) {
        console.log("b dan c memiliki tingi badan tertinggi");
    } else {
        console.log("c memiliki tinggi badan tertinggi");
    }
} else {
    console.log("a, b, dan c memiliki tinggi yang sama");
}