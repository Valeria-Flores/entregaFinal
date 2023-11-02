import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Col, Row } from "react-bootstrap";
import "./cartItem.css"


const CartItem = ({item}) =>{
    const {removeItem} = useContext(CartContext)
    console.log(item)
    return(
        <div className="">
            <Row className="itemCarrito align-items-center">
                <Col lg={4} md={4}>
                    <img src={item.imagen} className="imageCart"></img>                
                </Col>
                <Col className="textLeft align-items-center">
                    <h5>{item.nombre}</h5>
                    <p><b>Precio:</b> ${item.precio}</p>
                    <p><b>Cantidad:</b> {item.quantity}</p>
                </Col>
                <Col className="textRight">
                    <p><b>Subtotal:</b> ${item.quantity * item.precio}</p>
                    <button className="deleteButton" onClick={()=>removeItem(item.id)}>Eliminar</button>
                </Col>
            
            </Row>
        </div>
    )
}

export default CartItem
