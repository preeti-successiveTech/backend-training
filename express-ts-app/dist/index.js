"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const Math_1 = require("./lib/Math");
const readl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
readl.question('Enter your first number: ', (num1) => {
    readl.question('Enter your second number: ', (num2) => {
        readl.question('Enter operation (add, sub, mult, div): ', (op) => {
            const a = parseInt(num1);
            const b = parseInt(num2);
            if (isNaN(a) || isNaN(b)) {
                console.log("Invalid input.");
                readl.close();
                return;
            }
            let result;
            switch (op.toLowerCase()) {
                case 'add':
                    result = (0, Math_1.add)(a, b);
                    break;
                case 'sub':
                    result = (0, Math_1.sub)(a, b);
                    break;
                case 'mult':
                    result = (0, Math_1.mult)(a, b);
                    break;
                case 'div':
                    if (b === 0) {
                        console.log('Division by zero is not allowed.');
                        readl.close();
                        return;
                    }
                    result = (0, Math_1.div)(a, b);
                    break;
                default:
                    console.log('Unknown operation.');
                    readl.close();
                    return;
            }
            console.log(`Result of ${op}(${a}, ${b}) = ${result}`);
            // Prepare CSV content
            const filePath = './results.csv';
            const csvLine = `${op},${a},${b},${result}\n`;
            // Check if the file exists — if not, write headers first
            if (!fs_1.default.existsSync(filePath)) {
                fs_1.default.writeFileSync(filePath, 'operation,num1,num2,result\n');
            }
            // Append the result
            fs_1.default.appendFile(filePath, csvLine, (err) => {
                if (err) {
                    console.error('Error writing to CSV:', err);
                }
                else {
                    console.log('Result saved to results.csv');
                }
                readl.close();
            });
        });
    });
});
