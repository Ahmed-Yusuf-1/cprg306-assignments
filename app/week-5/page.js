"use client";

import NewItem from "./new-item.js";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-800">
      <NewItem />
      <Link className="text-cyan-500 ml-8 mt-8 mr-8 mb-8" href="/" >Home</Link>
    </main>
    
  );
}
