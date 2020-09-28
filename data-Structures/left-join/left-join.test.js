'use strict';

const leftJoin = require('./left-join');

it('“Happy Path” ', () => {
let obj1= {'fond':'enamored',
    'wrath': 'enger',
    'foo': 'bar'}

let obj2= {'fond':'enamored',
    'wrath': 'enger',
    }

     expect(leftJoin(obj1, obj2)).toStrictEqual({ fond: [ 'enamored', 'enamored' ],
     wrath: [ 'enger', 'enger' ],
     foo: [ 'bar', null ]})
 });
 
 
 it('Edge case', () => {
    let obj1= {'fond':'enamored',
    'wrath': 'enger',
    }

    let obj2= {'fond':'enamored',
    'wrath': 'enger',
    }
    expect(leftJoin(obj1, obj2)).toStrictEqual({ fond: [ 'enamored', 'enamored' ],
    wrath: [ 'enger', 'enger' ],})
 });

