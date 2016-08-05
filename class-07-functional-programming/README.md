# Assignment for Class 7 - Functional Programming

## Daily Plan
1. Code Review
2. Functional Programming Overview
3. Scope / Modular IIFE Structure
4. Git 301
  - Merge Conflicts

Step into the declarative paradigm.

Pair up to work on the MVC blog, then take what you learn to your portfolio site.

# Functional Programming

## keywords
- functional!!
  - shift the focus of your approach from objects to functions
- abstraction
  - hide the gory details of HOW to do an operation
- imperative vs. declarative
  - saying all the steps vs. saying what you want
- higher-order functions
  - a function that either takes another function as an argument or returns a function
- side effects
  - mutate some data or state outside the function
- pure functions
  - a function that doesn't cause ANY side effects
  - given the same input, will ALWAYS return the same result
- immutability
- idempotence
  - an operation that gives the same output no matter how many times you do it
  - examples: crosswalk button, read a file, get an object property, HTTP GET, scott's laundry

## functional array methods
- map
- filter
- reduce
- concat

## imperative vs. declarative

```javascript
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//task: double the elements in the array

//imperative approach

function doubler(arr) {
  var outputArray = [];

  for (var i = 0; i < arr.length; i++) {
    outputArray[i] = arr[i] * 2;
  }

  return outputArray;
}

var doubles = doubler(nums);


//use a higher-order function

function double(num) {
  return num * 2;
}

var doubles = [];

nums.forEach(function(num) {
  doubles.push(double(num));
});

//use map

var doubles = nums.map(function(num) {
  return num * 2;
})

//OR

var doubles = nums.map(function(num) {
  return double(num);
});
```

```javascript
//get the even numbers smaller than 5

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function smallEvens(arr) {
  var output = [];

  arr.forEach(function(ele) {
    if (ele < 5 && ele % 2 === 0) {
      output.push(ele);
    }
  })

  return output;
}

var se = smallEvens(nums);

//use filter

```

```javascript
//use filter to de-dupe an array

var nums = [1, 1, 2, 3, 3, 4];
var deduped =
  nums.filter(function(ele, ind, arr) {
    return arr.indexOf(ele) === ind;
  });
```

```javascript
//use reduce to sum an array
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = nums.reduce(function(a,b) {
  return a + b;
}, 0);
```
