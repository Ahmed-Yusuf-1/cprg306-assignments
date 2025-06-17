import Link from "next/link";

export default function Home() {

  let linkstyle = "hover:text-cyan-800";
  return (
    <main>
      <h1 className="text-3xl text-center pt-5 underline">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="text-xl pl-20 pt-5 space-y-2 text-cyan-500">
        <li className={linkstyle}><Link href="./week-2">Week 2</Link></li>
        <li className={linkstyle}><Link href="./week-3">Week 3</Link></li>
        <li className={linkstyle}><Link href="./week-4">Week 4</Link></li>
        <li className={linkstyle}><Link href="./week-5">Week 5</Link></li>
      </ul>
    </main>
  );
}
