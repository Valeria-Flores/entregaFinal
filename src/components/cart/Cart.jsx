    import { useContext } from "react"
    import { CartContext } from "../../context/CartContext"
    import { Link } from "react-router-dom"
    import CartItem from "../cartItem/CartItem"

    const Cart = () => {
        const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

        if(totalQuantity === 0){
            return (
                <div>
                    <h3>No hay items en el carrito</h3>
                    <Link to='/' className='Option'>Productos</Link>
                </div>
            )
        }
        
        return(
            <div>
                {cart.map(p => <CartItem key={p.id} item={p}></CartItem>)}
                <h5>Total: ${total()}</h5>
                <button onClick={() => clearCart()} className="Button">Limpiar el carrito</button>
                <Link to='/checkout' className="Option">Checkout</Link>
            </div>
        )
    }
    export default Cart