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
The radius is 5
The area 78.54
```
<details>
<summary>circle.c</summary>

```c
// This program calculates the area of a circle
#include <stdio.h>

#define PI 3.14

int main(void) {
	int radius = 5;
    double area = PI * radius * radius;

    printf("The radius is %d\n", radius);
	printf("The area is %.2lf\n", area);

    return 0;
}
```
</details>

Change it up to scan in a value for the radius
```
$ dcc circle.c -o circle
$ ./circle
Enter a radius: 5
The area is 78.54
```

<details>
<summary>circle.c</summary>

```c
// This program calculates the area of a circle
#include <stdio.h>

#define PI 3.14

int main(void) {
    int radius;
    printf("Enter a radius: ");
    scanf("%d", &radius);

    double area = PI * radius * radius;

    printf("The area is %.2lf\n", area);

    return 0;
}
```
</details>

## Part 2: Operators in C

**TASK - In table groups:**
- On your table, write down as many operators that you know.
- Do you know what the C language equivelent is?

e.g. Plus, `+` in C

<details>
<summary>operators</summary>

- maths operators: `+`, `-`, `/`, `*`, `%`
    - If both variables are integers, `/` will do integer division. e.g. `7/2 ==
      3` but `7.0/2 == 3.5`
    - `%` is modulus (aka remainder)
    - power doesn't exist, use the math library for this :)
- logic operators: `&&`, `||`, `!`
- comparison operators: `<`, `>`, `<=`, `>=`, `!=`, `==`
- unary operators: `!`, `-`
- weird operators (not used in 1511) `&`, `^`, `|`, `~`, `>>`, `<<`

</details>

## Part 3: Weird arithmetic in C

**TASK -- 1 Computer per Table**
- On your computer, open up a file called `maths.c` that contains:

```c
#include <stdio.h>

int main(void) {

    int ans = 7 / 2;
    printf("%d\n", ans);

    return 0;
}
```

To compile your code, do something like this:

```
$ dcc maths.c -o maths
$ ./maths
???
```

**What do these result in?**
1. The code given above?
2. `double ans = 7 / 2` (print with %d)
3. `char ans = 'a' + 5` (try both `%c` vs `%d` when printing)
4. `char ans = 'F' - 'A' + 'a'` (print with `%c`)
5. `int ans = 10 % 3` and `-10 % 3` (print with `%d`)

<details>
<summary>results</summary>

1. prints `3` (c always rounds down)
2. prints `3.0000` -> to get `3.5` put `7.0/2`.
3. prints `f`
4. prints `f`
5. `10 % 3 == 1`, `-10 % 3 == -2`
</details>

## Part 4: Diagraming

**TASK -- per table**
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
<details>
<summary>height.c</summary>

```c
#include <stdio.h>

#define MIN_HEIGHT 100
#define RIDE_ALONE_HEIGHT 150

int main(void) {

    int height;
    printf("What is your height: ");
    scanf("%d", &height)

    if (height <= 0) {
        printf("invalid height\n");
        // we could return, or just add the rest as an else if
        // usually we return for error messages
        return 0;
    }

    if (height < MIN_HEIGHT) {
        printf("You cant ride\n");
    } else if (height < RIDE_ALONE_HEIGHT) {
        printf("you can ride with a parent\n");
    } else {
        printf("You can ride alone\n");
    }

    return 0;
}
```
</details>

---

## *Feedback*

Any feedback (positive or negative) about how I run my class is greatly appreachated!

If you have feedback for the course, you can also put it here and I'll pass it
onto the admins.

**[Link to Anomyous Feedback Form](https://forms.gle/5aMX65jinYUuMBwo8)**
