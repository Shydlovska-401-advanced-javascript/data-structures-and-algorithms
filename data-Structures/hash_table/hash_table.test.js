'use strict';
const Hashtable = require('./hash_table.js');

it('should get correct value no collisions', () => {
  const table = new Hashtable();

  table.add('apple','pippin');

  const value = table.get('apple');

  expect(value).toBe('pippin');
});

it('should get correct values with collisions', () => {
  const table = new Hashtable();

  const appleHash = table.hash('apple');
  const papelHash = table.hash('papel');

  expect(appleHash).toBe(papelHash);

  table.add('apple','pippin');
  table.add('papel', 'paper in spanish')

  const appleValue = table.get('apple');
  const papelValue = table.get('papel');

  expect(appleValue).toBe('pippin');
  expect(papelValue).toBe('paper in spanish');

  
});

it('returns null for a key that does not exist in the hashtable', () => {
    const table = new Hashtable();
    const appleValue = table.get('apple');
    expect(appleValue).toBe(null); 
  });

it('hash a key to an in-range value', () => {
const table = new Hashtable();
  const appleHash = table.hash('apple');
  const apapelHash = table.hash('papel')
expect(appleHash).toBeLessThanOrEqual(1023); 
expect(apapelHash).toBeGreaterThan(0); 
});