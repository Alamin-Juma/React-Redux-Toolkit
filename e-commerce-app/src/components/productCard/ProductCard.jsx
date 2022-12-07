import { Button } from "../button/Button";

import { onAddItemsToCart } from "../../features/cart/cartSlice";

import { useDispatch } from "react-redux";
import { useFetchProductsQuery } from "../../features/products/productsService";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  // const addProductToCart = () => ;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => dispatch(onAddItemsToCart(product))}>
        Add to cart
      </Button>
    </div>
  );
};
