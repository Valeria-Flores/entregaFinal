export const productos = [
    {
        nombre:"Mesa de comedor",
        categoria: "mesas",
        descripcion:"Mesa de comedor de elegante y robusta, con un acabado en madera que le brinda calidez y versatilidad para adaptarse a cualquier estilo de decoración.",
        precio:3000,
        imagen:"/assets/mesacomedor.webp",
        stock:10

    },
    {
        nombre:"Escritorio",
        categoria:"mesas",
        descripcion:"El escritorio blanco presenta líneas limpias y modernas, con amplio espacio de trabajo, compartimentos de almacenamiento integrados y una superficie resistente, perfecto para crear un ambiente funcional y organizado en cualquier oficina o estudio.",
        precio:1500,
        imagen:"/assets/escritorio.webp",
        stock:10
    },
    {
        nombre:"Cama individual",
        categoria:"dormitorio",
        descripcion:"La base de cama individual ofrece un diseño contemporáneo y elegante, con una estructura sólida y resistente que brinda soporte óptimo, mientras que su tono neutro se adapta fácilmente a cualquier estilo de dormitorio.",
        precio:3000,
        imagen:"/assets/camaind.webp",
        stock:10
    },
    {
        nombre:"Cama matrimonial",
        categoria:"dormitorio",
        descripcion:"La base de cama matrimonial combina funcionalidad y estilo, con un diseño moderno, una estructura robusta y un tono suave que aporta luminosidad y tranquilidad al espacio de descanso.",
        precio:5000,
        imagen:"/assets/camamat.webp",
        stock:10
    },
    {
        nombre:"Set de sillas",
        categoria:"sillas",
        descripcion:"El set de 4 sillas blancas para comedor combina un diseño moderno y minimalista con la comodidad y durabilidad de su estructura ergonómica, brindando un toque de elegancia y luminosidad a cualquier espacio.",
        precio:3000,
        imagen:"/assets/silla.webp",
        stock:10
    },
    {
        nombre:"Set de bancos",
        categoria:"sillas",
        descripcion:"El set de 4 bancos cuenta con un diseño moderno y minimalista, asientos cómodos y una estructura duradera, ofreciendo una solución versátil y elegante para completar el mobiliario de cualquier bar o cocina.",
        precio:2250,
        imagen:"/assets/banco.webp",
        stock:10
    },
    {
        nombre:"Buró",
        categoria:"almacenamiento",
        descripcion:"El buró combina belleza y funcionalidad con su diseño elegante y acabado en madera, ofreciendo espacio de almacenamiento con cajones espaciosos y una superficie resistente, ideal para complementar cualquier dormitorio con estilo y practicidad.",
        precio:1600,
        imagen:"/assets/buro.webp",
        stock:10
    },
    {
        nombre:"Armario",
        categoria:"almacenamiento",
        descripcion:"El armario blanco presenta un diseño clásico y atemporal, con amplio espacio de almacenamiento, estantes ajustables y un elegante acabado en blanco que se adapta a cualquier estilo de decoración, proporcionando organización y estilo a cualquier habitación.",
        precio:5000,
        imagen:"/assets/armario.webp",
        stock:10
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductosbyId=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductosbyCategoria=(categoryId)=>{
    return new Promise((resolve, reject)=>{
        const filteredProducts = productos.filter((prod) => prod.categoria === categoryId);
        if (filteredProducts.length > 0) {
            resolve(filteredProducts);
        } else {
            reject("No se encontraron productos en la categoría especificada.");
        }
    })
}

/**
 setTimeout(()=>{
            resolve(productos.filter(prod => prod.categoria == productCategory))
        }, 500
        )
 */