// Payroll Processor 

//Step 1: Create the array of employees

const employees = [
    { name: "Austin", hoursWorked: 40, hourlyRate: 25 },
    { name: "Brandon", hoursWorked: 28, hourlyRate: 15 },
    { name: "Camila", hoursWorked: 42, hourlyRate: 18 },
    { name: "Diana", hoursWorked: 47, hourlyRate: 22 }
    ]; 

//Step 2: Calculating Base Pay

function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

//Step 2.5: Quick test of calculateBasePay function

console.log(calculateBasePay (25, 40)); // Expected output: 1000
console.log(calculateBasePay (15, 28)); // Expected output: 420

//Step 3: Calculating Overtime Pay

function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(hours - 40, 0);
    return overtimeHours * rate * 1.5;
}

//Step 3.5: Quick test of calculateOvertimePay function

console.log(calculateOvertimePay(25, 40)); // Expected output: 0
console.log(calculateOvertimePay(15, 28)); // Expected output: 0
console.log(calculateOvertimePay(18, 42)); // Expected output: 54

//Step 4: Calculating Pay After Taxes

function calculateTaxes(grossPay) {
    return grossPay * 0.85; // deducting 15% tax
}

//Step 4.5: Quick test of calculateTaxes function

console.log(calculateTaxes(1000)); // Expected output: 850
console.log(calculateTaxes(540)); // Expected output: 459

//Step 5: Calculating Total Pay

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
    }
    
//Step 5.5: Quick test of processPayroll function

console.log(processPayroll(employees[0])); 
// Expected output: { name: 'Austin', basePay: '1000.00', overtimePay: '0.00', grossPay: '1000.00', netPay: '850.00' }


//Step 6: Processing Payroll for All Employees

for (const employee of employees) {
    const payroll = processPayroll(employee);
    console.log(payroll);
}
