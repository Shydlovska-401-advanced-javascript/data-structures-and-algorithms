'use strict';

const repeatedWord = require('./repead_word');


it('happy path', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who...')). toBe('a')
   
});

it('edge case', () => {
    expect(repeatedWord('')). toBe('Empty')
});

it('edge caseExpected failure ---> if string contains only one word', () => {
    expect(repeatedWord('Hello')). toBe('no any repeated words')
   
});