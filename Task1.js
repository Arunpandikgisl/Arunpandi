// Task 1
let name = "Arun";
let age = 25;
let city = "Rajapalayam";

console.log("My name is "+  name  + ".");
console.log("I am "+ age + " years old.");
console.log("I am from " + city + ".");

// Task 2
let username = prompt("Enter your name:");
alert("Welcome "+ username + "!");
let learnJS = confirm("Do you want to learn JavaScript?");
if (learnJS) {
    alert("Great Choice!");
}else {
    alert("No Problem!");
}

// Task 3
let str = "Welcome";
let num = 06;
let bool = true;
let undef;
let nul =null;

console.log("Value: "+str+ "| Type: "+typeof str);
console.log("Value: "+num+ "| Type: "+typeof num);
console.log("Value: "+bool+ "| Type: "+typeof bool);
console.log("Value: "+undef+ "| Type: "+typeof undef);
console.log("Value: "+nul+ "| Type: "+typeof nul);

// Task 4
let colors = ["yellow","green","blue","gray","white"];
console.log(colors[0]);
console.log(colors[colors.length-1]);
console.log(colors.length);
for (let i = 0; i < colors.length; i++) {
    console.log(i + ":" + colors[i]);
}

// Task 5
let subjects = ["Tamil","English","Maths","Science","Social"];
let index = prompt("Enter an index number between 0 and 4:");
index = Number(index);
if (index >= 0 && index <subjects.length) {
   console.log("Subjects: " + subjects[index]);    
}else {
    console.log("Invalid index! Please enter between 0 and 4.");
}

// Task 6
let student ={
    name: "Arun",
    age: 25,
    course:"Full Stack Development",
    skills:["HTML","CSS","JavaScript"]
};
console.log("Student Name: "+student.name);
console.log("Student Skills: "+student.skills[1]);
console.log("Course Name: "+student.course);

// Task 7
let product ={
    name: "Laptop",
    price: 450000,
    category:"Electronics",
    inStock: true //false
};
console.log("Product Name: " + product.name);
console.log("Price: " + product.price);
if (product.inStock) {
    console.log("Available: Yes");
}else {
    console.log("Out of Stock");
}

// Task 8
const fruits = {
    tropical: ["mango", "pineapple"],
    berries: ["stawberry", "blueberry"],
    citrus: ["orange", "lemon"]
};
console.log(fruits.berries[1]);
console.log(fruits.tropical[0]);
console.log(fruits.citrus[1]);
console.log(Object.keys(fruits).length);


