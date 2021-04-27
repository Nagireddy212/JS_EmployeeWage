// UC1
{
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
} else
{
    console.log("Employee is Present");
}
}

//UC5
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();


function getWorkingHours(empCheck)
{
    switch (empCheck)
    {
        case IS_PART_TIME:
            console.log("Employee is Present for Part Time");
             return PART_TIME_HOURS;
             
        case IS_FULL_TIME:
            console.log("Employee is Present for Full Time");   
             return FULL_TIME_HOURS;
         default:
            console.log("Employee is Absent");
             return 0;
    
    }
}
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
function calcDailyWage(empHrs) 
{
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    
    let empCheck = Math.floor(Math.round() * 10) % 3;
       totalEmpHrs += getWorkingHours(empCheck);
       totalEmpHrs += empHrs;
       empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 -Total Days: " + totalWorkingDays + " Total Hrs:"+  totalEmpHrs + "   Emp Wage: " + empWage);