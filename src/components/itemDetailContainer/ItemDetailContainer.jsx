import { useEffect, useState } from "react"
import { getProductosbyId } from "../../muebles"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto]= useState(null)
    const {itemId} = useParams()

    useEffect(()=>{
        getProductosbyId(itemId)
        .then(response =>{
            setProducto(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer



/**
 useEffect(()=>{
        getProductosbyId("1")
        .then(response =>{
            setProducto(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])
 */