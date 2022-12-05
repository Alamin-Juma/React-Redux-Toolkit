import {Button} from '../button/Button';

import {  onAddItemsToCart } from "../../features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

   const addProductToCart = () => {
     dispatch( onAddItemsToCart(product));
   }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

