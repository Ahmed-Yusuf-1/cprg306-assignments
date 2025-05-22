import Link from "next/link";

export default function Home() {

  let linkstyle = "hover:text-cyan-800";
  return (
    <main>
      <h1 className="text-3xl text-center pt-5 underline">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="text-xl pl-20 pt-5 space-y-2 text-cyan-500">
        <li className={linkstyle}><Link href="./week-2">Week 2</Link></li>
        <li className={linkstyle}><Link href="./week-3/objects">Week 3 - objects</Link></li>
        <li className={linkstyle}><Link href="./week-3/props">Week 3 props</Link></li>
      </ul>
    </main>
  );
}
