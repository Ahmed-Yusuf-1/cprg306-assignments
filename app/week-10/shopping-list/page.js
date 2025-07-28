"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-gray-800">
        <div>
          <h1 className="text-3xl text-white font-bold mb-4">Access Denied</h1>
          <p className="text-white mb-4">
            Please{" "}
            <Link href="/week-9" className="text-blue-400 hover:underline">
              log in
            </Link>{" "}
            to view the shopping list.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-950 p-2 m-2">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}