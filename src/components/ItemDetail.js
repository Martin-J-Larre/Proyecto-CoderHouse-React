import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  //   const [cantidad, setCantidad] = useState();
  //   const onAdd = (producto) => {
  //     console.log("agregaron un producto", producto);
  //   };

  return (
    <div className="Item-container">
      <h2>Detalle de los productos</h2>
      {/* <img src={props.imagenUrl} Ver por que no anda ???  /> */}
      <h5>Id:{props.id}</h5>
      <h5> $ {props.precio}</h5>
      <h5>{props.titulo}</h5>
      <ItemCount valorInicial={0} stock={10} />
      <Link to="/cart">
        <button>Terminar mi compra</button>
      </Link>
    </div>
  );
};
export default ItemDetail;
