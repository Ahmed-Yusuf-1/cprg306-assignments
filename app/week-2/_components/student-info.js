import Link from "next/link";

export default function StudentInfo(){
    return(
        <main>
        <p className=" ml-8 mt-8 mr-8 mb-4" >Name: Ahmed Yusuf</p>
        <p className=" ml-8 mt-8 mr-8 mb-4">My github repository <Link href="https://github.com/Ahmed-Yusuf-1/cprg306-assignments.git " target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">here</Link></p>
        </main>
    );
};