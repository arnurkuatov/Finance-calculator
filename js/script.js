
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money,
    date;
startBtn.addEventListener('click', function(){
    
    date = prompt("Enter date in formate YYYY-MM-DD", "");
    money = +prompt("Your budget on month?", "");


    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Your budget on month?", "");
    }
    appData.budget = money;
    appData.timeDate = date;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(date)).getFullYear();
    monthValue.value = new Date(Date.parse(date)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(date)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done!");
            appData.expenses[a] = b;
            sum += +b;
        }
        else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

    if(appData.budget != undefined){
        appData.moneyPerday = (appData.budget /30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerday;

    if(appData.moneyPerday < 100){
        levelValue.textContent = "Минимальный уровень достатка!";
    }else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000){
        levelValue.textContent = "Средний уровень достатка!";
    }else if(appData.moneyPerday > 2000){
        levelValue.textContent = "Высокий уровень достатка!";
     } else {
            levelValue.textContent = "Произошла Ошибка!";
        }
    }else {
        dayBudgetValue.textContent = "Произошла Ошибка!";
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = percentValue.value;

            appData.monthIncome = sum/100/12*percent;        
            appData.yearIncome = sum/100*percent;
            
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = percentValue.value;

            appData.monthIncome = sum/100/12*percent;        
            appData.yearIncome = sum/100*percent;
            
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


