let history =[];
while(true){
    let choice= prompt(
        `SMART CONSOLE CALCULATOR
        1 Addition
        2 Subtraction
        3 Multiplication
        4 Divison
        5 Power
        6 Square
        7 Square Root
        8 Percentage
        9 Random Number
        10 View History
        0 Exit
        
        Enter your choice:`
    );
    if (choice==0) {
        alert("Calucalator Closed");
        break;
    }
    if (choice==10) {
        alert("History:\n" + history.join("\n"));
        continue;
    }
    let a = Number(prompt("Enter the First Number:"));
    let result;

    switch (choice) {
        case "1":
        let b1 = Number(prompt("Enter the Second Number"));
        result= a+b1;
        break;
        case "2":
        let b2 = Number(prompt("Enter the Second Number"));
        result= a-b2;
        break;
        case "3":
        let b3 = Number(prompt("Enter the Second Number"));
        result= a*b3;
        break;
        case "4":
        let b4 = Number(prompt("Enter the Second Number"));
        result= a/b4;
        break;
        case "5":
        let b5 = Number(prompt("Enter the Second Number"));
        result= a**b5;
        break;
        case "6":
        result=a*a;
        break;
        case "7":
        result=Math.sprt(a);
        break;
        case "8":
        let b8=Number(prompt("Enter Percentage Value:"));
        result=(a*b8)/100;
        break;
        case "9":
        result=Math.floor(Math.random()*a);
        break;
    
        default:
        alert("Invalid Option");
        continue;
    }
    alert("Result: " + result);
    history.push("Result = " + result);
}