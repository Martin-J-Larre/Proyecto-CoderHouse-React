import { useEffect, useState } from "react";
import { productos } from "./productos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const onAdd = (producto) => {
    console.log("agregar un producto", producto);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 2000);
    }).then((data) => setProducts(data));
  }, []);

  console.log("data = ************** ", products);

  return (
    <div className="itemsListContainer">
      <ItemList products={products} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
