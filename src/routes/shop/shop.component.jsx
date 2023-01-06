import {ProductsContext} from "../../context/products.context";
import {useContext} from "react";
import ProductCard from "../../componets/product-card/product-card.component";
import './shop.style.scss';
const Shop = () => {

    const {products} = useContext(ProductsContext);

    return (<div className='products-container'>
        {products.map(product => {
            return <ProductCard key={product.id} product={product}></ProductCard>
        })}
    </div>)
}

export default Shop;
