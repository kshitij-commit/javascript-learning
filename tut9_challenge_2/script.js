
// Coding Challenge #2 

    // Use the BMI example from Challenge #1, and the code you already wrote, and 
    // improve it. 
    // Your tasks: 
    // 1. Print a nice output to the console, saying who has the higher BMI. The message 
    // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
    // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
    // BMI (28.3) is higher than John's (23.9)!" 
    // Hint: Use an if/else statement 
    // �
    // �
    //  GOOD LUCK 
    // �

    // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
    // m tall. 
    // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
    // m tall. 

     // formula for BMI= mass/(height**2)

    // data 1
    const marksWeight=95;
    const marksHeight=1.88;

    const johnWeight=85;
    const johnHeight=1.76;

    const marksBMI=marksWeight/(marksHeight**2);
    const johnBMI=johnWeight/(johnHeight**2);

    if(marksBMI>johnBMI){
        console.log(`marks BMI ${marksBMI} is higher than john's BMI ${johnBMI}!`)
    }else if(johnBMI>marksBMI){
        console.log(`john's BMI is ${johnBMI} is higher than marks BMI ${marksBMI}!`)

    }else{
        console.log("Both have same BMI");
    }

    
