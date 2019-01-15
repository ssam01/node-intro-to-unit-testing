const expect = require('chai').expect;

const fizz_buzzer = require('../fizzBuzzer.js');

//unit tests for fizzBuzzer.js
describe('fizzBuzzer', function() {
    //test the normal case
    it(`should return \`fizz-buzz\` if the input is a number divisible by 15,
       \`buzz\` if the input is a number divisible by 5,
        and \`fizz\` if the input is a number divisible by 3`, function(){
        const goodInputs = [
            {num:15, expected: 'fizz-buzz'},
            {num:50, expected: 'buzz'},
            {num:6, expected: 'fizz'}];

        goodInputs.forEach(function(input){
            const result = fizz_buzzer(input.num);
            expect(result).to.equal(input.expected);
        });
    });

    //test when an inproper input (ie, a non number) is given to the function
    it('should throw an error if the input is not a number', function() {
        const badInputs = ['', 'a'];

        badInputs.forEach(function(input){
            expect(function() {fizz_buzzer(input)}).to.throw(Error);
        });
    });


});