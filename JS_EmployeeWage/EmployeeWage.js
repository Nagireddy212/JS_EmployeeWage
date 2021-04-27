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

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HRS_IN_MONTH = 100;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function sum(dailyWage) {
    totEmpWage += dailyWage;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();
let totEmpWage = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empWageArray.push(calculateWage(empHrs));
}

//UC 7A - Calc total wage using Array forEach traversal or reduce method
empWageArray.forEach(sum);
console.log("UC7A - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage += dailyWage;
}
console.log("UC7A - Emp Wage with reduce : " + empWageArray.reduce(totalWages, 0))

//UC 7B - Show the day along with daily wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empWageArray.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show Days when Full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance When Full Time Wage was earned using find function
function findFUllTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage earned on Day : "+mapDayWithWageArr.find(findFUllTimeWage));

//UC 7E - Check if every element of full time is truely holding full time wage 
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E - Check all elements have full time wage : "+fullDayWageArr.every(isAllFullTimeWage));

//UC 7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
   return dailyWage.includes("80");
}
console.log("UC7F - Check if any part time wage : "+fullDayWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - Number of Days Emp Worked : "+empWageArray.reduce(totalDaysWorked, 0));

//UC 8 - Calculate employee wage with employee wage map
console.log(empDailyWageMap);
console.log("UC8 - Emp Wage Map totalHrs : "+Array.from(empDailyWageMap.values()).reduce(totalWages, 0));