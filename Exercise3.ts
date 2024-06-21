//Functions
//1. Write a function that takes two numbers as parameters and returns their sum
function addNumbers(a: number, b: number): number {
    return a + b;    
}

//2. Write a function that returns a fixed number
function fixedNumber(): number {
    return 96;    
}

//3. Write a function that takes a string and an optional boolean parameter. If the booleanis true, return the string in uppercase; otherwise, return it in lowercase.
function takeString(surname: string, upperCase?:Boolean): string {
    return upperCase ? surname.toUpperCase() : surname.toLowerCase();    
}