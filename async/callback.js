'use strict'

// JavaScript is synchronous.
// Execute the code block by orger after hoistiong.
// hoistiong: var, function declartion
console.log('1');
setTimeout(function() {
    console.log('2');}, 1000);
console.log('3');