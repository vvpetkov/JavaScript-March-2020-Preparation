

#  01.Numbers-From-1-to-N.js



# 02.Not-Divisable-Number.js

## Not Divisable Number

**Tags**

All, Loops

**Difficulty**

Easy



Write a program that reads from the console a positive integer **N** and prints all the numbers from **1** to **N** not divisible by **3** or **7**, on a single line, separated by a space.

#### Input

- Will always consists of one valid integer number - the number **N**.

#### Output

- Should always consists of the numbers from **1** to **N**, which are not divisible by **3** or **7**, separated by a whitespace.

#### Constraints

- 1 < N < 1500
- Time limit: **0.1s**
- Memory limit: **16MB**

#### Sample tests

| Input | Output       |
| ----- | ------------ |
| 10    | 1 2 4 5 8 10 |
| 3     | 1 2          |

------

## Clarifications

No clarifications have been made at this time.



# 03.Find-Average.js

## Find Average

**Tags**

All, Loops

**Difficulty**

Preparation



Allowed languages

C#, java, JavaScript



You need to calculate the average of a collection of values. Every value will be valid number. The average must be printed with two digits after the decimal point.

#### Input

- On the first line, you will receive **N** - the number of the values you must read
- On the next **N** lines you will receive numbers.

#### Output

- On the only line of output, print the average with two digits after the decimal point.

#### Input

Copy

```
4
1
1
1
1
```

#### Output

Copy

```
1.00
```

#### Input

Copy

```
3
2.5
1.25
3
```

#### Output

Copy

```
2.25
```

------

## Clarifications

No clarifications have been made at this time.

# 04.Min-Max-Sum-Average.js

## Min Max Sum Average

**Tags**

All, Loops

**Difficulty**

Easy



Write a program that reads from the console a sequence of **N** real numbers and returns the *minimal*, the *maximal* number, the *sum* and the *average* of all numbers (displayed with 2 digits after the decimal point).

- The input starts by the number **N** (alone in a line) followed by **N** lines, each holding an real number.
- The output is like in the examples below.

#### Input

- On the first line, you will receive the number **N**.
- On each of the next **N** lines, you will receive a single real number.

#### Output

- You output must always consist of *exactly* 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:

Copy

```
min=3.00
max=6.00
sum=9.00
avg=4.50
```

#### Constraints

- 1 <= **N** <= 1000
- All numbers will be valid integer numbers that will be in the range `[-10000, 10000]`
- Time limit: **0.1s**
- Memory limit: **16MB**

#### Sample tests

| Input    | Output                               |
| -------- | ------------------------------------ |
| 3 2 5 1  | min=1.00 max=5.00 sum=8.00 avg=2.67  |
| 3 2 -1 4 | min=-1.00 max=4.00 sum=5.00 avg=1.67 |

------

## Clarifications

No clarifications have been made at this time.

# 05.Calculate-Discount.js



## Calculate Discount

**Tags**

All, Loops

**Difficulty**

Preparation



Allowed languages

C#, java, JavaScript



You need to calculate the discounted price for each item in your shopping cart. The discount is 65%, a real deal for you.

#### Input

- On the first line, you will receive **N** - the number of the items in your shopping cart
- On the next **N** lines you will each item's price

#### Output

- On each line in the output print the discounted price of the item with two digits after the decimal point (Math rules for rounding apply)

#### Input

Copy

```
2
50
40
```

#### Output

Copy

```
17.50
14.00
```

#### Input

Copy

```
4
9.99
19.99
29.99
39.99
```

#### Output

Copy

```
3.50
7.00
10.50
14.00
```

------

## Clarifications

No clarifications have been made at this time.

# 06.Convert-Degrees.js



## Convert Degrees

**Tags**

All, Loops

**Difficulty**

Preparation



Allowed languages

C#, java, JavaScript



You need to provide conversion of the temperature given in Celsius to their Fahrenheit representation.

- [Explanation](https://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.html)

#### Hint

- Search how you could split the list of values and then you can iterate over them.
  - JavaScript
    - [forEach](https://gomakethings.com/es6-foreach-loops-with-vanilla-javascript/)
  - Java
    - [For-each loop](https://www.geeksforgeeks.org/for-each-loop-in-java/)
  - C#
    - [For-each loop](https://www.programiz.com/csharp-programming/foreach-loop)

#### Input

- On the first line, you will receive a list of values separated by a single space.

#### Output

- On each line in the output print the converted temperature. Print a whole number rounded to the nearest integer (Math rules apply) and without digits after the decimal point.

#### Input

Copy

```
0 15 30
```

#### Output

Copy

```
32
59
86
```

------

## Clarifications

No clarifications have been made at this time.

# 07.Print-Deck-of-Cards.js

## Print Deck of Cards

**Tags**

All, Loops

**Difficulty**

Preparation



Allowed languages

C#, java, JavaScript



Write a program that reads a card sign(as a **string**) from the console and generates and prints all possible cards from a [standard deck of 52 cards](https://en.wikipedia.org/wiki/Standard_52-card_deck) up to the card with the given sign(without the jokers). The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).

- The card faces should start from **2 to A(10 is 10)**.
- Print each card face in its four possible suits: clubs, diamonds, hearts and spades.

The order of cards is '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'.

#### Input

- On the only line, you will receive the sign of the card to which, including, you should print the cards in the deck.

#### Output

- The output should follow the format bellow

#### Input

Copy

```
5
```

#### Output

Copy

```
2 of spades, 2 of clubs, 2 of hearts, 2 of diamonds
3 of spades, 3 of clubs, 3 of hearts, 3 of diamonds
4 of spades, 4 of clubs, 4 of hearts, 4 of diamonds
5 of spades, 5 of clubs, 5 of hearts, 5 of diamonds
```

------

## Clarifications

No clarifications have been made at this time.

# 08.Calculate-Complex-Sum.js

## Calculate Complex Sum

**Tags**

All, Loops

**Difficulty**

Preparation



Allowed languages

C#, java, JavaScript



Write a program that, for a given two numbers NN and xx, calculates the sum below.



Use only one loop. Print the result with 5 digits after the decimal point.

#### Input

- On the first line you will receive one number - NN
- On the second line you will receive another number - xx

#### Output

- Output only one number - the sum of the sequence for the given NN and xx

#### Input

Copy

```
3
2
```

#### Output

Copy

```
2.75000
```

------

## Clarifications

No clarifications have been made at this time.