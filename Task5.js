//Employee Salary Analysis System
//Using filter(),Find(),reduce(),some(),and every().

//Employee Data
let employees =[
    {name: "Ravi", salary:25000},
    {name: "Meena", salary:60000},
    {name: "Arun", salary:45000},
    {name: "Priya", salary:80000},
    {name: "John", salary:30000},
];

//1.Employees whose salary is greater than 40000(filter)
let highSalary = employees.filter(emp=>emp.salary>40000);
console.log(highSalary);

//2.First Employee whose salary is above 70000(find)
let firstHigh = employees.find(emp=>emp.salary >70000);
console.log(firstHigh);

//3.Total salary of all employees(reduce)
let totasalary = employees.reduce((sum, emp) => sum + emp.salary,0);
console.log(totasalary);

//4.Check if any employee salary is below 20000(some)
let below20k = employees.some(emp=>emp.salary<20000);
console.log(below20k);

//5.Check if any employee salary is above 20000(every)
let above20k = employees.some(emp=>emp.salary>20000);
console.log(above20k);

//E-commerce Product search
//Concepts:includes(),indexOf(),lastindexOf()

//Product Data
let products =["laptop","mobile","tablet","smartwatch","mobile"];

//1.check if "tablet" exists in the product list(includes)
let hasTablet = products.includes("tablet");
console.log(hasTablet);

//2.Find the first index of "mobile"(indexOf)
let firstMobile = products.indexOf("mobile");
console.log(firstMobile);

//3.Find the Last index of "mobile"(lastindexOf)
let lastMobile = products.lastIndexOf("mobile");
console.log(lastMobile);

//4.check if "camera" exists in the product list(includes)
let hasCamera = products.includes("camera");
console.log(hasCamera);

//Website Username Formatter
//Concepts: trim(),toUpperCase(),toLowerCase(),slice()

//Username Data
let username ="    ArunPandi     ";

//.1.remove extra spaces (trim)
let cleanName = username.trim();
console.log(cleanName);

//2.convert username to UpperCase (toUpperCase)
let uppername = username.trim().toUpperCase();
console.log(uppername);

//3.convert username to LowerCase (toLowerCase)
let lowername = username.trim().toLocaleLowerCase();
console.log(lowername);

//4.extract First 4 characters(slice)
let firstFour = username.trim(0).slice(0,4);
console.log(firstFour);

//Game Platform Data Processing
//Concepts: forEach(),map()

//Game Data
let games = ["Cricket","Football","Hockey","Kabaadi"];

//1.Print all games using forEach()
games.forEach(game => console.log(game));

//2.Create a new array using map()
let newGames = games.map(game => "Game :" + game);
console.log(newGames);

//student marks analyzer
//Concepts: sort(),reverse()

//Marks Data
let marks =[45,90,23,67,88,12];

//1.sort makes in ascending order(sort)
let ascending = marks.sort((a,b)=>a - b);
console.log(ascending);

//2.sort makes in decending order(sort)
let decending = marks.sort((a,b)=> b - a);
console.log(decending);

//3.reverse the marks array(reverse)
let reversed = marks.reverse();
console.log(reversed);

//salary report generator
//concepts: reduce()

//Salary Data
let salaries = [10000,20000,30000,40000];

//1.Find Total Salary using reduce()
let totalsalary = salaries.reduce((sum,salary)=>sum + salary,0);
console.log(totalsalary);

//2.Find Average Salary
let total = salaries.reduce((sum,salary)=> sum+salary,0);
let Average= total/salaries.length;
console.log(Average);

//URL processor
//concepts:split()

//URL Data
let urlData= "www-stackly-com";

//1.convert string into array using slpit()
let result=urlData.split("-");
console.log(result);

//job role modifier
//concepts:replaced(), startWith(),endWith()

//Role Data
let Role = "python developer"

//1.Replace python->javascript(replace)
let nerRole = Role.replace("python","javascript");
console.log(nerRole);

//2.check if role starts with "python"(startsWith)
let startsWith = Role.startsWith("python");
console.log(startsWith);

//3.check if role ends with "developer"(endsWith)
let endsWith = Role.endsWith("developer");
console.log(endsWith);

//Nested Array Data Cleanup
//concepts: flat()

//Data
let data =[1,2,[3,4,[5,6]]];

//1.flatten the array using flat()
let results = data.flat(2);
console.log(results);

//sports data slice
//concepts:slice()

//sports data
let sports =["Cricket","football","tennis","hockey","holf"];

//1.extract football and tennis using slice()
let result1 = sports.slice(1,3);
console.log(result1);

//2.extract first 3 sports
let result2 = sports.slice(0,3);
console.log(result2);
