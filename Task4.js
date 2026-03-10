//Javascript Functions
//1.greetUser(name)

function greetUser(name) {
    console.log("Welcome to Stackly, "+ name);
}
greetUser("Arun");  

//2.CalculateSalary(Basic,Bonus)

function CalculateSalary(basic,bonus) {
    return basic+bonus;
}
console.log(CalculateSalary(26000,5000));

//3.CheckEvenOdd(num)

function CheckEvenOdd(num) {
    if (num % 2===0) {
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(CheckEvenOdd(7));

//4.findMax(a,b,c)

function findMax(a,b,c) {
    return Math.max(a,b,c);
}
console.log(findMax(10,15,25));

//5.CalculateGST(price)

function CalculateGST(price) {
    return price + (price * 0.18);
}
console.log(CalculateGST(1000));

//6.login(username,password)
function login(username,password) {
    if (username==="admin" && password==="12345") {
        return "Login Successful";
    } else{
        return "Invaild Credentials"
    }
}
console.log(login("admin","12345"));

//Default Parameters
//7.createEmployee(name,role="Trainee")

function createEmployee(name,role="Trainee") {
    console.log("Employee Name: ",name);
    console.log("Role: ",role);
}
createEmployee("Arun");
createEmployee("Pandi", "Developer");

//8.calculateDiscount(price,discount=10)

function calculateDiscount(price,discount=10) {
    let finalPrice =price-(price*discount/100);
    return finalPrice;
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000,20));

//9.orderFood(item,quantity=1)

function orderFood(item,quantity=1) {
    console.log("Item: ",item);
    console.log("Quantity: ",quantity);
}
orderFood("Pizza");
orderFood("Burger", 3);

//Scope(10-12)
//10.Access global variable inside function

let company="Stackly";
function showCompany() {
    console.log("Company Name: ",company);
}
showCompany();

//11.var,let,const scope behavior
if (true) {
    var a=10;
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //(b)(c);Error

//12.variable inside function cannot be accessed outside
function testScope() {
    let message="Hello Stackly";
    console.log(message);
}
testScope();

//Hoisting(13-15)
//13.Print a Variable before decalring using var
console.log(a);
var a =10;
console.log(a);

//14.Print let variable before declaration
console.log(b);
let b =20;

//15.Call Function before declaration
greet();
function greet() {
    console.log("Hello Stackly");
}

//Function Types (16-18)
//16.Named Function

function showMessage() {
    console.log("Named Function Example");
}
showMessage();

//17.Anonymous Function(Stored in Variable)
let multiply=function(a,b) {
    return a*b
};
console.log(multiply(4,5));

//18.Arrow Function(square of a number)
const square=(num)=>{
    return num*num;
};
console.log(square(6));

//Callback & Higher Order Function(19-22)
//19.Function ProcessData(callback)

function ProcessData(callback) {
    console.log("processing Data...");
    callback();
}
function finished() {
    console.log("Data processed successfully");
}
ProcessData(finished);

//20.Function calculates(a,b,operations)
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));
 
//21.Callback printing "Task Completed"
function calculation(a, b, callback) {
    let result = a + b;
    console.log("Result:", result);
    callback();
}
function taskDone() {
    console.log("Task Completed");
}
calculation(5, 7, taskDone);

//22.Function accepting callback to print user data
function getUser(callback) {
    let user = {
        name: "Arun",
        age: 25
    };
    callback(user);
}
function displayUser(data) {
    console.log("Name:", data.name);
    console.log("Age:", data.age);
}
getUser(displayUser);

//Currying(23-24)
//23.Curried Function add(a)(b)(c)
function add(a) {
   return function(b) {
    return function(c) {
        return a+b+c;
    }
   }
}
console.log(add(2)(3)(4));

//24.Curried Function Multifly(a)(b)(c)
function Multiply(a) {
   return function(b) {
    return function(c) {
        return a*b*c;
    }
   }
}
console.log(Multiply(2)(3)(4));

// IIFE (Immediately Invoked Function Expression) (25–26)
// 25. IIFE printing "Website Loaded"
(function() {
    console.log("Website Loaded");
})();

//26.IIFE Calculating discount price
(function() {
    let price = 1000;
    let discount = 20;
    let finalPrice = price - (price * discount / 100);
    console.log("Final Price:", finalPrice);
})();

//Generator Functions(27-28)
//27.Generator yielding 3 random discount coupons
function* couponGenerator() {
    yield "DISCOUNT10";
    yield "SAVE20";
    yield "OFFER30";
}
let coupons = couponGenerator();
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

//28.Generator yielding motivational messages
function* motivation() {
    yield "Keep Coding";
    yield "Practice Daily";
    yield "You Will Become a Great Developer";
}
let msg = motivation();
console.log(msg.next().value);
console.log(msg.next().value);
console.log(msg.next().value);

//spread operators(29-31)
//29.Merge two arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let merged = [...arr1, ...arr2];
console.log(merged);

//30.Clone an array
let original = [10,20,30];
let copy = [...original];
console.log(copy);

//31.Merged Two Objects
let obj1 = {name: "Arun"};
let obj2 = {role: "Developer"};
let mergedObj = {...obj1, ...obj2};
console.log(mergedObj);

//Rest Operators(32-34)
//32.Function sumAll(...numbers)
function sumAll(...numbers) {
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total;
}
console.log(sumAll(1,2,3,4,5));

//33.First Arguments and rest arguments
function showArgs(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}
showArgs(10,20,30,40);

//34.Product Price total bill
function totalBill(...prices) {
    let total = 0;
    for(let price of prices){
        total += price;
    }
    return total;
}
console.log(totalBill(100,200,300));

//Destructuring(35-38)
//35.Array destructuring
let numbers = [10,20,30,40];
let [e,f,g,h] = numbers;
console.log(e,f,g,h);

//36.object destructuring
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 30000
};
let {name, role, salary} = employee;
console.log(name, role, salary);

//37.First and Last element from array
let arr = [10,20,30,40];
let [first,,,last] = arr;
console.log(first, last);

//38.Nested Array destructuring
let array = [1,2,[3,4]];
let [i,j,[k,l]] = array;
console.log(i,j,k,l);

//Array manipilation
//39.Push,Pop,Shift,Unshift
let arr3= [1,2,3,4,5];
arr3.push(6);     // add end
arr3.pop();       // remove end
arr3.shift();     // remove first
arr3.unshift(0);  // add first
console.log(arr3);
 
//40.Using splice()
let arr5 = [1,2,3,40,50,6];
arr5.splice(3,2,4,5);
console.log(arr5);