import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardImg } from "react-bootstrap";
import "./item.css"

export const Item = ({ id, nombre, categoria, descripcion,precio, imagen, stock }) => {

    return (
            <article>
                <Card style={{ width: '26rem' }} className="cards">
                    <CardImg variant="top" src={imagen} alt={nombre}></CardImg>
                    <Card.Body>
                        <Card.Title>
                            {nombre}
                        </Card.Title>
                        <Card.Text>
                            Precio: {precio}
                            <br />
                            Stock disponible: {stock}
                        </Card.Text>

                        <Button className="option">
                            <Link to={`/item/${id}`} className="link">Ver más</Link>
                        </Button>
                    </Card.Body>
                </Card>
                

            </article>
    )
}
export default Item


/*
<picture>
                    <img src={imagen} alt={nombre} className="itemImg"></img>
                </picture>
                <header className="header">
                    <h3 className="itemHeader">
                        {nombre}
                    </h3>
                </header>
                <section>
                    <p className="desItem">
                        Precio: {precio}
                    </p>
                    <p className="desItem">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="fItem">
                    <Link to={`/item/${id}`} className="option">Ver más</Link>
                </footer>
*/