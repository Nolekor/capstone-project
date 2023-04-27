import { useContext } from "react";
import { useState } from "react";
import { Context } from "../Provider";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorites, addCartItems, cartItems, removeCartItems } =
    useContext(Context);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorites(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorites(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    if (cartItems.some((e) => e.id === img.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeCartItems(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => {
            addCartItems(img);
          }}
        ></i>
      );
    }
  }
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <img src={`${img.url}`} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
