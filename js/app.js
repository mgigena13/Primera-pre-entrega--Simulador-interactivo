//creo clase para los productos
class Producto {
    constructor(nombre, img, categoria, precio, id) {
        this.nombre = nombre;
        this.img = img;
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
}

const productos = [
    new Producto("macBook Pro Air", "https://picsum.photos/id/0/600", "Informatica", 252457, 1),
    new Producto("Viaje a Bariloche", "https://picsum.photos/id/10/600", "Turismo", 182000, 2),
    new Producto("Kit de útiles escolares", "https://picsum.photos/id/20/600", "Libreria", 4500, 3),
    new Producto("Café Colombiano", "https://picsum.photos/id/30/600", "Almacen", 3800, 4),
    new Producto("Mascota Conejo", "https://picsum.photos/id/40/600", "Veterinaria", 1500, 5),
    new Producto("Paseo en barco", "https://picsum.photos/id/50/600", "Turismo", 18757, 6),
    new Producto("Kit de Utiles de oficina", "https://picsum.photos/id/60/600", "Libreria", 8000, 7),
    new Producto("Camioneta de coleccion", "https://picsum.photos/id/1072/600", "Autos", 5000000, 8)
]


//Registrar user
window.onload = function() {
    let usedSaved = prompt('Ingresa un usuario');
    if (usedSaved == '') {
        usedSaved = prompt('El usuario no puede estar vacio. Por favor ingresa un usuario')
    }

    let passSaved = prompt('Ingresa una contraseña');
    if (passSaved == '') {
        passSaved = prompt('La contraseña no puede estar vacia. Por favor ingresa una contraseña');
    }


    let montoCompra = 0

    alert("Bienvenido " + usedSaved + ". Tu registro se ha hecho con exito. Te invitamos a loguearte para ver nuestro catalogo")

    //Loguearse
    function login() {
        let ingresar = false;

        for (let i = 2; i >= 0; i--) {
            let passUsuario = parseInt(prompt(usedSaved + ' Ingresa tu contraseña. Tenes ' + (i + 1) + ' intentos'));
            if (passUsuario == passSaved) {
                ingresar = true
                break;
            } else {
                alert('Error. Te quedan ' + i + ' intentos.')
            }
        }
        return ingresar
    }

    //Creo funcion para finalizar
    function despedida() {
        alert(usedSaved + ' Lo esperamos nuevamente pronto!');
    }

    //Comenzar a navegar
    if (login()) {
        menu()
    } else {
        alert('Clave incorrecta o usuario no registrado')
    }

    // Creo menu principal

    function menu() {
        let menu = prompt('elegi una opcion: \n1- Añadir producto nuevo al catalogo \n2- Ordenar catalogo segun criterio \n3- Ver catalogo por defecto y comprar \n4- Buscar un producto especifico \n5- SALIR')

        switch (menu) {

            case '1':
                abm()
                break;
            case '2':
                let criterio = prompt('elegi una opcion: \n1- Productos de la A a la Z \n2- Productos de la Z a la A')
                alert(mostrar(ordenar(criterio, productos)))
                compra()
                break;
            case '3':
                compra()
                break;
            case '4':
                let productoFiltrado = prompt('Escribi el nombre del producto que estas buscando');
                const filtrado = productos.filter((producto) => producto.nombre.toLowerCase().includes(productoFiltrado.toLocaleLowerCase()))
                if (filtrado == 0) {
                    alert('Lo sentimos pero no tenemos ese producto')
                } else {
                    const mostrarFiltro = filtrado.map((producto) => producto.nombre);
                    alert('Los productos que coinciden con tu busqueda son: \n' + mostrarFiltro.join('\n-'))
                }
                compra()
                break;
            case '5':
                despedida()
                break;
            default:
                alert('La opcion ingresada no existe')
                despedida()
                break;
        }
    }

    function compra() {

        let compra = prompt('elegi un producto para tu compra: \n1- macBook Pro Air --> $252457 \n2- Viaje a Bariloche --> $182000 \n3- Kit de útiles escolares --> $4500 \n4- Café Colombiano --> $3800 \n5- Mascota Conejo --> $1200 \n6- Paseo en barco --> $7900 \n7- Utiles de oficina --> $ 4600 \n8- Camioneta de coleccion --> $5000000 \n9- SALIR')

        switch (compra) {

            case '1':
                montoCompra += 252457
                subMenu()
                break;
            case '2':
                montoCompra += 182000
                subMenu()
                break;
            case '3':
                montoCompra += 4500
                subMenu()
                break;
            case '4':
                montoCompra += 3800
                subMenu()
                break;
            case '5':
                montoCompra += 1200
                subMenu()
                break;
            case '6':
                montoCompra += 7900
                subMenu()
                break;
            case '7':
                montoCompra += 4600
                subMenu()
                break;
            case '8':
                montoCompra += 5000000
                alert('Excelente eleccion!! el monto a pagar es de $' + montoCompra)
                subMenu()
                break;
            case '9':
                despedida()
                break;
            default:
                alert('La opcion ingresada no existe')
                despedida()
                break;
        }
    }

    //Cracion de submenu

    function subMenu() {
        let subMenu = prompt('Elegí una opción: \n1-  Abonar mi compra\n2- Seguir comprando')

        switch (subMenu) {
            case '1':
                if (montoCompra > 100000) {
                    alert('Guaaau! Te gastaste la vida! Tenes que abonar el total de $' + montoCompra)
                    opcionPago()
                    break;
                } else {
                    alert('Tenes que abonar el total de $' + montoCompra)
                    opcionPago()
                    break;
                }
            case '2':
                compra()
                break;
            default:
                alert('La opcion ingresada no existe')
                montoCompra = 0
                compra()
                break;
        }
    }

    //Opciones de pagar la compra

    function opcionPago() {
        let opcionPago = prompt('Elegí una opción: \n1- Transferencia Bancaria \n2- Mercado Pago \n3- Con el cuerpo \n4- Tarjeta de credito');

        switch (opcionPago) {
            case '1':
                alert('Excelente opcion! Porque somos un E commers copado te vamos a dar por esta opcion un 10% adicional de descuento, por lo que solo abonaras $' + parseInt(montoCompra / 1.1))
                alert('Transferi y notificanos con el comprobante a info@ecommerscopado.com.ar ')
                despedida()
                break;
            case '2':
                alert('Buenisimo! Hace la operacion en la plataforma de MELI y notificanos con el comprobante a info@ecommerscopado.com.ar ')
                despedida()
                break;
            case '3':
                alert('Peeeeeroooo!!!! Travieso/a!! Te gustaria pero lamentablemente esta opcion no esta disponible. Empecemos con tu compra de nuevo')
                montoCompra = 0
                compra()
                break;
            case '4':
                cuotasTarjeta()
                break;
            default:
                alert('La opcion ingresada no existe')
                subMenu()
                break;
        }
    }

    //Financiacion con tarjeta de credito

    function cuotasTarjeta() {
        let cuotas = prompt('Elegí cuotas: \n3 \n6 \n12');

        switch (cuotas) {
            case '3':
                alert('Buenisimo, el monto total de tu compra es $' + montoCompra + '. Por tanto abonaras 3 cuotas de $' + parseInt(montoCompra / 3))
                despedida()
                break;
            case '6':
                alert('Buenisimo, el monto total de tu compra es $' + montoCompra + '. Por tanto abonaras 6 cuotas de $' + parseInt(montoCompra / 6))
                despedida()
                break;
            case '12':
                alert('Buenisimo, el monto total de tu compra es $' + montoCompra + '. Por tanto abonaras 12 cuotas de $' + parseInt(montoCompra / 12))
                despedida()
                break;
            default:
                alert('La opcion ingresada no existe')
                opcionPago()
                break;
        }
    }
}

//ABM Productos

function abm() {
    let continuar = true;

    while (continuar) {
        let altaProductos = prompt('Ingresa los datos del producto: nombre, URL imagen, categoria, precio, separados por un guion del medio(-). Tipea X para finalizar alta de productos')

        if (altaProductos.toUpperCase() == 'X') {
            continuar = false;
            alert(mostrar(productos));
            break;
        }
        let datos = altaProductos.split('-');
        const producto = new Producto(datos[0], datos[1], datos[2], datos[3]);
        productos.push(producto);
        producto.asignarId(productos);
    }
}

//Ordenar productos alfabeticamente

function ordenar(criterio, array) {

    let arrayOrdenado = array.slice(0);
    switch (criterio) {
        case '1':
            let az = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
            return az;
        case '2':
            let za = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre));
            return za;
    }
}

//Funcion para hacer un string para poder mostrar en alert

function mostrar(array) {
    let info = '';
    array.forEach(elemento => {
        info += `Producto: ${elemento.nombre}\n Precio: $${elemento.precio}\n Categoria: ${elemento.categoria}\n\n`
    });
    return info;
}