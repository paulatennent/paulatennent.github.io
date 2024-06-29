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

<details>
<summary>galaxy.c</summary>

```c
// part1_galaxy.c
//
// This program was written by YOUR-NAME (ZID)
// on DATE
//
// This program is a simple game that allows the user to build a galaxy. 
// The user can place stars, planets, and nebulae in the galaxy.

#include <stdio.h>

#define SIZE 5
#define NEBULA_POINTS -10

enum entity {
    STAR,
    PLANET,
    NEBULA,
    SPACESHIP,
    EMPTY,
};

struct celestial_body {
    enum entity entity;
    int points;
};

struct position {
    int row;
    int col;
};

void print_map(struct celestial_body galaxy[SIZE][SIZE]);

int main(void) {
    struct celestial_body galaxy[SIZE][SIZE];

    // TODO: Initialize the galaxy

    // TODO: Place the planets and nebulae in the galaxy

    // TODO: Place the player in the galaxy

    // TODO: Find the total points

    // TODO: Find the total points for a square radius around the player
    // e.g. nearby_points(galaxy, p_row, p_col, 3) // for 3 radius around the
    // player
    
    return 0;
}

// Function prints the map of the galaxy
// 
// Parameters:
// - galaxy: the 2D array representing the galaxy
//
// returns: nothing
void print_map(struct celestial_body galaxy[SIZE][SIZE]) {
    printf("\n---------------------\n");
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            printf("|");
            if (galaxy[i][j].entity == SPACESHIP) {
                printf(" X ");
            } else if (galaxy[i][j].entity == EMPTY) {
                printf("   ");
            } else if (galaxy[i][j].entity == STAR) {
                printf(" * ");
            } else if (galaxy[i][j].entity == PLANET) {
                printf(" o ");
            } else if (galaxy[i][j].entity == NEBULA) {
                printf(" # ");
            }
        }
        printf("|\n");
        printf("---------------------\n");
    }
}
```
</details>

 
<details>
<summary>galaxy_solution.c</summary>

```c
// part1_galaxy.c
//
// This program was written by YOUR-NAME (ZID)
// on DATE
//
// This program is a simple game that allows the user to build a galaxy. 
// The user can place stars, planets, and nebulae in the galaxy.

#include <stdio.h>

#define SIZE 5
#define NEBULA_POINTS -10

enum entity {
    STAR,
    PLANET,
    NEBULA,
    SPACESHIP,
    EMPTY,
};

struct celestial_body {
    enum entity entity;
    int points;
};

struct position {
    int row;
    int col;
};

void print_map(struct celestial_body galaxy[SIZE][SIZE]);
void init_galaxy(struct celestial_body galaxy[SIZE][SIZE]);
void place_planets(struct celestial_body galaxy[SIZE][SIZE]);
struct position get_starting_location(struct celestial_body galaxy[SIZE][SIZE]);
int in_bounds(struct position p);
int is_empty(struct celestial_body galaxy[SIZE][SIZE], struct position p);
int get_points(struct celestial_body galaxy[SIZE][SIZE]);
int get_points_range(struct celestial_body galaxy[SIZE][SIZE], struct position player, int radius);

int main(void) {
    struct celestial_body galaxy[SIZE][SIZE];

    // TODO: Initialize the galaxy
    init_galaxy(galaxy);

    // TODO: Place the planets and nebulae in the galaxy
    place_planets(galaxy);

    // TODO: Place the player in the galaxy
    struct position player = get_starting_location(galaxy);

    // TODO: Find the total points
    int points = get_points(galaxy);
    printf("Total points in galaxy: %d\n", points);

    points = get_points_range(galaxy, player, 3);
    printf("Points surrounding player with radius 3: %d\n", points);

    return 0;
}

void init_galaxy(struct celestial_body galaxy[SIZE][SIZE]) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            galaxy[i][j].entity = EMPTY;
            galaxy[i][j].points = 0;
        }
    }
}

void place_plantes(struct celestial_body galaxy[SIZE][SIZE]) {
    printf("Enter planets and nebulae:\n");

    char command;
    scanf(" %c", &command);
    while (command != 'q') {
        int row;
        int col;
        if (command == 'p') {
            int points;
            scanf("%d %d %d", &row, &col, &points);
            galaxy[row][col].entity = PLANET;
            galaxy[row][col].points = points;
        } else if (command == 'n') {
            scanf("%d %d", &row, &col);
            galaxy[row][col].entity = NEBULA;
            galaxy[row][col].points = NEBULA_POINTS;
        }
        scanf(" %c", &command);
    }
}
            
struct position get_starting_location(struct celestial_body galaxy[SIZE][SIZE]) {
    printf("Enter the starting position of the player: ");
    struct position curr;
    scanf("%d, %d", &curr.row, &curr.col);
    while (!(in_bounds(curr) && is_empty(galaxy, curr))) {
        printf("Invalid position, try again:");
        scanf("%d, %d", &curr.row, &curr.col);
    }
    return curr;
}

int get_points(struct celestial_body galaxy[SIZE][SIZE]) {
    int points = 0;
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            points += galaxy[i][j].points;
        }
    }
    return points;
}

int get_points_range(struct celestial_body galaxy[SIZE][SIZE], struct position player, int radius) {
    int points = 0;
    for (int i = player.row - radius; i < player.row + radius; i++) {
        for (int j = player.col - radius; j < player.col + radius; j++) {
            struct position curr = {.row = i, .col = j};
            if (in_bounds(curr)) {
                points += galaxy[i][j].points;
            }
        }
    }
    return points;
}
    

int in_bounds(struct position p) {
    return (p.row >= 0 && p.row < SIZE && p.col >= 0 && p.col < SIZE);
}


int is_empty(struct celestial_body galaxy[SIZE][SIZE], struct position p) {
    return galaxy[p.row][p.col].entity == EMPTY;
}

// Function prints the map of the galaxy
// 
// Parameters:
// - galaxy: the 2D array representing the galaxy
//
// returns: nothing
void print_map(struct celestial_body galaxy[SIZE][SIZE]) {
    printf("\n---------------------\n");
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            printf("|");
            if (galaxy[i][j].entity == SPACESHIP) {
                printf(" X ");
            } else if (galaxy[i][j].entity == EMPTY) {
                printf("   ");
            } else if (galaxy[i][j].entity == STAR) {
                printf(" * ");
            } else if (galaxy[i][j].entity == PLANET) {
                printf(" o ");
            } else if (galaxy[i][j].entity == NEBULA) {
                printf(" # ");
            }
        }
        printf("|\n");
        printf("---------------------\n");
    }
}
```
</details>

## Part 3: Strings

Lets code up some strings together! We will go through:

1. Creating strings
2. Printing strings
3. Scanning strings
4. Looping over strings

<details>
<summary>string.c</summary>

```c
#include <stdio.h>

int main(void) {

    // create a string

    char my_name[] = "Paula";
    char my_name2[100] = "Paula";
    char my_name3[] = {'P', 'a', 'u', 'l', 'a', '\0'};
    

    // print it out

    printf("%s\n", my_name);
    fputs(my_name, stdout);
    printf("\n");


    // change the string

    my_name[4] = '\0'; // remove the last 'a'
    // my_name = "Paulina" // ILLEGAL
    // my_name[5] = 'y' // ILLEGAL
    my_name2[5] = 'a';
    my_name2[6] = '\0';
    // now my_name2 os "Paulaa"


    // scan in a string

    char greeting[100];
    fgets(greeting, 100, stdin);
    // scanf("%s", greeting); // ILLEGAL -> where did the length go???


    // print out only till the first space

    int i = 0;
    while (greeting[i] != '\0' && greeting[i] != ' ') {
        printf("%c", greeting[i]);
        i++;
    }

    return 0;
}
```
</details>

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

<details>
<summary>solution.c</summary>

```c
// 1.
// returns the number of lowercase letters in `char *string`
int count_lowercase(char string[MAX_CHARS]) {
    int count = 0;
    int i = 0;
    while (string[i] != '\0') {
        if (is_lower(strign[i])) {
            count++;
        }
    }
    return count;
}

// 2.
// modifies `char *string` by converting all its vowels to uppercase
void make_vowels_uppercase(char string[MAX_CHARS]) {
    int i = 0;
    while (string[i] != '\0') {
        if (is_vowel(string[i])) {
            string[i] = to_upper(string[i]);
        }
    }
    return;
}

// 3..
// shortens a string so that it ends after the first word
// e.g. "This is a sentence" should turn into:
//      "This"
// 
// (hint. what defines when a string ends?)
void delete_following_words(char string[MAX_CHARS]) {
    int i = 0;
    while (string[i] != '\0' && is_alpha(string[i])) {
        i++;
    }
    string[i] = '\0';
    return;
}
```
</details>
