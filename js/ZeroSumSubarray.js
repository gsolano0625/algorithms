'use strict';

export default class ZeroSumSubarray {

  hasZeroSums (input) {

    let set = new Set();
    let sum = 0;

    let count = 0;

    // insert 0 into set to handle the case when sub-array with
    // 0 sum starts from index 0
    set.add(0);

    // traverse the given array
    for (let i = 0; i < input.length; i++) {

      // sum of elements so far
      sum += input[i];

      // if sum is seen before, we have found a sub-array with 0 sum
      if (set.has(sum)) {
        //return true;
        count++
      }

      // insert sum so far into set
      set.add(sum);
    }

    // we reach here when no sub-array with 0 sum exists
    //return false;
    return count;

  }



}
