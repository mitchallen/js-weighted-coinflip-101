// Author: Mitch Allen
// File: test-weighted-coinflip.js

import {weightedCoinFlip} from './weighted-coinflip.js';

// define test function for weightedCoinFlip()
function testWeightedCoinFlip() {
    // define the number of weighted coin flips to generate
    const LIMIT = 100;

    // define the weight or chance of true being returned
    const WEIGHT = 0.1;

    // create an array filled with weighted coin flip results
    let arr = Array.from({length: LIMIT}, () => weightedCoinFlip( WEIGHT ));

    // log the generated weighted coin flips
    console.log(arr);

    // count the occurences of 1s and 0s
    let occurrences = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    // log a summary of the occurences
    console.log(occurrences);
}

// call test function for weightedCoinFlip()
testWeightedCoinFlip();
