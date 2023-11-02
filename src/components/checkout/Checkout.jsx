import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import "./checkout.css"


const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState("");
  const { cart, total, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");


  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!user.name || !user.phone || !user.mail || user.mail !== validateEmail) {
      alert("Favor de completar los campos y verificar el correo electrónico");
    } else {
      let order = {
        user,
        item: cart,
        total: total(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, order)
        .then((res) => {
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="containerCheckout">
      {orderId !== ''
        ?<div>
            <h4>Su orden fue generada con éxito</h4>
            <p>Su id de compra es: {orderId}</p>
        </div>
        :<div>
            <h3>Terminar compra</h3>
            <p>Favor de completar el formulario con sus datos</p>
            <form onSubmit={finalizarCompra} className="leftCheckout">
                <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input
                    className="form-control"
                    onChange={datosComprador}
                    type="text"
                    placeholder="Nombre completo"
                    name="name"
                />
                </div>
                <div className="mb-3">
                <label className="form-label">Número de telefono</label>
                <input
                    className="form-control"
                    onChange={datosComprador}
                    type="number"
                    placeholder="+525534457865"
                    name="phone"
                />
                </div>
                <div className="mb-3">
                <label className="form-label">Correo electronico</label>
                <input
                    className="form-control"
                    onChange={datosComprador}
                    type="email"
                    placeholder="ejemplo@correo.com"
                    name="mail"
                />
                </div>
                <div className="mb-3">
                <label className="form-label">Confirmar correo electronico</label>
                <input
                    className="form-control"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    name="validateEmail"
                    onChange={(e) => setValidateEmail(e.target.value)}
                />
                </div>
                <button
                className="orderButton"
                type="submit"
                disabled={
                    !user.name || !user.phone || !user.mail || user.mail !== validateEmail
                }
                >
                Generar orden
                </button>
            </form>
        </div>
      }
    </div>
  );
};

export default Checkout;
