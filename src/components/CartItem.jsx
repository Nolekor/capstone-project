import { useState, useContext } from "react";
import { Context } from "../Provider";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const { removeCartItem } = useContext(Context);
  const removeCartIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItem(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={removeCartIcon}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string,
  }),
};

export default CartItem;
