console.log('Welcome to Employee Wage Simulator');
//CONSTANTS
const IS_EMPLOYEE_PRESENT = 1;
const EMPLOYEE_RATE_PER_HR = 20;
const EMPLOYEE_HRS = 8;
var salary;
let employeeAttendance = Math.floor(Math.random() * 10) % 2;
employeeAttendance === IS_EMPLOYEE_PRESENT ? salary = (EMPLOYEE_HRS * EMPLOYEE_RATE_PER_HR) : salary = 0;
console.log('Employee Daily Wage is ' + salary + ' Rs');
//# sourceMappingURL=EmployeeWage.js.map