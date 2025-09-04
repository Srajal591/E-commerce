import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CartModal from "./components/CartModel";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-secondary min-h-screen flex flex-col">
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <Hero />
      <Products addToCart={addToCart} />
      <Footer />
      {isCartOpen && <CartModal cart={cart} closeCart={() => setIsCartOpen(false)} />}
    </div>
  );
}

export default App;
