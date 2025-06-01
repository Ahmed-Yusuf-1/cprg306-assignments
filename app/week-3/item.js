

export default function Item(props){
    return(
        <ul> 
            <li className="flex flex-row bg-sky-500/50 my-4 h-10 text-lg">
            <p >{props.sName}</p>
            <p>{props.sQuantity}</p>
            <p>{props.sCategory}</p>
            </li>
        </ul>
    );
}