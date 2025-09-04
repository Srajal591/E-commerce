import React from "react";

function Navbar({ cartCount, openCart }) {
  return (
    <nav className="bg-primary text-secondary px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="flex items-center">
  <img 
    src="/logo.png" 
    alt="NeoShop Logo" 
    className="h-15 w-auto ml-5 " 
  />
</h1>

      <button
        onClick={openCart}
        className="bg-accent text-darktext px-4 py-2 rounded-lg font-medium hover:bg-darktext hover:text-secondary transition"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
