'use strict';

import ZeroSumSubarray from './js/ZeroSumSubarray.js';

window.zeroSum = new ZeroSumSubarray();

console.log(`=== array [ 4, -6, 3, -1, 4, 2, 7 ] has ${zeroSum.hasZeroSums([ 4, -6, 3, -1, 4, 2, 7 ])} zero sums`);
console.log(`=== array [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2] has ${zeroSum.hasZeroSums([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2])} zero sums`);
console.log(`=== array [ 3, 4, 3, 1, ] has ${zeroSum.hasZeroSums([ 3, 4, 3, 1])} zero sums`);

