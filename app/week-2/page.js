import StudentInfo from "./_components/student-info";
import Link from "next/link";

export default function week2(){
    return(
        <main>
            <h1 className="text-cyan-500 text-xl ml-8 mt-8 mr-8 mb-8">Shopping List</h1>
            <StudentInfo />
            <Link href="/">Home</Link>
        </main>
    );
}