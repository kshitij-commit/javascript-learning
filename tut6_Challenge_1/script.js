// Coding Challenge #1 


    // Mark and John are trying to compare their BMI (Body Mass Index), which is 
    // calculated using the formula: 
    // BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
    // and height in meter). 
    // Your tasks: 
    // 1. Store Mark's and John's mass and height in variables 
    // 2. Calculate both their BMIs using the formula (you can even implement both 
    // versions) 
    // 3. Create a Boolean variable 'markHigherBMI' containing information about 
    // whether Mark has a higher BMI than John. 
    // Test data: 
    // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
    // m tall. 
    // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
    // m tall. 
    // GOOD LUCK 
    // �

// data 1

    let marksWeight=78; // kg
    let marksHeight=1.69; // meter

    let johnWeight=92; // kg
    let johnHeight=1.95; // meter

    let marksBMI=marksWeight/(marksHeight**2);
    console.log("Marks BMI:",marksBMI);

    let johnBMI=johnWeight/(johnHeight**2);
    console.log("Johns BMI:",johnBMI);

    let markHeigherBMI=marksBMI>johnBMI;
    console.log("Is Mark's BMI higher than John's?",markHeigherBMI);

// data 2

    marksWeight=95; // kg
    marksHeight=1.88; // meter

    johnWeight=85; // kg
    johnHeight=1.76; // meter

    marksBMI=marksWeight/(marksHeight*marksHeight);
    console.log("Marks BMI:",marksBMI);

    johnBMI=johnWeight/johnHeight*johnHeight;
    console.log("Johns BMI:",johnBMI);


    markHeigherBMI=marksBMI>johnBMI;
    console.log("Is Mark's BMI higher than John's?",markHeigherBMI);