
// Basic Operators﻿
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const country='India';
const population=1400000000; // 1.4 billion
const firstHalfPopulation=population/2;
console.log("first half:",firstHalfPopulation);

const secondHalfPopulation=population-firstHalfPopulation;
console.log("second half:",secondHalfPopulation);

let increasedPopulation=population+1;
console.log("increased population:",increasedPopulation);


const FindlandPopulation=6000000; // 6 million
console.log("Does India has more population than Finland?",population>FindlandPopulation);

const avgCountryPopulation=33000000; // 33 million
console.log("Does india has less people than the avg. country?",population<avgCountryPopulation);

let description=country+" is in Asia, and its "+population+" people speak hindi.";
console.log(description);

