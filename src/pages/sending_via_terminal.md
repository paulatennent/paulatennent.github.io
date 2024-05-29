---
layout: ../layouts/base.astro
---

# Sending code via the Terminal
---

**... Pair Programming? Skip to [sending between cse
accounts](#sending-between-cse-accounts)**

---

To learn how to send files to different machines via the terminal we need to learn how the `scp`
command works. Its very similar to `cp`, so we can learn that first!

## The `cp` command

### Copying Files

The `cp` (aka copy) command looks a bit like this.

```bash
$ cp [file] [destination]
```

cp has two main use cases:
- Copying a file into a directory
- Copying a file (where the copy has a different name)

So for example, if I have a file and a directory, then I can copy the file into the directory.

```sh
$ ls
file1.c
lab01
$ cp file1.c lab01
$ ls lab01 # whats inside of lab01?
file1.c
```

I could also copy a file and give it a different name

```bash
$ ls
file1.c
$ cp file1.c file1_copy.c
$ ls lab01
file1.c
file1_copy.c
```

(these are essentially the same for the computer, but feel different for humans)

💥 *if `file2.c` already exists, it will overwrite it! **So be careful with this.*** 💥 

### Copying Folders

You can also copy whole folders! We need to use the `-r` flag (which means, copy
the folder, and everything inside that folder).

```bash
$ cp -r dir1 dir2 # copies a whole directory into another directory
```

<aside>
💥 if `dir2` exists, it will put `dir1` it inside of `dir2`, if `dir2` doesn’t exist, it will name the copy `dir2` 💥 

</aside>

## `cp` vs `scp`

`scp` works nearly exactly the same, but we can specify the **machine** that we want to copy to/from.

e.g.
```bash
$ # sending kangaroo from my home computer to my cse machine
$ scp kangaroo.c z5555555@cse.unsw.edu.au:cs1511/lab01
```

---

## How to use `scp` with the cse machines

There are two cases that you might need for cse:
- Sending between CSE amd HOME
- Sending between accounts on CSE

### Sending between CSE and HOME

We can prefix `z5555555@cse.unsw.edu.au:` to find our cse machine from home.
Here's what it looks like in practice.

```bash
$ # on my home computer, i want to send file.c to cse
$ scp file.c z5555555@cse.unsw.edu.au:. # send to your root directory
$ scp file.c z5555555@cse.unsw.edu.au:cs1511/lab01 # send to a specific folder
$ scp file.c z5555555@cse.unsw.edu.au:cs1511/lab01/kangaroo.c # send and give a new name 
```

You can request files like this:

```bash
$ ls
file.c
$ # on my home computer, i want to get kangaroo.c from my cse machine
$ scp z5555555@cse.unsw.edu.au:cs1511.lab01.kangaroo.c . 
$ ls
file.c
kangaroo.c
```
(The `.` is important, its the [destination] part of our command. `.` means the
current directory.)

### Sending between CSE accounts

Instead of `z5555555@cse.unsw.edu.au` we need to use `z5555555@login` instead

```bash
$ # currently on my cse machine
$ ls
kangaroo.c
$ # i want to send kangaroo.c to my friend, z5555555
$ scp kangaroo.c z5555555@login:cs1511/lab01
$ # i want to fetch mouse.c from my friend, z5555555
$ scp z5555555@login:cs1511/lab01/mouse.c .
```
