import React from "react";

function CartModal({ cart, closeCart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-secondary p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-darktext">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-darktext">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-accent py-2"
            >
              <span>{item.name}</span>
              <span className="font-semibold text-primary">${item.price}</span>
            </div>
          ))
        )}
        <button
          onClick={closeCart}
          className="mt-4 w-full bg-primary text-secondary py-2 rounded-lg hover:bg-darktext transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
