

export default function StudentComponentNew( {studentObj} ){
    return(
        <div>
             <h3>{studentObj.studentName}</h3>
             <p>Age: {studentObj.studentAge}</p>
             <p>City: {studentObj.address.city}</p>
        </div>
    );
}