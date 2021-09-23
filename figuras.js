
//console.log("Hello, world!");

//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


//Código del círculo
console.group("Círculos");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
 
//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}  

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}  

console.groupEnd();



//Código del Triángulo Isósceles
function alturaTrianguloIsosceles(lado1,lado2,baseTriangulo){
    if (lado1 === lado2 && lado1 != base){
        const base = baseTriangulo/2;
        const altura = Math.sqrt( (lado1**2) - (base**2));
        return altura; 
    }
    
    return 0;
}



//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAlturaTrianguloIsosceles(){
    const input = document.getElementById("InputTrianguloIsosceles");
    const value = input.value;
    const altura = alturaTrianguloIsosceles()
}








/* 


//console.log("Hello, world!");


//Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm" );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+ areaCuadrado + "cm^2 ");

console.groupEnd();

//Código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);

const alturaTriangulo =5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();




//Código del círculo
console.group("Círculos");
//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();



 */