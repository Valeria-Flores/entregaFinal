import { getProductos, getProductosbyCategoria, getProductosbyId } from '../../muebles'
import ItemList from '../itemList/ItemList'
import { Item } from '../items/Item'
import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"



const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos]=useState([])
    const { categoryId }= useParams()
    
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