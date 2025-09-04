import React from "react";
import products from "../data";

function Products({ addToCart }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-secondary shadow-lg rounded-lg p-4 text-center border border-accent hover:shadow-xl transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-darktext">
            {product.name}
          </h3>
          <p className="text-primary font-bold">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 bg-primary text-secondary px-4 py-2 rounded-md hover:bg-darktext transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default Products;
