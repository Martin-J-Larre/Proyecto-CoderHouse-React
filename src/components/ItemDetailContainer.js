import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import { productos } from './productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos.filter((item) => item.id === id)), 2000);
        }).then((data) => setProduct(data[0]));
    }, []);

    console.log("product ========", product);

    return (
        <div className="items-Detail-Container">
          <ItemDetail {...product}/>
        </div>   
    );
}

export default ItemDetailContainer;