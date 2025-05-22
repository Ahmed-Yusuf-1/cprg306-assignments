

export default function ObjectPage(){

    let student1 = {
        studentName: "Ahmed",
        studentAge: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG343", "CPRG306"],
        address: {
            street: "123 main st",
            city: "Calgary",
            province: "Alberta"
        }
    }

    let {studentName: name, 
        // schedule:[course1, course2, course3]
        // schedule:[,,course3]
        schedule:{2:course3},
        address:{city: cal}
    } = student1;


    return(
        <main>
            <h1>Objects</h1>
            <h1>Dot Notation</h1>
            <p>Name: {student1.studentName}</p>
            <p>Age: {student1.studentAge}</p>
            <p>schedule: {student1.schedule[1]}</p>
            <p>Object: {student1.address.city}</p>

            <h2>Destructuring</h2>
            <p>Name: {name}</p>
            <p>Schedule: {course3}</p>
            <p>City: {cal}</p>
        </main>
    );
}