import "./count.css"
import { useState, useEffect } from "react"
const Count = ( {stock, inicial, add}) =>{
    const[cantidad, setCantidad] = useState(inicial)
    useEffect(() => {
        setCantidad(inicial);
      }, [inicial]);
    console.log("cant"+cantidad)
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
    console.log(cantidad)
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