/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


let inputName = prompt("Bitte geben Sie Ihren Namen ein");
let inputAge = parseInt(prompt("Bitte geben Sie Ihr alter ein"));

let drink;

const cond = true;
switch (cond) {
    case (inputAge<=5):
        drink = "Milch";
        break;

    case (inputAge<=12):
        drink = "Saft";
        break;

        case (inputAge<=17):
        drink = "Cola";
        break;

    case (inputAge>=18):
        drink = "Wein";
        break;
    default:
        drink = "Tee";
        break;
}
console.log(inputName+" trinkt "+drink)
