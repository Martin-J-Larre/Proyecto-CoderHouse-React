import { useEffect, useState } from 'react';
import { productos } from './productos';
import ItemList from './ItemList';

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos), 2000)
        }).then(data => setProducts(data))
    }, []);

    console.log("data = ************** ", products);

    return (
        <div className="itemsListContainer">
          <ItemList products ={products}/>
        </div>   
    );
}

export default ItemListContainer;