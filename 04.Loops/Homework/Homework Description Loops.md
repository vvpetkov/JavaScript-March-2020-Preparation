### Problem 1. Numbers from 1 to N

Write a program that reads a positive integer `n` and prints all the numbers from `1 to n`, on a single line, separated by a space.



##### Examples:

| n    | output    |
| ---- | --------- |
| 3    | 1 2 3     |
| 5    | 1 2 3 4 5 |

------





### Problem 2. Numbers Not Divisible by 3 and 7

Write a program that reads a positive integer `n` and prints all the numbers from `1` to `n` not divisible by `3` or `7`, on a single line, separated by a space.



##### Examples:

| n    | output       |
| ---- | ------------ |
| 3    | 1 2          |
| 10   | 1 2 4 5 8 10 |

------





### Problem 3. Min, Max, Sum and Average of N Numbers

Write a program that reads a sequence of `n` numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point). * The input starts by the number `n` (alone in a line) followed by `n` lines, each holding an number. * The output is like in the examples below.



##### Examples:

| n       | output                              |
| ------- | ----------------------------------- |
| 3 2 5 1 | min = 1 max = 5 sum = 11 avg = 2.75 |



| n      | output                              |
| ------ | ----------------------------------- |
| 2 -1 4 | min = -1 max = 4 sum = 5 avg = 1.67 |

------





### Problem 4. Print a Deck of 52 Cards

Write a program that generates and prints all possible cards from a [standard deck of 52 cards](http://en.wikipedia.org/wiki/Standard_52-card_deck) (without the jokers). * The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds). * The card faces should start from 2 to A. * Print each card face in its four possible suits: clubs, diamonds, hearts and spades. * Use 2 nested for-loops and a switch-case statement.

*Note: You may use the suit symbols instead of text.*



##### Examples:

```
2 of spades, 2 of clubs, 2 of hearts, 2 of diamonds
3 of spades, 3 of clubs, 3 of hearts, 3 of diamonds
…  
K of spades, K of clubs, K of hearts, K of diamonds
A of spades, A of clubs, A of hearts, A of diamonds
```

------





### Problem 5. Calculate 1 + 1!/X + 2!/X^2 + … + N!/X^N

Write a program that, for a given two integer numbers `n` and `x`, calculates the sum `S = 1 + 1!/x + 2!/x2 + … + n!/x^n`. * Use only one loop. Print the result with `5` digits after the decimal point.



##### Examples:

| n    | x    | S       |
| ---- | ---- | ------- |
| 3    | 2    | 2.75000 |
| 4    | 3    | 2.07407 |
| 5    | -4   | 0.75781 |

------





### Problem 6. Calculate N! / K!

Write a program that calculates `n! / k!` for given `n` and `k` (1 < k < n < 100). * Use only one loop.



##### Examples:

| n    | k    | n! / k! |
| ---- | ---- | ------- |
| 5    | 2    | 60      |
| 6    | 5    | 6       |
| 8    | 3    | 6720    |

------





### Problem 7. Matrix of Numbers

Write a program that reads a positive integer number `n` (1 ≤ n ≤ 20) and prints a matrix like in the examples below. * Use two nested loops.



##### Examples:

| n    | matrix |
| ---- | ------ |
| 2    | 1 2    |
|      | 2 3    |



| n    | matrix |
| ---- | ------ |
| 3    | 1 2 3  |
|      | 2 3 4  |
|      | 3 4 5  |



| n    | matrix  |
| ---- | ------- |
| 4    | 1 2 3 4 |
|      | 2 3 4 5 |
|      | 3 4 5 6 |
|      | 4 5 6 7 |

------





### Problem 8. Odd and Even Product

You are given `n` numbers (given in a single string line, separated by a space).

Write a program that checks whether the product of the odd elements is equal to the product of the even elements. * Elements are counted from `1` to `n`, so the first element is odd, the second is even, etc.



##### Examples:

| numbers           | result |
| ----------------- | ------ |
| 2 1 1 6 3         | yes    |
| product = 6       |        |
|                   |        |
| 3 10 4 6 5 1      | yes    |
| product = 60      |        |
|                   |        |
| 4 3 2 5 2         | no     |
| odd_product = 16  |        |
| even_product = 15 |        |

------





### Problem 9. Random Numbers in Given Range

Write a program that reads `3` numbers `n`, `min` and `max` (`min != max`) and prints `n` random numbers in the range `[min...max]`.



##### Examples:

| n    | min  | max  | random numbers                |
| ---- | ---- | ---- | ----------------------------- |
| 5    | 0    | 1    | 1 0 0 1 1                     |
| 10   | 10   | 15   | 12 14 12 15 10 12 14 13 13 11 |

*Note: The above output is just an example. Due to randomness, your program most probably will produce different results.*

------





### Problem 10. Randomize the Numbers 1…N

Write a program that reads a number `n` and prints the numbers `1, 2, …, n` in random order.



##### Examples:

| n    | randomized numbers 1…n |
| ---- | ---------------------- |
| 3    | 2 1 3                  |
| 10   | 3 4 8 2 6 7 9 1 10 5   |

*Note: The above output is just an example. Due to randomness, your program most probably will produce different results. You might need to use arrays.*

------





### Problem 11. Trailing Zeroes in N!

Write a program that calculates with how many zeroes the factorial of a given number `n` has at its end. * Your program should work well for very big numbers, e.g. `n=100000`.



##### Examples:

| n      | trailing zeroes of n! | explanation         |
| ------ | --------------------- | ------------------- |
| 10     | 2                     | 3628800             |
| 20     | 4                     | 2432902008176640000 |
| 100000 | 24999                 | think why           |

------





### Problem 12. Spiral Matrix

Write a program that reads a positive number `n` (1 ≤ n ≤ 20) and prints a matrix holding the numbers from `1` to `n*n` in the form of square spiral like in the examples below.



##### Examples:

| n    | matrix |
| ---- | ------ |
| 2    | 1 2    |
|      | 4 3    |



| n    | matrix |
| ---- | ------ |
| 3    | 1 2 3  |
|      | 8 9 4  |
|      | 7 6 5  |



| n    | matrix     |
| ---- | ---------- |
| 4    | 1 2 3 4    |
|      | 12 13 14 5 |
|      | 11 16 15 6 |
|      | 10 9 8 7   |