import readline from 'readline';
import fs from 'fs';
import { add, div, mult, sub } from './lib/Math';

const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readl.question('Enter your first number: ', (num1: string) => {
  readl.question('Enter your second number: ', (num2: string) => {
    readl.question('Enter operation (add, sub, mult, div): ', (op: string) => {

      const a = parseInt(num1);
      const b = parseInt(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input.");
        readl.close();
        return;
      }

      let result: number;

      switch (op.toLowerCase()) {
        case 'add':
          result = add(a, b);
          break;
        case 'sub':
          result = sub(a, b);
          break;
        case 'mult':
          result = mult(a, b);
          break;
        case 'div':
          if (b === 0) {
            console.log('Division by zero is not allowed.');
            readl.close();
            return;
          }
          result = div(a, b);
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
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, 'operation,num1,num2,result\n');
      }

      // Append the result
      fs.appendFile(filePath, csvLine, (err) => {
        if (err) {
          console.error('Error writing to CSV:', err);
        } else {
          console.log('Result saved to results.csv');
        }
        readl.close();
      });
    });
  });
});
