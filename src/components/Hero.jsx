import React from "react";

function Hero() {
  return (
    <section className="bg-accent text-darktext text-center py-16 rounded-lg m-6 mx-auto">
    <h2 className="flex items-center text-2xl font-bold mb-4 " >
  
  Welcome to
  <img 
    src="/logo.png" 
    alt="NeoShop Logo" 
    className="h-25 w-auto mr-2 " 
  />
</h2>

      <p className="text-lg mx-auto">Your one-stop shop for stylish products!</p>
    </section>
  );
}

export default Hero;
