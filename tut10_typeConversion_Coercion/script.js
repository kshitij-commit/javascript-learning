
//  type Conversion 

const inputYear='1991';

console.log(inputYear+18); // concatenation because inputYear is string
    // expected output: 199118

const year='1992';
console.log(Number(year)+18); // convert string to number
    // expected output: 2010


console.log(Number('Jonas')); // convert string to number
    // expected output: NaN (not a number) or invalid number  because 'Jonas' cannot be converted to number

console.log(typeof NaN); // type of NaN is number
    // expected output: number why? because NaN is a special numeric value that represents an undefined or unrepresentable value in mathematics.
    // full form: Not-a-Number so why its typeof is number? because its used to indicate an error in numeric calculations.

console.log(String(23),23); // convert number to string
    // expected output: '23' 23
    console.log( Number('22'), typeof(String(22)) ); // expected output: 22 'string'   

// type coercion

console.log('10'-'4'); // expected output: 6  because - operator converts string to number
console.log('10'+'4'-4); // expected output: 104-4=100 because + operator concatenates string and - operator converts string to number
console.log('10'*'2'); // expected output: 20  because * operator converts string to number
console.log('10'/'2'); // expected output: 5  because / operator converts string to number  
console.log('23'>'18'); // expected output: true because > operator converts string to number

let n='1'+1; // '11' because + operator concatenates string
n-=1; // 11-1=10 because - operator converts string to number
console.log(`n:${n}`); // expected output: 10

console.log(2+3+'5'+1-4-2); // expected output: 545 because 2+3=5 then 5+'5'='55' then '55'+1='551' then '551'-4=547 then 547-2=545