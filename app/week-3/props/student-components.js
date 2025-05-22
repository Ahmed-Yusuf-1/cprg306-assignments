


export default function StudentComponent(props){
    return(
        <div className="bg-green-600 mb-10 p-3 border-radius-2 ">
            <h3 className="text-2xl font-serif">{props.sName}</h3>
            <p>Age: {props.sAge}</p>
            <p>City: {props.cCity}</p>
        </div>
    );
}