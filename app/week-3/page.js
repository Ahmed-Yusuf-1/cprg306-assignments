import Link from 'next/link';
import ItemListComponent from "./item-list";

export default function Page(){
    return(
        <main>
            <h1 className="text-cyan-500 text-xl ml-8 mt-8 mr-8 mb-8">Shopping List</h1>
            <ItemListComponent />
            <Link className="text-cyan-500 ml-8 mt-8 mr-8 mb-8" href="/" >Home</Link>
        </main>
    );
}