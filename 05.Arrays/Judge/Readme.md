# Arrays

## Judge



# 01

## Sort Numbers

Write a program that reads a list of numbers separated by a comma and space.

Arrange the numbers in descending order.

Output all numbers on a single line, separated by a comma and a space.

#### Input

- On the only line you will receive all the numbers to be sorted.

#### Output

- On the only line of output, print all the numbers sorted in format `n1, n2, n3, .. n`

#### Input

Copy

```
2, 3, 1, 5, 6
```

#### Output

Copy

```
6, 5, 3, 2, 1
```

#### Input

Copy

```
1, 2, 3
```

#### Output

Copy

```
3, 2, 1
```

------

## Clarifications

No clarifications have been made at this time.

# 02

##  Reverse Number

------



Write a method that reverses the digits of a given decimal number.

#### Input

- On the first line you will receive a number

#### Output

- Print the given number with reversed digits

#### Sample tests

| Input  | Output |
| :----- | :----- |
| 256    | 652    |
| 123.45 | 54.321 |

------

## Clarifications

No clarifications have been made at this time.



# 03

## Combine Lists

------



Write a program that reads two lists of numbers and combines them by alternatingly taking elements:

- combine `1,2,3` and `7,8,9` -> `1,7,2,8,3,9`
- you can assume that the input lists will have the same length.

Print the resulting combined list to the output, separating elements with a comma.

#### Input

- On the first line you will receive the first list.
- On the second line -> 2nd list.

#### Output

- On the only line of output, print all the numbers in format `n1,n2,n3,..n`

#### Input

Copy

```
2,3,1
5,2,3
```

#### Output

Copy

```
2,5,3,2,1,3
```

------

## Clarifications

No clarifications have been made at this time.

#  04

## Rotate List

------



Write a program that rotates a list several times (the first element becomes last).

- `list = 1,2,3,4,5` and `N = 2` -> `result = 3,4,5,1,2`

Note that N could be larger than the length of the list.

- `list = 1,2,3,4,5` and `N = 6` -> `result = 2,3,4,5,1`

#### Input

- On the first line you will receive the list of numbers.
- On the second line you will receive `N`

#### Output

- On the only line of output, print the numbers separated by a space.

#### Input

Copy

```
5,3,2,1
2
```

#### Output

Copy

```
2,1,5,3
```

#### Input

Copy

```
2,1,3,4
5
```

#### Output

Copy

```
1,3,4,2
```

------

## Clarifications

No clarifications have been made at this time.

# 05

## Is a List Sorted?

------



Write a program that checks if a list is already sorted. For a list to be sorted, the next element must **NOT** be smaller than the previous one.

#### Input

- On the first line - you will receive a number `N`.
- On the next `N` lines, you will receive a list of numbers, separated by a comma

#### Output

- There are `N` lines of output
- for each list you receive, print 'true' if sorted or 'false' otherwise.

#### Constraints

- 1 <= N <= 10
- 1 <= list.length <= 20

#### Input

Copy

```
3
1,2,3,4,5
1,2,8,9,9
1,2,2,3,2
```

#### Output

Copy

```
true
true
false
```

------

## Clarifications

No clarifications have been made at this time.

# 06

## Remove Duplicates

------



Write a program that removes all duplicates from a list of elements.

- `1,2,2,2,4,7` -> `1,2,4,7`.

Maintain the relative order of the remaining items.

#### Input

- On the only line of input, you will receive the elements, separated by a comma.

#### Output

- Display the list with the duplicates removed, separated by a comma.

#### Constraints

- 1 <= list.length <= 20

#### Input

Copy

```
1,2,2,2,2,18,3,12
```

#### Output

Copy

```
1,2,18,3,12
```

#### Input

Copy

```
c,c,a,b,a,a,b,c
```

#### Output

Copy

```
c,a,b
```

------

## Clarifications

No clarifications have been made at this time.



# 08

## Below and Above Average

------

Write a program that calculates the average of a list of numbers. Display the average, all the numbers below the average, and all the numbers above the average. Maintain the relative order of numbers.

#### Input

- On the only line of input, you will receive the numbers, separated by a comma.

#### Output

- On the first line, print the average, with two digits after the decimal separator.
- On the second line, print all the numbers bellow the average
- On the third line, print all the numbers above the average

#### Constraints

- 1 <= list.length <= 20

#### Input

Copy

```
3,-12,0,0,13,5,1,0,-2
```

#### Output

Copy

```
avg: 0.89
below: -12,0,0,0,-2
above: 3,13,5,1
```

#### Input

Copy

```
0,1,-1
```

#### Output

Copy

```
avg: 0.00
below: -1
above: 1
```

------

## Clarifications

No clarifications have been made at this time.