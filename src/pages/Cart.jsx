import { useState, useContext } from "react";
import { Context } from "../Provider";
import CartItem from "../components/cartItem";

const Cart = () => {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, totalCost, emptyCartItems } = useContext(Context);
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  function processingOrder() {
    setButtonText("Processing Order");
    setTimeout(() => {
      console.log("Order Placed!"), setButtonText("Place Order");
      emptyCartItems();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: {totalCost(cartItems)}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={processingOrder}>{buttonText}</button>
        ) : (
          <p>You have no items in the cart!</p>
        )}
      </div>
    </main>
  );
};

export default Cart;
