import { Item } from '../items/Item'
import { useState } from 'react'

const ItemListContainer = ({ greeting }) => {
    const [users, setUsers] = useState({})

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

    return (
        <div>
            <h2>
                {greeting}
            </h2>
            <button onClick={() => { setUsers(usuarios.find(us => us.id === 1)) }}>Ingresar</button>
            {}
            <div>
                <Item user={users} />

                {}
            </div>
        </div>
    )
}

export default ItemListContainer