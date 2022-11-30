import {Button} from '../button/Button';

import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

   const addProductToCart = () => {}

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

