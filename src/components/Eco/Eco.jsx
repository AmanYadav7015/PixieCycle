import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Reusable Bamboo Cutlery Set",
    price: "₹499",
    image: "/default.jpg", 
    link: "https://www.amazon.in/dp/B08XYZ" 
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag",
    price: "₹299",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B07ABC" 
  },
  {
    id: 3,
    name: "Stainless Steel Straw Set",
    price: "₹199",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B09LMN"
  },
  {
    id: 4,
    name: "Biodegradable Toothbrush",
    price: "₹150",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B012DEF"
  },
  {
    id: 5,
    name: "Reusable Beeswax Wraps",
    price: "₹599",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B045GH"
  },
  {
    id: 6,
    name: "Eco-Friendly Water Bottle",
    price: "₹799",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B078JK"
  },
  {
    id: 7,
    name: "Reusable Bamboo Cutlery Set",
    price: "₹499",
    image: "/default.jpg", 
    link: "https://www.amazon.in/dp/B08XYZ" 
  },
  {
    id: 8,
    name: "Organic Cotton Tote Bag",
    price: "₹299",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B07ABC" 
  },
  {
    id: 9,
    name: "Stainless Steel Straw Set",
    price: "₹199",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B09LMN"
  },
  {
    id: 10,
    name: "Biodegradable Toothbrush",
    price: "₹150",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B012DEF"
  },
  {
    id: 11,
    name: "Reusable Beeswax Wraps",
    price: "₹599",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B045GH"
  },
  {
    id: 12,
    name: "Eco-Friendly Water Bottle",
    price: "₹799",
    image: "/default.jpg",
    link: "https://www.amazon.in/dp/B078JK"
  }
];

const Eco = () => {
  return (
    <div className="relative h-auto bg-white flex flex-col items-center py-10 pb-30">
      <div className="absolute inset-0 bg-[url('/eco.jpeg')] bg-cover bg-center bg-fixed opacity-20"></div>

      <div 
        className="relative font-bold text-[#2d6a4f] text-5xl text-center mb-10"
        style={{ fontFamily: "'Figtree', sans-serif" }}
      >
        Eco-Friendly Products
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
      style={{width: "1300px"}}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-48 h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-8">{product.name}</h2>
            <p className="text-[#2d6a4f] font-bold text-xl">{product.price}</p>
            <a 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 bg-[#2d6a4f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700"
            >
              View on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eco;
