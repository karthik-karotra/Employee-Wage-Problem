console.log('Welcome to Employee Wage Simulator');

//CONSTANTS
const IS_EMPLOYEE_PRESENT = 1;
const EMPLOYEE_RATE_PER_HOUR = 20;
const EMPLOYEE_HOURS = 8;

//VARIABLES
var salary;
let employeeAttendance = Math.floor(Math.random() * 10) % 2;

employeeAttendance === IS_EMPLOYEE_PRESENT ? salary = (EMPLOYEE_HOURS * EMPLOYEE_RATE_PER_HOUR) : salary = 0;
console.log('Employee Daily Wage is ' + salary + ' Rs');