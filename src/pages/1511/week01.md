---
layout: ../../layouts/base.astro
title: "Week 1 Tutorial"
---
# Week 1 Tutorial
---

## Table of Contents

## Welcome to 1511!

- Super fun course, BUT lots of work!
- Great for both coding newbies (like me when I did 1511) AND mega programming
  nerds (like me now)!
- Hope you enjoy the course!

## Part 1: Introductions

1. Get into **groups of 3-4**.
2. Introduce everyones names.
3. Chat and find the **Most obscure thing that everyone has in common**.
    - e.g. "doing 1511 this term" is in common, but not very obscure.
4. **Nominate someone to represent your group** -> they will introduce everyone by name and
   the thing in common to the rest of the class.

## Part 2: Information + QnA

### Course Structure?
- Turn up to: **Lectures, Tutorials, Labs**
- Get marks from: **Weekly Problem Sets, Assignments, Exam**

### Need help?
- **Forum:** 99% of questions, q's relevant to others, code debugging, just
  about anything
- **Help Sessions:** face to face, 1 on 1 help
- **My Email/Teams:** Class specific stuff or personal issues (aka, struggling to
  keep up).

### How to go well!
- Turn up to class -> even if you are "behind"
- Do all the labs (free marks)
- Just code ALOT!
- Ask for help regularly
- ***Things that don't really help:** writing excessive notes, rewatching lectures,
  being stuck on a bug for hours*

## Part 3: Introduction to Linux

Together we will:
- Look around at the coding environment
- Difference between the Terminal and the Text editor
- Some terminal commands

<details>
<summary>some terminal commands:</summary>

- `pwd` print the current directory
- `ls` contents of current directory
- `cd` change directory, -- `cd lab01`
- `cat` print out the file contents -- `cat helloworld.c`
- `code` open vscode -- `code helloworld.c` or `code .` (open the current folder)
- `dcc` compile code -- `dcc helloworld.c -o helloworld`
    - the `-o` means: name my output file "helloworld".
- `./` run an executable -- `./helloworld`
- `mv` move/rename a file/directory -- `mv helloworld.c hello_world.c`

Some other useful things:

- `..` means the parent directory (e.g. `cd ..` is move to the parent
  directory).
- `.` means the current directory (e.g. `code .` is open the current directory,
  `mv lab01/file.c .` move file.c from the lab01 directory to the current directory.
- flags let you change the behaviour of your command slightly. e.g. `cat file.c` prints
  out file.c, but `cat -n file.c` prints out file.c with line numbers. The `-h`
  (help)
  flag usually shows you about different flags!

</details>

## Part 4: CODING TOGETHER!

Together we will: 
- Code up a classic "hello world" program
- Code up a program that acts a bit like this:

```
$ dcc print_face.c -o print_face
$ ./print_face
  ~ ~
  0 0
   o
   _
```
- Next, edit the face to look like:
```
  ~ ~
  0 0
   o
  \_/
```
<details>
<summary>print_face.c</summary>

```c
#include <stdio.h>

int main(void) {

    printf("  ~ ~\n");
    printf("  0 0\n");
    printf("   o \n");
    printf("  \\_/\n"); // the '\\' means print a single '\'

    return 0;
}
```
</details>


## Part 5: Going to the lab

- When in the lab, google: **comp1511 cgi** -> **check that the url says "24T2"**
  (blue website).
- Pair Programming:
    - Find someone to be your **programming buddy**
    - Let me know who your buddies are during the lab -> we can mix it up
      halfway thorugh the term 
    - **You can submit the exact same
      code** ... [How to send code via the terminal!](/sending_via_terminal)

---

## *Feedback*

Any feedback (positive or negative) about how I run my class is greatly appreachated!

If you have feedback for the course, you can also put it here and I'll pass it
onto the admins.

**[Link to Anomyous Feedback Form](https://forms.gle/5aMX65jinYUuMBwo8)**
