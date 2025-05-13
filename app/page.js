import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-center pt-5 underline">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="text-xl pl-20 pt-5 space-y-2 text-cyan-500">
        <li className=" hover:text-cyan-800"><Link href="/week-2">Week 2</Link></li>
      </ul>
    </main>
  );
}
