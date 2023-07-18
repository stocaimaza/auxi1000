export const misProductos = [
    { id: "1", nombre: "Yerba", precio: 500, stock:10, img: "../img/yerba.jpg", idCat: "2" },
    { id: "2", nombre: "Fideos", precio: 200, stock:10, img: "../img/fideos.jpg", idCat: "2" },
    { id: "3", nombre: "Arroz", precio: 180, stock:5, img: "../img/arroz.jpg", idCat: "3" },
    { id: "4", nombre: "Aceite", precio: 900, stock:10, img: "../img/aceite.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}