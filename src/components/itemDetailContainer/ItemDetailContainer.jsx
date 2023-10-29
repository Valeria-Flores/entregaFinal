import { useEffect, useState } from "react"
import { getProductosbyId } from "../../muebles"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import {db} from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState(null)
    const {itemId} = useParams()
    const [loader, setLoader] = useState(false)

    useEffect(() => { 
        setLoader(true)
        const collectionProd = collection(db, "productos")
        const referenciaDoc = doc(collectionProd,itemId)
        getDoc(referenciaDoc)
        .then((res) => setProducto({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
        .finally(() => setLoader(false))
    },[])
    
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

useEffect(()=>{
        getProductosbyId(itemId)
        .then(response =>{
            setProducto(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[itemId])





 */