//if / if else;
//1.Number is Greater than 10

let num=15;
if (num > 10) {
    console.log("Number is big");
}

//2.check if person is eligible to vote

let age=20;
if (age>18) {
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible to Vote");
}

//3.Check Temperature

let temp=35;
if (temp>30) {
    console.log("Hot");
}else{
    console.log("cool");
}

//4.Check if number is postive or negative

let number=-5;
if (number>=0) {
    console.log("Number is Positive"); 
}else{
    console.log("Number is Negative");
}

//5.Check if number is evev or add

let Num=5;
if (Num % 2===0) {
    console.log("Number is Even");
}else{
    console.log("Number is Odd");
}

//else if;
//6.Grade Based on Marks

let mark=80;
if (mark >=90) {
    console.log("Grade A");
}else if(mark >=70){
    console.log("Grade B");
}else if(mark >=50){
    console.log("Grade C");
}else{
    console.log("Fail");
}

//7.Message Based on hour

let hour=15;
if (hour >=5 && hour <12) {
    console.log("Morning");
}else if(hour >=12 && hour <17 ){
    console.log("Afternoon");
}else if(hour >=17 && hour <21){
    console.log("Evening");
}else{
    console.log("Night");
}

//8.Check if number is 0,postive,or negative

let Number=-8;
if (Number >0) {
    console.log("Number is Positive");
}else if(Number <0){
    console.log("Number is Negative");
}else{
    console.log("Number is zero");
}

//9.Score Result

let score=85;
if (score >=100) {
    console.log("Winner");
}else if (score>=50){
    console.log("Good");
}else{
    console.log("Try Again");
}

//10.largest among 3 numbers

let a=10;
let b=35;
let c=25;
if (a>b && a>c) {
    console.log("A is largest Number");
}else if (b>c && b>a){
    console.log("B is largest Number");
}else{
    console.log("C is largest Number");
}

//Switch Statement
//11.Print Day Name

let day=2;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break; 
    case 7:
        console.log("Saturday");
        break;          
    default:
        console.log("Invalid Number");
        break;
}

//12.Traffic Light Action

let TrafficLight = "red";
switch (TrafficLight) {
    case "red":
        console.log("Stop");
        break;
     case "yellow":
        console.log("Ready");
        break;
     case "green":
        console.log("Go");
        break;        
    default:
        console.log("Invalid Signal");
        break;
}

//13.Season based on Month

let month = 4;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Rainy");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;    
    default:
        console.log("Invalid Month");
        break;
}

//14. Role Message

let role ="Admin";
switch (role) {
    case "Admin":
        console.log("Full Access");
        break;
    case "User":
        console.log("Limited Access");
        break;    
    case "Guest":
        console.log("View Only Access");
        break;
    default:
        console.log("Unknown Role");
        break;
}

//15. Performance Message Based on Grade
let Grade = "A";
switch (Grade) {
    case "A":
    console.log("Excellent Perfomance");
        break;
    case "B":
    console.log("Good Perfomance");
        break;
    case "C":
    console.log("Average Perfomance");
        break;
    case "D":
    console.log("Needs Improvement");
        break;        
    default:
    console.log("Invalid Grade");
        break;
}

//For Loop;
//16.Print Numbers 1 t0 10
for (let i = 1; i <=10; i++) {
    console.log(i);
}

//17.Print Numbers 10 t0 1
for (let i = 10; i >=1; i--) {
    console.log(i);
}

//18.Print Even Numbers from 1 to 20
for (let i = 1; i <=20; i++) {
   if (i % 2===0) {
    console.log(i);
   }  
}

//19.Print Odd Numbers from 1 to 20
for (let i = 1; i <=20; i++) {
   if (i % 2!==0) {
    console.log(i);
   }  
}

//20.Multiplication Table of 5
let Numm= 5;
for (let i = 1; i <=10; i++) {
    console.log(Numm + "x" + i + "=" + (Numm*i));
}

//While Loop;
//21.Print Numbers 1 to 5 using While
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}

//22.Print Numbers 5 to 1 using While
let j=5;
while (j>=1) {
    console.log(j);
    j--;
}

//23.Print even Numbers from 1 to 10 While
let k=1;
while (k <=10) {
    if (k % 2 ===0) {
        console.log(k);
    }
    k++;
}

//24.Print Sum of Numbers from 1 to 10
let l=1;
sum=0;
while (l<=10) {
    sum=sum+l;
    l++; 
}
console.log("Sum =", sum);

//25.Print Square of numbers 1 to 5
let m=1;
while (m <=5) {
    console.log(m * m);
    m++;
}

//do while;
//26.Print Numbers 1 to 5 using do while
let n=1;
do {
    console.log(n);
    n++;
} while (n <=5);

//27.Print Numbers 5 to 1 using do while
let o=5;
do {
    console.log(o);
    o--;
} while (o >=1);

//28.Print Multiples of 3 up to 30
let p=3;
do {
    console.log(p);
    p=p+3;
} while (p <=30);

//29.Print Numbers Divisible by 4 from 1 to 20
let q=1;
do {
    if (q % 4 ===0) {
        console.log(q);
    }
    q++;
} while (q<=20);

//30.Print Numbers until value reaches 10
let r=1;
do {
    console.log(r);
    r++;
} while (r <= 10);

//For of
//31.Print Each Character of string "javascript"
let text="javascript";
for (let char of text){
    console.log(char);
}

//32.Print each fruit from array
let fruits = ["apple","banana","orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

//33.count number of characters in a string
let arun="javascript"
count=0;
for (let pandi of arun) {
    count++;
}
console.log("Total Characters: ", count);

//34.Print only vowels from a string
let ashok="javascript";
for (let kumar of ashok) {
    if (kumar ==="a" ||kumar ==="e" ||kumar ==="i" ||kumar ==="o" ||kumar ==="u" ) {
        console.log(kumar);
    }
}

//35.print sum of numbers from array[10,20,30]
let Numbers=[10,20,30];
sum=0;
for (let Numb of Numbers) {
    sum=sum+Numb;
}
console.log("Sum =",sum);

//For in;
//36.Print all values of object
let student={
    name: "Arun",
    age: 25,
    department: "IT"
};
for (let key in student) {
    console.log(student[key]);
}

//37.Print all keys of object
let students={
    name: "Arun",
    age: 25,
    department: "IT"
};
for (let key in students) {
    console.log(key);
}

//38.Print key and value together
let stu={
    name: "Arun",
    age: 25,
    department: "IT"
};
for (let key in stu) {
    console.log(key + ":" + stu[key]);
}

//functions;
//39.function add(a,b)-return addition
function add(a,b) {
    return a+b;
}
let result = add(5,6);
console.log(result);

//40.function square(num)-return square of num
function square(num) {
    return num*num;
}
let results = square(5);
console.log(results);

