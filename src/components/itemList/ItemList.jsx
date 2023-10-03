import { CardGroup } from "react-bootstrap"
import { Item } from "../items/Item"
import "./itemlist.css"

const ItemList=({productos})=>{
    return(
        <CardGroup className="listGroup">
            {productos.map(prod=><Item key={prod.id} {...prod}></Item>)}
        </CardGroup>
    )
}
export default ItemList