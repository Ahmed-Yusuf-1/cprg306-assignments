import Link from "next/link";
import ItemList from "./Item-List";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <ItemList />
      <Link href="/" className="text-xl hover:underline m-2">
        Back to Home
      </Link>
    </main>
  );
}