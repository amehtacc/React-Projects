// Importing React (required for defining functional components)
import React from "react";

// Importing the star rating image
import Rating from "../assets/rating_star.png";

// Importing the reusable Button component
import Button from "./Button";

/**
 * ProductCard Component
 *
 * This component displays product details such as an image, title, price, 
 * category, rating, and description, along with "Add to Cart" and "Buy Now" buttons.
 * 
 * Props:
 * @param {string} image - URL of the product image
 * @param {string} title - Name of the product
 * @param {number} price - Price of the product
 * @param {string} category - Product category
 * @param {number} rating - Average rating of the product
 * @param {number} reviewsCount - Total number of reviews
 * @param {string} description - Short description of the product
 */

function ProductCard({ image, title, price, category, rating, reviewsCount, description }) {
  return (
    // Main container for the product card
    <div className="w-[350px] h-[450px] rounded-3xl overflow-hidden p-4 shadow-2xl bg-white">
      
      {/* Image container: Centers the product image */}
      <div className="h-[55%] flex justify-center items-center">
        <img className="max-w-32" src={image} alt={title} />
      </div>

      {/* Product details container */}
      <div className="h-[45%] flex flex-col justify-between">
        
        {/* Title and Price section */}
        <div className="flex justify-between -mb-4">
          <h2 className="font-semibold text-xl">{title.slice(0, 20)}</h2> {/* Limiting title length */}
          <p className="font-semibold text-xl">${price}</p>
        </div>

        {/* Category and Rating section */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm text-gray-500">{category}</p> {/* Product category */}
          
          {/* Rating container */}
          <div className="flex justify-center items-center">
            <img className="w-5" src={Rating} alt="Rating" /> {/* Star icon */}
            <p className="text-sm font-medium">
              {rating} <span className="text-xs">({reviewsCount} reviews)</span>
            </p>
          </div>
        </div>

        {/* Product Description */}
        <p className="text-sm text-gray-600 font-medium">
          {description.slice(0, 100)}... {/* Limiting description length */}
        </p>

        {/* Buttons section */}
        <div className="flex justify-between">
          <Button className="w-[49%] h-12 bg-black text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-200" text="Add to cart" />
          <Button className="w-[49%] h-12 bg-green-500 text-white hover:bg-green-600 hover:border-green-700 transition-all duration-200" text="Buy now" />
        </div>

      </div>
    </div>
  );
}

// Exporting the ProductCard component to be used in other parts of the application
export default ProductCard;
