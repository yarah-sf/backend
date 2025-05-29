let num = 11

//declaraçcao

function number(num) {
    let ver = num % 2 === 0 ? "É par" : "É impar";
    return ver
}

let veri = number(num);
console.log(veri);

//expressao

let nam = function (num) {
    let ver = num % 2 === 0 ? "par" : "impar";
    return ver
}

let verif = nam(num);
console.log(verif)

//seta

let nim = (num) => num % 2 === 0 ? "par" : "impar";

let verify = nim(num);
console.log(verify);