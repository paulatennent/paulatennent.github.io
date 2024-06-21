---
layout: ../../layouts/base.astro
title: "Week 3 Tutorial"
---
# Week 3 Tutorial
---

## Table of Contents

## Admin

- **Research Study** - using dcc with eyetracking! Look for the **pinned edstem forum post**
- **Check-ins** - During the lab we will check that your ontrack!
    - **If you are struggling -- Let us know! We can give you more resources!**

## Part 1: Structs & Enums

**DEMO** Lets create a custom data-type for storing pet information!

## Part 2: While Loops

**DEMO** Lets write some code that acts like:

```
$ ./hello
How many 'l's: 5
helllllo
```

<details>
<summary>hello.c</summary>

```c
#include <stdio.h>

int main(void) {
    printf("he");
    int i = 0;
    while (i < 10) {
        printf("l");
        i++;
    }
    printf("o\n");
}
```
</details>

**TASK - Per Table**
1. On your table, pick one of the code snippets below
2. Hand execute the code and determine what it prints out

<details>
<summary>While Loops</summary>

A
```c
#include <stdio.h>

int main(void) {
    int i = 0;
    while (i < 32) {
        printf("%d\n", i);
        i = i + 2;
    }
	return 0;
}
```
B
```c
#include <stdio.h>

int main(void) {
    int i = 5;
    while (i >= 0) {
        printf("%d\n", i);
        i--;
    }
	return 0;
}
```
C
```c
#include <stdio.h>

int main(void) {
    int i = 0;
    int keep_going = 1;
    while (keep_going == 1) {
        if (i > 3) {
            keep_going = 0;
        }
        i++;
    }
    printf("%d\n", i);
	return 0;
}
```
D
```c
#include <stdio.h>

int main(void) {
    int i;
    while (i > 0) {
        printf("%d\n", i);
        i--;
    }
	return 0;
}
```
E
```c
#include <stdio.h>

int main(void) {
    int i = 0;
    int max = 32;
    while (i < max) {
        printf("%d\n", i);
        max = max + 2;
    }
	return 0;
}
```
F
```c
#include <stdio.h>

int main(void) {
    int i = 0;
    int keep_going = 0;
    while (keep_going == 1) {
        if (i > 3) {
            keep_going = 0;
        }
        i++;
    }
    printf("%d\n", i);
	return 0;
}
```
</details>

## Part 3: 2D While Loops 

**DEMO** Lets write some code that acts like:

```
$ ./hello
How many 'l's: 5
How many hellos: 3
helllllo
helllllo
helllllo
```

<details>
<summary>hello.c</summary>

```c
#include <stdio.h>

int main(void) {

    int i = 0;
    while (i < 20) {
    
        // print hell..llo
        printf("he");
        int j = 0;
        while (j < 10) {
            printf("l");
            j++;
        }
        printf("o\n");

        i++;
    }
}
```
</details>


**TASK - Per Table**
1. On your table, pick one of the code snippets below
2. Hand execute the code and determine what it prints out

<details>
<summary>2D While Loops</summary>

A
```c
#include <stdio.h>

#define SIZE 4

int main(void) {
    int row = 0;
    while (row < SIZE) {
        int col = 0;
        while (col < SIZE) {
            if (col != 1 && row != 1) {
                printf("O");
            } else {
                printf("X");
            }
            col++;
        }
        row++;
        printf("\n");
    }
    return 0;
}
```
B
```c
#include <stdio.h>

#define SIZE 4

int main(void) {
    int row = 0;
    while (row < SIZE) {
        int col = 0;
        while (col < SIZE) {
            if (row == col) {
                printf("O");
            } else {
                printf("X");
            }
            col++;
        }
        row++;
        printf("\n");
    }
    return 0;
}
```
C
```c
#include <stdio.h>

#define SIZE 4

int main(void) {
    int row = 0;
    while (row < SIZE) {
        printf("X");
        int col = 1;
        while (col < SIZE - 1) {
            if (row == 0 || row == SIZE - 1) {
                printf("X");
            } else {
                printf("O");
            }
            col++;
        }
        printf("X");
        row++;
        printf("\n");
    }	
    return 0;
}
```
D
```c
#include <stdio.h>

#define SIZE 4

int main(void) {
    int row = 0;
    while (row < SIZE) {
        int col = 0;
        while (col < SIZE) {
            if (col % 2 == 0) {
                printf("O");
            } else {
                printf("X");
            }
            col++;
        }
        row++;
        printf("\n");
    }
	return 0;
}

```
</details>

## Part 4: Scanning and Loops

**DEMO** Lets write some code that scans in numbers (and sums them) till we find a negative
number

```
$ ./not_neg
3
4
2
-1
Sum was 9
```

<details>
<summary>not_neg.c</summary>

```c
#include <stdio.h>

int main(void) {
    int input;
    int sum = 0;
    scanf("%d", &input);
    while (input > 0) {
        sum += input;
        scanf("%d", &input);
    }
    printf("sum is: %d\n", sum);
}
```

or 

```c
#include <stdio.h>

int main(void) {
    int input;
    int sum = 0;
    while (scanf("%d", &input) == 1 && input > 0) {
        sum += input;
    }
    printf("sum is: %d\n", sum);
}
```

</details>


**TASK -- Per Table**
1. Determine what tells the loop to **STOP** -- `while ( ??? ) {}`
2. Determine what happens **multiple times** -- `while () { ??? }`
3. Put it togehter with some pseudo code

**Pick one of the following:**

1. Enter a series of numbers. For each number, print it out. Stop when `[ctrl-d]` is pressed.
2. Enter a series of characters. For each character, print it out. Stop when you reach a `'q'`.
3. Enter a series of characters. For each character, print it out. Stop when you
  reach either a `'q'` or `[ctrl-d]`.

## Hint for Lab - CUSTOM CAKE

Have a think about what the following code prints out...

```
int main(void) {
    char c;
    scanf(" %c", &c);
    printf("%c\n, c);
    scanf(" %c", %c);
    printf("%c\n, c);
    scanf(" %c", %c);
    printf("%c\n, c);

}
```

You can test out the code with these cases:

- The regular case is inputting: `a`, enter, `b`, enter, `c`, enter.
- What about if we input `abc` then press enter?
- What about `ab`, enter, `c`, enter?

**Whats going on**

If you enter in *too many* values for scanf, it stores the aside in this place
called the "Buffer". When scanf happens, first it **checks the buffer** for any
leftover values, and if its empty, it will prompt for input!

---

## *Feedback*

Any feedback (positive or negative) about how I run my class is greatly appreachated!

If you have feedback for the course, you can also put it here and I'll pass it
onto the admins.

**[Link to Anomyous Feedback Form](https://forms.gle/5aMX65jinYUuMBwo8)**
