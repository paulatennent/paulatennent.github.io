---
layout: ../../layouts/base.astro
title: "Week 5 Tutorial"
---
# Week 5 Tutorial
---
## Table of Contents

## Part 1: 2D Arrays

## Part 2: Arrays & Functions

Lets code up some arrays togehter!

## Part 3: Array & Function Practice

## Part 4: Strings

Lets code up some strings together! We will go through:

1. Creating strings
2. Printing strings
3. Scanning strings
4. Looping over strings

## Part 5: Strings Practice

**TASK - 2-4ppl**: Code up one of the following functions:

**NOTE: Make sure to use the provided heler functions too!**

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


