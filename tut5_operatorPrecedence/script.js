
// example of operator precedence
console.log("3 + 4 * 5:",3 + 4 * 5); // multiplication has higher precedence than addition

console.log("(3 + 4) * 5:",(3 + 4) * 5); // parentheses change the precedence

let x=10 + 5 * 2 - 8 / 4; // multiplication and division have higher precedence than addition and subtraction
console.log("x:",x); // expected output: 10 + 10 - 2 = 18


x=10 + (5 * 2) - (8 / 4); // parentheses explicitly define the order of operations
console.log("x with parentheses:",x); // expected output: 10 + 10 - 2 = 18

x=(10 + 5) * (2 - 8) / 4; // parentheses change the order of operations
console.log("x with different parentheses:",x); // expected output: (15 * -6) / 4 = -22.5   

// complex expression
x=5 + 3 * (10 - 4) / 2 ** 2; // exponentiation has higher precedence than multiplication and division
console.log("x complex expression:",x); // expected output: 5 + 3 * 6 / 4 = 5 + 4.5 = 9.5