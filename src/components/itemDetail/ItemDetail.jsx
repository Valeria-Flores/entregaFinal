import Count from "../counter/Count"

export const ItemDetail = ({ id, nombre, categoria, descripcion,precio, imagen, stock }) => {

    return (
            <article>
                <picture>
                    <img src={imagen} alt={nombre} className="itemImg"></img>
                </picture>
                <header className="header">
                    <h3 className="itemHeader">
                        {nombre}
                    </h3>
                </header>
                <section>
                    <p className="desItem">
                        {descripcion}
                    </p>
                    <p className="desItem">
                        Precio: {precio}
                    </p>
                    <p className="desItem">
                        Stock disponible: {stock}
                    </p>
                </section>
                <Count inicial={1} stock={10} add={(cantidad)=> console.log("Añadido al carrito",cantidad)}></Count>
            </article>
    )
}