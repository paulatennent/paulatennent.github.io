---
layout: ../../layouts/base.astro
title: "Week 5 Tutorial"
---
# Week 5 Tutorial
---
## Table of Contents

## Admin
- Assignment 1
- Checkin Week

## Part 1: 2D Arrays & Functions

Lets code up some arrays togehter!

## Part 2: Array & Function Practice

**Task - 2-4ppl**: Code up one of the following functions, and add it to the
main function:

(more information on the spec is [here](https://cgi.cse.unsw.edu.au/~cs1511/24T2/tut/05/questions))

1. **Initialise the galexy** ⚫⚪⚪
    - to `.entity = EMPTY` and `.points = 0`
2. Enter the **Planets and Nebula** ⚫⚫⚪
    - scan in `p [row] [col] [points]` for planets
    - scan in `n [row] [col]` for nebula (nebula have -10 points)
    - scan in `q` for quit
3. Enter the **starting position** ⚫⚫⚫
    - scan in `[row] [col]` for position
    - repeat if the position isn't valid
    - return the player position
4. Sum **total points** ⚫⚪⚪
    - sum the total points for the whole galexy
    - return the points
5. Sum **nearby points** ⚫⚫⚪
    - take in an radius and the player position, sum the square surrounding the player
    - return the points

## Part 3: Strings

Lets code up some strings together! We will go through:

1. Creating strings
2. Printing strings
3. Scanning strings
4. Looping over strings

## Part 4: Strings Practice

**TASK - 2-4ppl**: Code up one of the following functions:

**NOTE: Make sure to use the provided helper functions too!**

```c
// 1.
// returns the number of lowercase letters in `char *string`
int count_lowercase(char string[MAX_CHARS]) {
    return 42;
}

// 2.
// modifies `char *string` by converting all its vowels to uppercase
void make_vowels_uppercase(char string[MAX_CHARS]) {
    return;
}

// 3..
// shortens a string so that it ends after the first word
// e.g. "This is a sentence" should turn into:
//      "This"
// 
// (hint. what defines when a string ends?)
void delete_following_words(char string[MAX_CHARS]) {
    return;
}
```

<details>
<summary>Helper Functions</summary>

```c
//Provided char functions

#include <ctype.h>

int is_word_char(char c);

// Returns : 1 if `c` is a lowercase letter
//         : 0 otherwise.
int is_lowercase(char c);

// Returns : 1 if `c` is an uppercase letter
//         : 0 otherwise.
int is_uppercase(char c);

// Returns : 1 if `c` is a letter
//         : 0 otherwise.
int is_letter(char c);

// Returns : `c` converted to lowercase, if it was an uppercase letter
//         : `c` unmodified, otherwise
char to_lowercase(char c);

// Returns : `c` converted to uppercase, if it was a lowercase letter
//         : `c` unmodified, otherwise
char to_uppercase(char c);

// Returns : 1 if `c` is an uppercase or lowercase vowel
//         : 0 otherwise.
int is_vowel(char c);
```
</details>


