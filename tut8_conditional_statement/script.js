

const age = 15;

const isOldEnough = age >= 18;
if (isOldEnough){
    console.log("sarah can start driving license 🚗");
}else{
    const yearsLeft=18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
    
}

// Assignment of conditional statement
// 1.
    //     Even or odd
    // Task: Print "Even" if n is even, otherwise "Odd".
    // Hint: Use n % 2 === 0.
    // Example: n = 7 → Output: Odd

    const n=8;
    if(n%2!=0){
        console.log(`Number ${n} is : odd`)
    }else{
        console.log(`Number ${n} is : even`);
    }

    2.
// Is a multiple of 3 and 5
// Task: Print "FizzBuzz" if num divisible by both 3 and 5, "Fizz" if only by 3, "Buzz" if only by 5, else the number.
// Hint: Check divisible by 15 first.
// Example: num = 15 → Output: FizzBuzz

const num=15;
if (num%3==0 && num%5==0){
    console.log(`${num}:FizzBuzz`);
}else if(numnum%3==0){
    console.log(`${num}: Fizz`);
}else{
    console.log(`Buzz`);
}