
### Four-Fours - First Java Coding assignment!
You might have written programs before in some language like Scratch, Python, or Javascript. In many ways Java programming is similar, but you will notice immediately that even a basic Java "Hello, World!" program looks pretty confusing and complicated. Here's a Java program that prints "Hello, You!". Press the Run button and the program output should appear to the right of the code in the Result Tab. This is called the "console" where the text output and errors from the Java program appears.  Try editing the code in the left side to change the output to say Hello to your name (instead of You) and press the Run button.
<iframe src="https://trinket.io/embed/java/568a63bc9d" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
Luckily though, one line of code in this program is much more important and interesting than all the rest. For now we are just interested in

````System.out.println("Hello, World!");````

We will ignore everything else. This line of code an example of a Java statement. If we think of Java as a language like English, a statement is like a sentence. The same way a period ends an English sentence, a semi-colon marks the end of of a Java statement.
"Hello World!" is an example of a Java String. A String is a collection of letters, digits, punctuation and/or spaces. The beginning and end of the String are marked with double quotes (").

````print() vs println()````

System.out.println() prints first and then inserts a newline character so that whatever is printed next is printed on the next line. Run the following code and you'll notice top and bottom are printed on separate lines.

<iframe src="https://trinket.io/java/529f1af02f" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Java has another printing function. System.out.print() which does NOT insert a newline. Change the first statement to System.out.print("Top"); Then run the program to make sure that "Bottom" is printed on the same line as "Top". The output should now look like "TopBottom".

Now try inserting a newline character by typing \n before Bottom like so "\nBottom" and Run again - what do you see?

## Comments

Lines that begin with two slashes // are ignored by Java. Multiple lines are ignored if they are between /* and */. Comments have no effect on the execution of the program. They are used to create notes to yourself or other programmers. They make it easier for other programmers (and your future self) to understand what you meant to do. As your teacher, I'll sometimes give you some unfinished code with the instructions for completing it in comments.

<iframe src="https://trinket.io/java/2e8d228b76" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Arithmetic operators and parentheses

Symbols such as + - * / are called arithmetic operators and are used for addition, subtraction, multiplication and division. Parentheses work in Java just like normal arithmetic 1 + 4 * 2 evaluates to 9, (1 + 4) * 2 evaluates to 10. See [PEMDAS Order of Arithmetic Operations](https://www.mathsisfun.com/operation-order-pemdas.html) for help

## Literals vs Expressions

Double quotes around text tells Java it is an literal. Java will print a literal exactly as written. Here’s a literal "4/4". If I write the same thing without double quotes it's called a expression. Java evaluates expressions to find a result. Run the following program and you will see that Java prints the literals exactly as they are written (including spaces!), and evaluates the expression first and then prints the result.

<iframe src="https://trinket.io/java/72f8909e4c" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Debugging Error Messages

Errors in programs are called “bugs.” The process of fixing program errors is called “debugging.” When you try to run a Java program with a bug you will often get an error message. When you are learning a new programming language, you will make many errors. Errors are ok, just fix them and move on. For example, I wanted the following program to display my first name "Chandru."

<iframe src="https://trinket.io/java/f6dcd4190d" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Instead of printing my name, the program shows an error message when it runs. In this case I get a message SyntaxError.java: followed by a number. The number tells me what line the computer was confused about. The message is telling me I forgot to put double quotes around my name like "Chandru"

## Formatting Java Code with Spaces

In Java programs, some spaces are required. For example, you need at least one space between keywords like public, class, static, and void The program below is not legal. Run it and you will get an error message that says so.


<iframe src="https://trinket.io/java/c6a9d2a94f" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Other spaces are optional. Here is another version of the program. It runs, but it is difficult to read the code because it is written on one line with no indentation! It's cruel! We use spaces like indentation to make programs easier to read and debug for all.

<iframe src="https://trinket.io/java/f263d7aa56" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Assignment: Four 4s challenge

Use exactly four 4's to write an expression that evaluates to every integer from 1 to 10, using only the four arithmetic operators + - * / and (). No decimals, factorials, square roots, exponents, or other symbols are allowed. The first one has already been done for you. Submit the link to your finished program by choosing Share Link. Go to the [CPJava Google Classroom](https://classroom.google.com/u/1/c/MTI2MDgzMTM2MDgw) and and then choose Add Link to submit the assignment. Don't forget to click the Turn In button. If you have extra time, see if you can get the numbers after 10; 11, 12, 13 and so on.

<iframe src="https://trinket.io/java/bd6e15d01f" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Here are some clues:
* Arithmetic expressions are evaluated using [Order of Operations PEMDAS](https://www.mathsisfun.com/operation-order-pemdas.html) - Parenthesis, Exponentiation, Multiplication, Division, Addition, Subtraction
* To get the number 3 you could try: (4 + 4 + 4)/4
* To get 4 you can try 4 + 4/44 (why does this work?)
* etc ..

