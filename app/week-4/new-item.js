import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <form className="p-4 m-4 bg-white text-black max-w-sm w-full rounded-lg shadow-md border">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          required
          className="w-full mt-1 border-2 border-gray-200 p-2 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 border-2 border-gray-200 rounded-l-md bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="px-4 py-1 border-t-2 border-b-2 border-gray-200 bg-white">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 border-2 border-gray-200 rounded-r-md bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
        <select className="ml-4 flex-grow border-2 border-gray-200 p-2 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="" disabled>
            Category
          </option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          <option value="grains">Grains</option>
          <option value="sweets">Sweets</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="condiments">Condiments</option>
          <option value="frozen">Frozen</option>
          <option value="canned">Canned</option>
          <option value="baking">Baking</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="appetizer">Appetizer</option>
          <option value="side">Side</option>
          <option value="sauce">Sauce</option>
          <option value="spread">Spread</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Add Item
      </button>
    </form>
  );
}