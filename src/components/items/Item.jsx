export const Item = ({ user }) => {

    return (
            <div>
                <h5>{user.nombre}</h5>
                <h6>{user.correo}</h6>
            </div>
    )
}
