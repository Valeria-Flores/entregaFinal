import { useContext } from "react"
import Cart from "../cart/Cart"
import { CartContext } from "../../context/CartContext";


const CartItem = ({item}) =>{
    const {deleteItem} = useContext(CartContext)
    console.log(item)
    return(
        <div>
            <p>{item.nombre}</p>
            <p>${item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.quantity * item.precio}</p>
            <button className="" onClick={()=>deleteItem(item.id)}></button>
        </div>
    )
}

export default CartItem
