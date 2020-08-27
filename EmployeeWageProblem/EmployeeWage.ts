console.log('Welcome to Employee Wage Simulator');

//CONSTANTS
const IS_EMPLOYEE_PRESENT = 1;

let employeeAttendance = Math.floor(Math.random() * 10) % 2;

employeeAttendance === IS_EMPLOYEE_PRESENT ? console.log("Employee Present") : console.log("Employee Absent");