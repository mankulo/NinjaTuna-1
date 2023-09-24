// Function  calculates net salary
function calculateNetSalary(basicSalary, benefits) {
    // Actual tax rates from KRA
    const taxRate = 0.3;
    const nhifDeduction = 1700; // Actual NHIF deduction
    const nssfDeductionRate = 0.06; // Actual NSSF deduction rate

    
    const grossSalary = basicSalary + benefits;// Calculate gross salary

    
    const payee = grossSalary * taxRate;// Calculate PAYEE (tax)

    
    const nssfDeduction = grossSalary * nssfDeductionRate;// Calculate NSSF Deduction

    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);// Calculate net salary

    
    return {//returns results
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}

// Example usage
const basicSalary = 60000;
const benefits = 10000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Display results
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYEE (Tax):", salaryDetails.payee);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Net Salary:", salaryDetails.netSalary);
