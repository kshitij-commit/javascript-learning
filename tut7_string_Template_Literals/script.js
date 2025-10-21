
//string in javascript

const firstName='Jonas';
const job='teacher';
const birthYear=1991;
const year =2037;

// old way of string concatenation
const jonas= "I'm "+ firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!'; 

console.log(jonas);

// new way using template literals (template strings)
    // using backticks = ` `
const jonasNew=`I'm ${firstName} a ${year-birthYear} years old ${job}!`;
console.log(jonasNew)



// old way of multiple lines string
console.log('string with \n\
    multiple \n\
    line');


// new way of multiple lines string using "template literals"
    // we can also use backticks doe normal strings 
console.log(`String with
multiple
lines`); 