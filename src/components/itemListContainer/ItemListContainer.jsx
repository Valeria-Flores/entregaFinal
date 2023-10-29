import { collection, getDocs, query, where } from 'firebase/firestore'
import { getProductos, getProductosbyCategoria, getProductosbyId } from '../../muebles'
import ItemList from '../itemList/ItemList'
import { Item } from '../items/Item'
import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {db} from "../../services/firebase"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId }= useParams()
    
    useEffect(() => {
        setLoading(true); 
        const coleccionProductos = categoryId 
        ? query(collection(db, "productos"), where("categoria","==",categoryId))
        :collection(db, "productos")
        getDocs(coleccionProductos)
            .then(res => {
                const list = res.docs.map(product => {
                    const data = product.data()
                    return {
                        id: product.id,
                        ...product.data()
                    };
                });
                setProductos(list); 
                console.log("lista",list)
            })
            
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryId]);
    

    return (
        <div>
            <h2>
                {greeting}
            </h2>
            <ItemList productos={productos}></ItemList>    
              
        </div>
    )
}

export default ItemListContainer



/* 
<button onClick={() => { setUsers(usuarios.find(us => us.id === 1)) }}>Ingresar</button>
            {}
            <div>
                <Item user={users} />

                {}
            </div>
*/
/*const [users, setUsers] = useState({})

    const usuarios = [{
        id: 1,
        nombre: "Daniel",
        correo: "daniel.olivares@gmail.com"
    },
    {
        id:2,
        nombre: "Valeria",
        correo: "valeria.flores@gmail.com"
    }] 
    getProductos()
        .then(response=>{
            setProductos(response)
        })
        .catch(error =>{
            console.error(error)
        })
    
    
    */

/*
useEffect(() => {
        const asyncFun = categoryId ? getProductosbyCategoria : getProductos;
        console.log(categoryId)
        asyncFun(categoryId)
          .then(response => {
            console.log("Filtered Products:", response); 
            setProductos(response);
          })
          .catch(error => {
            console.error(error);
          });
      }, [categoryId]);

    useEffect(() => {
        setLoading(true); 
        const coleccionProductos = categoryId 
        ? query(collection(db, "productos"), where("category","==",categoryId))
        :collection(db, "productos")
        getDocs(coleccionProductos)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    };
                });
                setProductos(list); 
                console.log("lista",list)
            })
            
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryId]);
*/