# JS Interview Questions

* What is JS used for?
* Create a Hello World Program
  * Sample Answer: 
  ```js
  console.log('Hello World');
  ```
* Create  "FizzBuzz" Program, create a for loop that iterates through 100 numbers, and logs "fizz" if the number is divisible by 3, logs "buzz" if the number is divisible by 5, logs "FizzBuzz" if the number is divisible by 3 and 5, and logs the number if nothing applies.
  * Sample Answer:
  ```js
  for(var i = 0; i <= 100; i++) {
    var f = i % 3 == 0, b = i % 5 == 0, fb = f && b
    console.log(f ? "Fizz" : b ? "Buzz" : fb ? "FizzBuzz" : i)
  }
  ```
* What is an event?
* What is an object?
* How do you use `this`?
