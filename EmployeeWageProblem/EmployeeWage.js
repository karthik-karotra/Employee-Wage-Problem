console.log('Welcome to Employee Wage Simulator');
//CONSTANTS
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMPLOYEE_RATE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAXIMUM_HOURS_IN_MONTH = 100;
//VARIABLES
var salary;
var employeeHours;
var dailyHours;
var array;
let totalSalary = 0;
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let workingHours = (employeeCheck) => {
    switch (employeeCheck) {
        case IS_FULL_TIME:
            employeeHours = 8;
            break;
        case IS_PART_TIME:
            employeeHours = 4;
            break;
        default:
            employeeHours = 0;
    }
};
let dailyWage = (workHours) => {
    let dailyWages = workHours * EMPLOYEE_RATE_PER_HOUR;
    console.log("Daily Wage : " + dailyWages);
};
while (totalEmployeeHours < MAXIMUM_HOURS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    workingHours(Math.round(Math.random() * 10) % 3);
    totalEmployeeHours += employeeHours;
    var empDailyWage = [totalEmployeeHours];
    dailyWage(employeeHours);
}
totalSalary = totalEmployeeHours * EMPLOYEE_RATE_PER_HOUR;
console.log('Employee wages for a month is ' + totalSalary + ' Rs');
//# sourceMappingURL=EmployeeWage.js.map