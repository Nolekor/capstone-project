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

  function addCartItems(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
    console.log(cartItems);
  }

  function removeCartItems(id) {
    setCartItems((prevItems) => prevItems.filter((photo) => photo.id !== id));
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
        addCartItems,
        cartItems,
        removeCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
