import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [photoArray, setPhotoArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorites(id) {
    const updatedArr = photoArray.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setPhotoArray(updatedArr);
  }

  function addCartItem(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeCartItem(id) {
    setCartItems((prevItems) => prevItems.filter((photo) => photo.id !== id));
  }

  function emptyCartItems() {
    setCartItems([]);
  }

  function totalCost(arr) {
    const total = arr.length * 5.99;
    return total.toLocaleString("it-IT", {
      style: "currency",
      currency: "Eur",
    });
  }
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPhotoArray(data));
  }, []);

  return (
    <Context.Provider
      value={{
        photoArray,
        toggleFavorites,
        addCartItem,
        cartItems,
        removeCartItem,
        totalCost,
        emptyCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
