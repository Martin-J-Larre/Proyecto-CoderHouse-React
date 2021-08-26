import Item from "./Item";

const ItemList = ({products}) => {
    
    return (
        <div>
            {products.map((item) => (<Item {...item} />))}
        </div>   
    );
}

export default ItemList;