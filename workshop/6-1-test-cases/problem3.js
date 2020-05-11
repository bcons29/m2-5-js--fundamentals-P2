// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  let total = 0;
  if (input.length != 2) {
    return undefined;
  }
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] == "number") {
      total = total + input[i];
    } else {
      return undefined;
    }
  }

  return total;
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([3, 5, 8, 9]), undefined);
expect(sumDigits([2, "a"]), undefined);
expect(sumDigits(["batman", 6, 72]), undefined);
expect(sumDigits(["6", 5, 9]), undefined);
expect(sumDigits(["thanos", 5, "ironman"]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
