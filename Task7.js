//1.Real-Time Digital Clock
function showTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    console.clear();
    console.log(hours + ":" + minutes + ":" + seconds);  
}
setInterval(showTime, 1000);

//2.Age Calculator
let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("Your age is "+ age);

//3.Website Loading Simulation
console.log("Website Loading...");

setTimeout(()=>{
    console.log("Website Loaded Successfully");
}, 3000);

//4.Automatic Notification System
let reminder = setInterval(()=>{
    console.log("Take a Short Break");
}, 5000);

setTimeout(()=>{
    clearInterval(reminder);
    console.log("Reminder Stopped");
},20000);

//5.Online Order Status System
console.log("Order Placed");

setTimeout(()=>{
    console.log("Order Preparing");
}, 2000);
setTimeout(()=>{
    console.log("Out for delivery");
}, 5000);
setTimeout(()=>{
    console.log("Order Delivered");
}, 8000);

//6.API Data Viewer
fetch("https://jsonplaceholder.typicode.com/todos/")
   .then(response => response.json())
   .then(data => {
    data.forEach(todo => {
        console.log(todo.title);
     });
})
   .catch(error => {
    console.log("Error:", error);
});

//7.Completed Task Filter
fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => {
        let completedTasks = data.filter(todo => todo.completed === true);
 
        completedTasks.forEach(task => {
            console.log(task.title);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
 
//8.API Error Handling
fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Server Error");
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received");
    })
    .catch(error => {
        console.log("Server Error");
    })
    .finally(() => {
        console.log("Process Completed");
    });

//9.Meeting Countdown Timer
let time = 10;
let timer = setInterval(() => {
    console.log(time);
    time--;
    if (time < 0) {
        clearInterval(timer);
        console.log("Meeting Started");
    }
}, 1000);

//10.Login Session Timeout
console.log("User Logged In");
 
setTimeout(() => {
    console.log("Session Expired. Please Login Again");
}, 10000);