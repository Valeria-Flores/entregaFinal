    import { useContext } from "react"
    import { CartContext } from "../../context/CartContext"
    import { Link } from "react-router-dom"
    import CartItem from "../cartItem/CartItem"
    import "./cart.css"

    const Cart = () => {
        const {cart, clearCart, total} = useContext(CartContext)
        const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        if(totalQuantity === 0){
            return (
                <div className="carritoVacio">
                    <h3>Tu carrito de compras está vacío.</h3>
                    <p>Regresa al catálogo y elige tus productos favoritos para realizar tus compras.</p>
                    <br></br>
                    <Link to='/' className='Option buttonInicio'>Inicio</Link>
                </div> 
            )
        }
        console.log("cantidad:",totalQuantity)
        
        return(
            <div>
                {cart.map(p => <CartItem key={p.id} item={p}></CartItem>)}
                <h5>Total: ${total()}</h5>
                <button onClick={() => clearCart()} className="limpiarCarrito">Limpiar el carrito</button>     
                <Link to='/checkout' className="checkoutCarrito">Checkout</Link>
            </div>
        )
    }
    export default Cart