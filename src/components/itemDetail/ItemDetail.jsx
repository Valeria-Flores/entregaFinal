import { useContext, useState } from "react"
import Count from "../counter/Count"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import "./itemDetail.css"

export const ItemDetail = ({ id, nombre, categoria, descripcion,precio, imagen, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, nombre, precio, imagen
        }
        addItem(item, quantity)
    }
    
    return (
            <article>
                <Container>
                    <Row className="align-items-center"> 
                        <Col>
                            <img src={imagen} alt={nombre} className="itemImg"></img>
                        </Col>
                        <Col className="itemContainer">
                        <header className="header">
                            <h3 className="leftAlign">
                                {nombre}
                            </h3>
                        </header>
                        <section>
                        <p className="leftAlign">
                            {descripcion}
                        <br />
                            <b>Precio: </b>${precio}
                        <br />
                            <b>Stock disponible: </b>{stock}
                        </p>

                        </section>
                        <footer>
                            {
                                quantityAdded > 0 ?(
                                    <Link to='/cart' className="terminarCompra">Terminar con la compra</Link>
                                ):(
                                    <Count inicial={1} stock={10} add={handleOnAdd}></Count>
                                )
                            }
                        </footer>
                        </Col>
                    </Row>
                </Container>

            </article>
    )
}

export default ItemDetail

//<Count inicial={1} stock={10} add={(cantidad)=> console.log("Añadido al carrito",cantidad)}></Count>
/*
                <picture className="md-4">
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
*/