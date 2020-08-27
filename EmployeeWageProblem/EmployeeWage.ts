console.log('Welcome to Employee Wage Simulator');

//CONSTANTS
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMPLOYEE_RATE_PER_HOUR = 20;

//VARIABLES
var salary;
var employeeHpurs;
let employeeCheck = Math.round(Math.random() * 10) % 3;
console.log(employeeCheck);


switch (employeeCheck) {
    case IS_FULL_TIME:
        employeeHpurs = 8;
        break;
    case IS_PART_TIME:
        employeeHpurs = 4;
        break;
    default:
        employeeHpurs = 0;
        break;
}

salary = employeeHpurs * EMPLOYEE_RATE_PER_HOUR;
console.log('Employee Daily Wage is ' + salary + ' Rs');