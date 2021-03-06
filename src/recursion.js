/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //"bottom out" case
  if (n === 0){
    return 1;
  //"out of bounds/error" case
  } else if (n < 0) {
    return null
  //"recursive case"
  } else {
    return n * factorial(n-1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var arrayCopy = array.slice();
  if (arrayCopy.length === 0 ){
    return 0;
  } else {
    return arrayCopy.pop() + sum(arrayCopy);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0
  array.forEach(function(current){
    if (Array.isArray(current)){
      total += arraySum(current);
    } else {
      total += current
    }
  })
  return total;
};


// 4. Check if a number is even.
var isEven = function(n) {

  //adding this saves calculations. The test below went from 112 seconds to 3 seconds. 
  if (n.toString().length > 1){
    n = parseInt(n.toString().substring(-1))
  }
  
  if (n === 0) {
    return true;
  } else if (n === 1){
    return false
  } else {
    return isEven(Math.abs(n)-2)
  }
};

//testing for efficiency with large numbers
// for (var i = 0; i<20000000; i++){
//   console.log(isEven(1598));
// }

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0){
    return 0;
  } else {
    if (n>0){
      return (n-1) + sumBelow(n-1);
    } else {
      return (n+1) + sumBelow(n+1);
    }
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var arr = [];
  if (x < y-1){
    return arr.concat(x+1, range(x+1,y));
  } else if (y < x-1) {
    return arr.concat(x-1, range(x-1, y));
  }
  return arr;
};



// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){
    return 1
  } else {
    if (exp > 0){
      return base * exponent(base, exp-1)
    } else {
      return 1/ exponent(base, -exp);
    }
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //divide by two each time
  if (n === 1){
    return true
  } else if (n < 1){
    return false
  } else {
    return powerOfTwo(n/2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length>0){
    return string.slice(-1) + '' + reverse(string.slice(0, string.length-1));
  } else {
    return '';
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.split(' ').join('').toLowerCase();
  if (string.length < 2){
    return true;
  } else if (string[0] === string[string.length-1]){
    return palindrome(string.slice(1, string.length-1))
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y < 0){
    y = -y;
  }

  if (y === 0){
    return NaN;
  } 
  
  else if (x === 0){
    return 0;
  }
  
  else if (x < 0 && y > 0){
    if (x + y > 0){
      return x
    } else {
      return modulo(x+y, y)
    }
  } 

  else {
    if (x < y){
      return x
    } else {
      return modulo(x-y, y)
    }
  }
};



// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  var negative = false;

  if (x < 0 && y > 0){
    negative = true;
    x = -x;
  } else if (x > 0 && y < 0){
    negative = true;
    y = -y;
  } else if (x < 0 && y < 0){
    y = -y;
    x = -x;
  }

  if (y === 0){
    return 0;
  } 
  
  else {
    if (negative){
      return -(x + multiply(x, y-1))
    } else {
      return x + multiply(x, y-1)
    }
  }
};





// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

  if (y === 0){
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  if (x < 0 && y > 0){ 
    if (x + y > 0){
      return 0;
    } else {
      return -1 + (divide(x + y, y))
    }
  } 

  else if (x > 0 && y < 0){
    if (x + y < 0){
      return 0;
    } else {
      return -1 + (divide(x+y, y))
    }
  } 

  else if (x < 0 && y < 0){
    if (x - y > 0){
      return 0;
    } else {
      return 1 + (divide(x-y, y))
    }
  }

  else {
    if (x-y < 0){
      return 0;
    } else {
      return 1 + (divide(x-y, y));
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
  if (x < 0 || y < 0){
    return null;
  }

  if (x > y) {
    var largest = x;
    var smallest = y;
    var remainder = largest % smallest;
    if (remainder === 0){
      return y;
    } else {
      return gcd(smallest, remainder)
    }
  } 
  
  else {
    var largest = y;
    var smallest = x;
    var remainder = largest % smallest;
    if (remainder === 0){
      return smallest;
    } else {
      return gcd(smallest, remainder)
    }
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //Base case: if we have gone through each character and our strings are "empty", then they must be equal. Return true.
  if (str1.length === 0 && str2.length === 0){
    return true;
  } 
  //Recursion case: If the first characters match, we snip them off and return the function again
  else if (str1.substring(0,1) === str2.substring(0,1)){
    return compareStr(str1.substring(1,str1.length), str2.substring(1,str2.length))
  } 
  //If there is just ONE mismatch, the whole thing will be false. 
  else {
    return false;
  }
};



// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0){
    return '';
  } else {
    return [str.substring(0,1), ...createArray(str.substring(1, str.length))];
  }

};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0){
    return ''
  } else {
    return [array.pop(), ...reverseArr(array)];
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0){
    return '';
  } else {
    return [value, ...buildList(value, length-1)]
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0){
    return '';
  } else {
    var returnValue = ''
    if (n % 3 === 0){
      returnValue = returnValue + 'Fizz';
    }
    if (n % 5 === 0){
      returnValue = returnValue + 'Buzz';
    }
    if ((n % 3 !== 0) && (n % 5 !== 0)){
      returnValue = n.toString();
    }
    return [...fizzBuzz(n-1), returnValue]
  }

};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0){
    return 0;
  } else {
    frontChar = array.shift()
    if (frontChar === value){
      return 1 + countOccurrence(array, value);
    } else {
      return countOccurrence(array, value);
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  array = array.slice();
  if (array.length === 0){
    return '';
  } else {
    return [callback(array.shift()),...rMap(array, callback)];
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, targetKey) {
  //set the defualt keycount to 0
  var keycount = 0;

  //if the object that we are looking at has keys in it
  if (Object.keys(obj).length > 0){

    //look at all keys and add matching keys to keycount
    for (var key in obj){
      if (key === targetKey){
        keycount++
      }
      
      //look at the value for each key. If the value is an object, 
      //we are going to perform our recursive function on that
      //we will add whatever we matches we find to our keycount
      if (obj[key].constructor === Object){
        keycount += countKeysInObj(obj[key], targetKey)
      }
    }
  } 
  //at the very end, we will return the keycount. Inside the recursive cases
  //this keycount will add to the count of the topmost function.
  return keycount;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, targetValue) {
  //this is very similar to the previous function.
  //see that one for explanation
  var targetCount = 0

  if (Object.keys(obj).length > 0){

    for (var key in obj){
      if (obj[key] === targetValue){
        targetCount++;
      }

      if (obj[key].constructor === Object){
        targetCount+= countValuesInObj(obj[key], targetValue)
      }
    }
  }

  return targetCount;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

    //if the object we passed in has keys
    if (Object.keys(obj).length > 0){
  
      //look at each key. If the key matches the old key,
      //make a new key with our "newKey" name. Make the value of that key the value of the old key
      //finally, remove the old key. 
      for (var key in obj){
        if (key === oldKey){
          obj[newKey] = obj[key];
          delete obj[key];
        }
      }

      //ok so we'e gone through one pass and swapped the key names, now we need to look
      //at the values of those keys. If the value is an Object, we might have more swapping to do.
      //so we're going to run the function again for that individual object
      //we are going to replace the value of that object with whatever mutated object we get from
      //our recursive function call. 
      for (var key in obj){
        if (obj[key].constructor === Object){
          obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
        }
      }
    } 

    //finally, we are going to return our mutated object
    return obj;

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var array = array.slice();
  if (array.length === 0){
    return ''
  } else {
    return [array.shift().toUpperCase(), ...capitalizeWords(array)];
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var array = array.slice();
  if (array.length === 0){
    return ''
  } else {
    var firstWord = array.shift();
    var firstLetter = firstWord.substring(0,1).toUpperCase();
    var capitalizedFirstWord = firstLetter + firstWord.substring(1);
    return [capitalizedFirstWord, ...capitalizeFirst(array)];
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var total = 0;
  if (Object.keys(obj).length > 0){

    for (var key in obj){
      if (obj[key].constructor === Object){
        total += nestedEvenSum(obj[key]);
      } else if (obj[key] % 2 === 0){
        total += obj[key];
      }
    } 
  }
  return total;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var newArr = []
  array.forEach(function(element){
    if (element.constructor === Array){
      newArr.push(...flatten(element))
    } else {
      newArr.push(element);
    }
  })
  return newArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  //if the object exists, keep using that object.
  //if it doesn't exist, start with an empty object. 
  obj = obj || {};

  if (str.length === 0){
    return obj;
  }
  var arr = str.split('');
  var letter = arr.shift();


  if (obj.hasOwnProperty(letter)){
    //I had to use bracket notation here instead of dot notation since I'm using a variable instead of a string value. 
    obj[letter] +=1;
  } else {
    obj[letter] = 1;
  }

  return letterTally(arr.join(''), obj)
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  //if the next element matches this element, return recursed version of the list without the current element
  if (list.length === 1){
    return list;
  } else if (list[0] === list[1]){
    return [...compress(list.slice(1))];
  } 
  //else return the element to the array
  else {
    return [list[0],...compress(list.slice(1))];
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0){
    return '';
  } 

  else {
    array = array.slice();
    var firstElement = array.shift();
    firstElement.push(aug);
    return [firstElement, ...augmentElements(array, aug)];
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1){
    return array;
  } else if (array[0] === 0 && array[1] === 0){
    return [...minimizeZeroes(array.slice(1))];
  } else {
    return [array[0], ...minimizeZeroes(array.slice(1))];
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1){
    return [Math.abs(array[0])];
  } else {
    if (array.length % 2 === 0){
      var element = -(Math.abs(array.pop()));
    } else {
      var element = Math.abs(array.pop());
    }
    return [...alternateSign(array), element]
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0){
    return '';
  };

  var numsToWords = {
    1 : 'one',
    2 : 'two', 
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten'
  };

  var words = str.split(' ');
  var frontWord = words.shift();

  //if we are at the last word in the list, don't add a space to the end. 
  var space = ' ';
  if (words.length === 0){
    space = '';
  }

  if (!isNaN(parseInt(frontWord))){
    frontWord = numsToWords[frontWord];
  }

  return frontWord + space + numToText(words.join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  node = node || document.body;
  tag = tag.toUpperCase();

  var total = 0;
  if (node.tagName === tag){
    total++;
  }
  if (node.childNodes){
    node.childNodes.forEach(function(childNode){
      total += tagCount(tag, childNode);
    })
  }
    return total;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {

  min = min || 0;
  max = max || array.length;

  if (array.length === 1 && array[0] !== target){
    return null;
  }

  //chooses middle or rounds up
  var midpointIndex = ~~((array.length)/2);

  var firstHalf = array.slice(0,midpointIndex);
  var secondHalf = array.slice(midpointIndex);

  if (target === array[midpointIndex]){
    return ~~((min + max)/2)
    //return the index
  } else if (target < array[midpointIndex]){
    //return first half of array
    //adjust max
    max -= secondHalf.length;
    return binarySearch(firstHalf, target, min, max);
  } else if (target > array[midpointIndex]){
    min += firstHalf.length;
    return binarySearch(secondHalf, target, min, max);
  } 
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
