import { Link } from "react-router-dom";
// import ItemCount from "./ItemCount";

const Item = (props) => {
  return (
    <div className="Item-container">
      <img className="img-item" src={props.imagenUrl} />
      <h5 className="id-producto">Id:{props.id}</h5>
      <h5>$ {props.precio}</h5>
      <h5>{props.titulo}</h5>
      <button onClick={() => props.onAdd(props)}>Agregar</button>
      {/* <ItemCount valorInicial={0} stock={10}/> */}
      <Link to={`/item/${props.id}`}>Detalle del producto</Link>
    </div>
  );
};

export default Item;
