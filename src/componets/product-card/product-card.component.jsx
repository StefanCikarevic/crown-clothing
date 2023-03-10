import './product-card.style.scss';
import Button from "../button/button.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={() => {
                addItemToCart(product)
            }}>Add to card</Button>
        </div>
    );

}

export default ProductCard;
