'use strict';

const multiBracketValidation = require('../multi-bracket-validation/multi-bracket-validation.js')

it('should return false if input is empty (edge case)', ()=>{
    expect(multiBracketValidation('')).toBe(false);
})

it('should return false if input not balanced(expected failure)', ()=>{
    expect(multiBracketValidation('{)')).toBe(false);
})

it('should return true if input is balanced(happy path)', ()=>{
    expect(multiBracketValidation('({})')).toBe(true);
})