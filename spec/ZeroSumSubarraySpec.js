'use strict';

import ZeroSumSubarray from '../js/ZeroSumSubarray.js';


describe('ZeroSumSubarray', () => {
  let zeroSum;

  beforeEach(() => {
    zeroSum = new ZeroSumSubarray();
  });

  it ('Should return count > 0 when there is zero sums', () => {
    console.log(`=== array [ 4, -6, 3, -1, 4, 2, 7 ] has ${zeroSum.hasZeroSums([ 4, -6, 3, -1, 4, 2, 7 ])} zero sums`);
    expect(zeroSum.hasZeroSums([ 4, -6, 3, -1, 4, 2, 7 ])).toEqual(2);

    console.log(`=== array [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ] has ${zeroSum.hasZeroSums([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ])} zero sums`);
    expect(zeroSum.hasZeroSums([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ])).toEqual(5);

    console.log(`=== array [ 0, 3, 4, 3, 1, ] has ${zeroSum.hasZeroSums([ 0, 3, 4, 3, 1])} zero sums`);
    expect(zeroSum.hasZeroSums([ 0, 3, 4, 3, 1 ])).toEqual(1);

    console.log(`=== array [ 0 ] has ${zeroSum.hasZeroSums([ 0 ])} zero sums`);
    expect(zeroSum.hasZeroSums([ 0 ])).toEqual(1);

  });

  it ('Should return 0 when there is zero sums', () => {
    console.log(`=== array [ 3, 4, 3, 1, ] has ${zeroSum.hasZeroSums([ 3, 4, 3, 1])} zero sums`);
    expect(zeroSum.hasZeroSums([ 3, 4, 3, 1])).toEqual(0);
  });

})