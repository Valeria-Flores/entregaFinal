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
                <button className="btnControl" onClick={decremento}>-</button> <text className="numContador">{cantidad} </text><button className="btnControl" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="option" onClick={()=> add(cantidad)} disabled={!stock}>Añadir al carrito</button>
            </div>

        </div>
    )
}
export default Count