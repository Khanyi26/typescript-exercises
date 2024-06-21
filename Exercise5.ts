//Basic Calculator
//Create a Calculator class with methods for addition, subtraction, multiplication, and division.

class Calculator {
    
    // Method to add two values
    add(a: number, b: number): number {
        this.validNumbers(a,b);
        return a + b;
    }

    // Method to substract two values 
    substract(a: number, b: number): number {
        this.validNumbers(a,b);
        return a - b;
    }

    // Method to divide two values 
    divide(a: number, b: number): number {
        this.validNumbers(a,b);
        if (b === 0) {
            throw new Error("Division by zero is invalid!");            
        }
        return a / b;
    }

    // Method to validate that inputs are numbers.
    private validNumbers(...args: number[]): void{
        for (const num of args) {
            if(typeof num !== 'number' || isNaN(num)){
                throw new Error("Invalid input: All inputs must be valid numbers. Thank you!!");
                
            }
            
        }
    }     
}