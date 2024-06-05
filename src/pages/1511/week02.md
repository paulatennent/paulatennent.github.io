---
layout: ../../layouts/base.astro
title: "Week 1 Tutorial"
---
# Week 2 Tutorial
---

## Table of Contents

## Part 1: Variables and Constants

As a class, we will code up some code that acts a bit like this:

```
$ dcc circle.c -o circle
$ ./circle
What is the circle radius: 5
Circle with radius 5 has area 78.54.
```

## Part 2: Operators in C

**TASK - In table groups:**
- On your table, write down as many operators that you know.
- Do you know what the C language equivelent is?

e.g. Plus, `+` in C

## Part 3: Weird arithmetic in C

**TASK - One Computer per Table**
- On your computer, open up a file called `maths.c` that contains:

```c
#include <stdio.h>

int main(void) {

    int ans = 7 / 2;
    printf("%d", ans);

    return 0;
}
```

To compile your code, do something like this:

```
$ dcc maths.c -o maths
$ ./maths
3.5
```

**What do these result in?**
- The code given above?
- `double ans = 7 / 2`
- `char ans = 'a' + 5` (try both `%c` vs `%d` when printing)
- `char ans = 'F' - 'A' + 'a'` (print with `%c`)
- `int ans = 10 % 3` and `-10 % 3` (print with `%d`)



## Part 4: Diagraming

**TASK -- in groups of ~4**
1. On the whiteboard, create a **flow chart** to determine **if a year is a leap year** or not
2. If you finish early, try writing some pseudo-code by converting each
   **question** in the flow chat to an **if statement**

## Part 5: Practical Coding

**Lets code up a program that:**


1. Scan in the users height.
2. If the height is 0 or less, it should print an error message,
3. If the height is below the minimum height, it should print a message telling the user they are not tall enough to ride,
4. If the hight is above the minimum but below the ride alone threshold, it should print a message telling the user they can ride with an adult,
5. If the height is or is above the ride alone threshold, it should print a message telling the user they can ride.


```
$ dcc height.c -o height
$ ./height
What is your height: 155
You can ride only with an adult
$ ./height
What is your height: 200
You can ride alone
```

---

## *Feedback*

Any feedback (positive or negative) about how I run my class is greatly appreachated!

If you have feedback for the course, you can also put it here and I'll pass it
onto the admins.

**[Link to Anomyous Feedback Form](https://forms.gle/5aMX65jinYUuMBwo8)**
