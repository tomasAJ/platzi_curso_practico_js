

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ( precio * porcentajePrecioConDescuento) /100;
    return precioConDescuento;
    
}


/* 
const precioOriginal = 100;
const descuento = 15;
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal*porcentajePrecioDescuento)/100;

console.log({
precioOriginal,
descuento,
porcentajePrecioDescuento,
precioConDescuento
});

 */