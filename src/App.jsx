import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exath path="/" element={<Photos />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
