function generateGrade() {
    let marks = parseInt(prompt("Enter student marks (between 0 and 100):"));

    if (marks >= 80) {
        return "A";//returns A if the marks are greater than or equal to 80
    } 
    else if (marks >= 60) {
        return "B";//returns B if the marks are greater than or equal to 60
    } 
    else if (marks >= 50) {
        return "C";//returns C if the marks are greater than or eqaul to 50
    } 
    else if (marks >= 40) {
        return "D";//returns D if the marks are greater than or eqaul to 40
    } 
    else {
        return "E";//returns E if the marks are below 40
    }
}

let grade = generateGrade();
alert("The corresponding grade is: " + grade);
console.log(grade);