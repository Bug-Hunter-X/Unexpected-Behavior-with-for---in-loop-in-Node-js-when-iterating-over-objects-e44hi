# Node.js for...in Loop Bug
This repository demonstrates a potential issue when using the `for...in` loop to iterate over objects in Node.js, specifically when dealing with prototype inheritance and enumerable properties.

## Bug Description
The `for...in` loop iterates over both the object's own properties and those inherited from its prototype chain.  If the prototype chain contains enumerable properties, these will also be included in the iteration, leading to unexpected behavior if you only intend to iterate over the object's own properties.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run the `bug.js` file using Node.js.

## Solution
Use `hasOwnProperty()` within the `for...in` loop to check if the property belongs to the object itself, thus preventing iteration over inherited properties.  Alternatively, consider using `Object.keys()` or `Object.entries()` methods for more predictable behavior.
