//
let employeeName: string = "Name: Mani";
let employId: any = "ID: 1234";
let department: string = "Department: QA Team";
let salary: number = 44000;
console.log(employeeName);
console.log(employId);
console.log(department);
console.log(salary);

let bonus: number = 55000; 
if (bonus >= 40000) { 
console.log("Employee is eligible for bonus"); 
} else { 
console.log("Not eligible"); 
}

let experiance: number = 12; 
if (experiance >= 5) { 
console.log("Experiance is met for bonus"); 
} else { 
console.log("Junior"); 
}

let location: string = "chennai"; 
if (location == "chennai") {
console.log("Employee is located in Chennai"); 
} else { 
console.log("Employe is not located in Chennai"); 
}

console.log(salary += bonus);