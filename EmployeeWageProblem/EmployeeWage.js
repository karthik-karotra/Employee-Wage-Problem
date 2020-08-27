console.log('Welcome to Employee Wage Simulator');
//CONSTANTS
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMPLOYEE_RATE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
//VARIABLES
var salary;
var employeeHours;
let totalSalary = 0;
for (let day = 1; day <= NUMBER_OF_WORKING_DAYS; day++) {
    let employeeCheck = Math.round(Math.random() * 10) % 3;
    switch (employeeCheck) {
        case IS_FULL_TIME:
            employeeHours = 8;
            break;
        case IS_PART_TIME:
            employeeHours = 4;
            break;
        default:
            employeeHours = 0;
            break;
    }
    salary = employeeHours * EMPLOYEE_RATE_PER_HOUR;
    totalSalary += salary;
}
console.log('Employee wages for a month is ' + totalSalary + ' Rs');
//# sourceMappingURL=EmployeeWage.js.map