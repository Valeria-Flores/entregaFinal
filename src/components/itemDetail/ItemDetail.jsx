import { useContext, useState } from "react"
import Count from "../counter/Count"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


export const ItemDetail = ({ id, nombre, categoria, descripcion,precio, imagen, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, nombre, precio
        }
        addItem(item, quantity)
    }
    
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
                <br />
                    Precio: {precio}
                <br />
                    Stock disponible: {stock}
                </p>

                </section>
                <footer>
                    {
                        quantityAdded > 0 ?(
                            <Link to='/cart' className="option">Terminar con la compra</Link>
                        ):(
                            <Count inicial={1} stock={10} add={handleOnAdd}></Count>
                        )
                    }
                </footer>
            </article>
    )
}

export default ItemDetail

//<Count inicial={1} stock={10} add={(cantidad)=> console.log("Añadido al carrito",cantidad)}></Count>
