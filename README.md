# Code 301: Intermediate Software Development

Welcome to Code 301! This is a class that builds on your fundamental knowledge of HTML, CSS, JavaScript, git, and general web development, to prepare you for the deep dive of any Code 401 class.

# Introduction

We are going to learn about many different topics of web development. The overall structure of the course is based on Model-View-Controller (MVC), which is a common design pattern for web applications.

The general course schedule is:

Full Time  | Part Time    | Topic
-----------|--------------|---------------
Week 1     | Week 1 and 2 | The View
Week 2     | Week 3 and 4 | The Model
Week 3     | Week 5 and 6 | The Controller
Week 4     | Week 7 and 8 | Your Project

## Slides from class

Slides will be placed in each class' lecture-code subdirectory after they are presented.

Slides will be in PDF format with presenter notes for re-viewing.

## Assignments

Lab-time code assignments follow each class time. You can find these assignments in the subdirectories of each class folder. Generally, you'll have a "pair" assignment that you'll work on with a classmate, and an individual "sandbox" assignment in which you'll build up your own online portfolio. Useful for your coming career change!

Instructions for completing and submitting the assignments can be found in the README files of the appropriate subdirectories.

Assignments are submitted using a professional-grade git-flow. If you haven't done so already, it's time to get comfortable with the core git commands. Don't worry, we'll give you step by step help as needed.

# Required Computer Setup

## Install Atom

If you haven't already, install [Atom](https://atom.io). If you have used an advanced text editor like Sublime Text, then Atom will feel familiar to you. Atom is free, open-source, cross-platform, and has a wide array of useful plug-ins available. Please use Atom during Code 301. (And yes...if you are proficient with another text editor that you *love*, you may use that instead)

[Atom's documentation](https://atom.io/docs/latest) is top-notch. Review it now to familiarize yourself with the basics. Make sure you're looking at the docs for the latest version.

## Install Node

*Note* If you get an error while installing these packages such as "try again as root/administrator", you may need to use the `sudo` command to get administrator access. For example `sudo apt-get install nodejs`.

#### Linux instructions

  To install Node, open your Terminal, and copy and paste the following line, then hit Enter:

  `apt-get install nodejs`

  If this did not work, try the following:

  `curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -`

  It will churn away for a while, and then once it's done you can run the following command:

  `sudo apt-get install nodejs`

  If, once again, you did not achieve success, try [these instructions to build from source](https://gist.github.com/toastynerd/d3e563522977f6750c32).



#### Mac instructions

  If you took Code 201, you should already have Homebrew installed. If you have not, follow the guide on [this page](https://github.com/codefellows/code-201-prework/blob/master/prework/mac/2_homebrew.md#install-homebrew).

  To install Node, open your Terminal, and enter:

  `brew install node`

#### Windows instructions

  To install Node, go [here](https://nodejs.org/en/download/), and then download and run the Windows Installer. Make sure you do not deselect any of the Node components such as NPM during the installation.

### Verify the Node installation
Now let's verify that it is installed. Enter the following into your terminal:

`node -e 'console.log("works")'`

You should get a response that says "works". If not, try reinstalling Node again

## Install eslint and live-server Node packages

Now that you have Node installed, you can install Node packages using its package manager, **NPM**. Open your Terminal (Git Bash on Windows) and enter:

`npm -g i eslint live-server`

You should see a lot of feedback as it installs.

### Verify the Node packages installation
Now let's verify that it is installed. Enter the following into your terminal:

`npm list -g --depth=0`

You should get a list back that includes `live-server` and `eslint`.

![](http://i.imgur.com/1ITioP1.png)

### What is this linter thing?

Linting is the process of running a program that will analyze code for potential errors. It is an important part of the quality assurance process.

> `lint` was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language.

That means the linter is your friend! It will help you write syntactically correct code, so you can catch errors in your text editor, rather than having to hop over the browser, refresh your page, and search for errors. Faster feedback makes for happier developers (that's you!).

## Install linter and linter-eslint Atom packages

For this next part, you will have Atom's package manager **apm** install some packages. Go [here](https://atom.io/docs/v0.194.0/using-atom-atom-packages#command-line) to verify it's enabled. Once you have verified that apm commands will work, enter this on your Terminal:

`apm install linter linter-eslint`

You should get two success messages while it installs the linter and linter-eslint packages.

### Verify the Atom packages installation
Enter the following into your Terminal:

`apm ls`

 ![](http://i.imgur.com/Jlv6LeP.png)

 You should get a long list and at the end you should get a list of packages you installed for Atom. Linter and linter-eslint should be on that list.

Congrats! You're all done.

Cody was here.
