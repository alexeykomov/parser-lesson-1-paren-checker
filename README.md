# Paren checker
This is the first in series of lessons of how to build parsers.

Suppose, we have test string: ```'(({sdsd[]})'```.

Here, we build program that checks whether every open paren (or curly, or bracket) matches closing one on the same level. In other words, syntax ```'((())) [[[]]]'``` is right, but ```((([[[ )))]]]``` is not. 
