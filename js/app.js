let student_name = `Adam`;
let student_gpa = 3.7;
let honor_role = true;

if(honor_role === true) {
    console.log(`Well done, you're on the honor role!`);
} else {
    console.log(`Keep at it, you'll get better!`);
}

if(student_gpa >= 3.5) {
    console.log(`A`);
} else if(student_gpa >= 3.0) {
    console.log(`B`);
} else if(student_gpa >= 2.5) {
    console.log(`C`);
} else if(student_gpa >= 2.0) {
    console.log(`D`);
} else if (student_gpa >= 0.0) {
    console.log(`F`);
}

let student_names = [`Beth`, `Alice`, `Bob`];
let student_gpas = [3.0, 2.0, 2.5];
let honor_roles = [true, false, false];

student_names.push(`Adam`);
student_gpas.push(3.7);
honor_roles.push(true);

let last_student = student_names.pop();
let last_student_gpa = student_gpas.pop();
let last_student_honor = honor_roles.pop();

let counter = 0;
while(counter < 10) {
    console.log(counter);
    counter = counter + 1;
}