import "./count.css"
import { useState } from "react"
const Count = ( {stock, inicial, add}) =>{
    const[cantidad, setCantidad] = useState(inicial)

    const incremento = () =>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }

    const decremento = () =>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }
    return(
        <div className="contador">
            <div className="controles">
                <button className="boton" onClick={decremento}>-</button>
                <h4>{cantidad}</h4>
                <button className="boton" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="boton" onClick={()=> add(cantidad)} disabled={!stock}>Añadir al carrito</button>
            </div>

        </div>
    )
}
export default Count