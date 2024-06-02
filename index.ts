import inquirer from "inquirer";

const currency :any = {
    USD : 1, //BASE CURRENCY 
    EUR : 0.92,
    GBP : 0.78,
    CNY : 7,
    PKR : 278,

}
let userAnswer = await inquirer.prompt(
    [
        {
            name : "from",
            message : "Currency you want to convert from?",
            type : "list",
            choices : ["USD", "EUR", "GBP", "CNY", "PKR"]
        },
        {
            name : "to",
            message : "Currency you want to convert into?",
            type : "list",
            choices : ["USD", "EUR", "GBP", "CNY", "PKR"]
        },
        {
            name : "amount",
            message : "Enter your amount?",
            type : "number"
        }
    ]
)

let answerFrom = currency[userAnswer.from]
let answerTo = currency[userAnswer.to]
let answerAmount = userAnswer.amount
let baseCurrency = answerAmount / answerFrom
let convertedAmount = baseCurrency * answerTo

console.log(convertedAmount);
