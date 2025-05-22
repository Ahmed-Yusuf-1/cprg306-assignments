import StudentComponentNew from "./student-component-new";
import StudentComponent from "./student-components";


export default function PropsPage(){

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

    return(
        <main>
            <StudentComponent sName="Kevin" sAge="21" cCity="Calgary" />
            <StudentComponent sName="Bob" sAge="25" cCity="Edmonton" />
            <StudentComponent

                sName={student1.studentName}
                sAge={student1.studentAge}
                sCity={student1.address.city}
             />
             <StudentComponentNew studentObj={student1} />
        </main>
    );
}