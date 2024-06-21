---
layout: ../../layouts/base.astro
title: "Week 4 Tutorial"
---
# Week 4 Tutorial
---
## Table of Contents

## Admin

- **Assignment 1 is out!** -> Livestream this afternoon @ 4 thursday
- **Census date is this SUNDAY** -> talk to me if you want to drop the course

## Part 1: Arrays Demo

Lets see how we go debugging the code on the board?

## Part 2: Arrays Practice

**TASK - Pairs**: Code up one of the following programs:

1. **No Negatives**
    - Create an array with 8 elements - positive and negative
    - Print out the array
    - Loop through and turn any negatives to their positive
2. **Largest Integer**
    - Create an array of 8 integers
    - Loop through the array to find the largest element
        - *hint: create a new integer to keep track of whats the
          largest you ahve seen so far!*
    - Print out the element

## Part 3: Functions

I'll demo some function code!

**...Guide to making functions**
1. Determine the **function name**
2. Add it to your main function -> **pretend it exists**
3. Create the **function layout**
4. Fill in **inputs + outputs**
5. Fill in the **body**

**...When to use functions?**
- Any code that gets repeated
- Chunks of code that do 1 thing
- Complicated lines (e.g. pythag)
- Any kind of logic
- The goal is for main to feel more like an overview of the program


<details>
<summary>solutions.c</summary>

```c
#include <stdio.h>

#define LENGTH 5

int main(void) {

    int my_array[LENGTH] = {1, 3, 6, -2, 3};

    // remove all negatives
  
    int i = 0;
    while (i < LENGTH) {
        if (my_array[i] < 0) {
            my_array[i] = -my_array[i];
        }
        i++;
    }

    // print the my_array
    
    i = 0;
    while (i < LENGTH) {
        printf("%d ", my_array[i]);
        i++;
    }
    printf("\n");

    // find the largest element
    
    int largest = my_array[0];
    i = 0;
    while (i < LENGTH) {
        if (my_array[i] > largest) {
            largest = my_array[i];
        }
        i++;
    }

    printf("The largest element is: %d\n", largest);
  
    return 0;
}
```
</details>


<details>
<summary>functions.c</summary>

```c
#include <stdio.h>

void print_smiley(void);
int add_one(int number);
int is_even(int number);

int main(void) {

  // print out a smiley
  print_smiley();

  // create a variable, then add one to it
  int age;
  printf("Age is %d\n", age);
  age = add_one(age);
  printf("Age is %d\n", age);

  // check if a number is even
  int number = 3;
  if (is_even(number)) {
    printf("this number is even\n");
  }

  return 0;
}

// Prints out a smiley face
void print_smiley(void) {
  printf("^_^\n");
}

// returns 1 more than the given number
int add_one(int number) {
  return number + 1;
}

// returns true (1) if the number is even, false (0) otherwise
int is_even(int number) {
  return number % 2 == 0;
}
```
</details>

## Part 4: Functions Practice

**TASK - Pairs**: Code up one of the following functions + their useage in main

1. A function that prints out `"hello world"`.
2. A function that takes in 2 integer (hour and minute) and prints out `"The current time is __:__\n"`. 
2. A function that takes in an integer and returns the negative of it.
3. A function that prints out an array.
4. A function that takes in an array returns the largest element.


<details>
<summary>solutions</summary>

```c
#include <stdio.h>

void print_hello_world(void);
void print_time(int hours, int minutes);
int neg(int num);
void print_array(int array[], int length);
int largest(int array[], int length);

int main(void) {


    // A function that prints out "hello world".
    print_hello_world();

    // A function that takes in 2 integer (hour and minute) and prints out "The current time is __:__\n".
    print_time(9, 20);

    //A function that takes in an integer and returns the negative of it.
    int num = 3;
    printf("Negative of %d is %d\n", num, neg(num));
      
    // A function that prints out an array.
    int array[3] = {1, 2, 3};
    print_array(array, 3);

    // A function that takes in an array returns the largest element.
    printf("the largest element is %d\n", largest(array, 3));
}

// prints hello world
void print_hello_world(void) {
    printf("Hello World!\n");
}

// prints out the time given the hours and minutes
void print_time(int hours, int minutes) {
    printf("The time is: %d:%d\n", hours, minutes);
}

// returns the negative of the given number.
// keeps the number the same if already negative.
int neg(int num) {
    if (num > 0) {
        num = -num;
    }
    return num;
}

// Prints out an array
void print_array(int array[], int length) {
    int i = 0;
    while (i < length) {
        printf("%d ", array[i]);
        i++;
    }
    printf("\n");
}

// returns the largest item in an array
int largest(int array[], int length) {
    if (length == 0) {
        return 0;
    }
    int largest = array[0];
    int i = 1;
    while (i < length) {
        if (array[i] > largest) {
            largest = array[i];
        }
        i++;
    }
    return largest;
}
```
</details>


## Part 5: letters between revisited

Lets write the main function for `letters between` but using functions.


<details>
<summary>letters_between.c</summary>

```c
#include <stdio.h>

enum direction {FORWARDS, BACKWARDS};

// ... add prototypes ...

int main(void) {
    int start;
    int target;
    
    // ... scan in values ...

    int dist = find_dist(start, target);
    int rev_dist = 26 - dist;

    if (dist <= rev_dist) {
        print_alphabet(start, target, FORWARDS);
    } else {
        print_alphabet(start, target, BACKWARDS);
    }
    return 0;
}

// prints out from start to target in the given direction
void print_alphabet(char start, char target, enum direction d) {
    char curr = start;
    while (curr != target)
        printf("%d", c);
        curr = get_next(curr, d);
    }
}

// returns the next letter in the alphabet, looping a and z
char get_next(char curr, enum direction d) {
    // ... add or minus one, loop if necessary ...
}

// ... add the rest of the functions ...
```
</details>


## Part 6: Style

If there is time, we will do a kahoot :]
