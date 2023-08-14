const students = [
    {
        name : "Mithun",
        marks : 95,
    },
    {
        name : "Prabir",
        marks : 75,
    },
    {
        name : "Alka",
        marks : 92,
    },
    {
        name : "Shivam",
        marks : 70,
    },
    {
        name : "Farman",
        marks : 99,
    },
];

function checkResults(student) {
    let flag = false;
    for (let stu of students){
        if(stu.name == student && stu.marks > 90){
            console.log("Congratulations " + stu.name + "! You have cleared the exam.");
            flag = true;
            break;
        } 
        else if (stu.name == student && stu.marks <= 90){
            console.log("Sorry, you have not cleared the exam!");
            flag = true;
            break;
        } 
    }
    if (!flag) console.log("Invalid User !!");
}

checkResults("Mithun S");