 'use strict';

 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
 let tips = []
 let totals = []

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcTotal(bill, tip) {
    return bill + tip;
}

tips = bills.map(calcTip);
totals = bills.map((bill , index)=> calcTotal(bill, tips[index]))

console.log(bills)
console.log(tips)
console.log(totals)