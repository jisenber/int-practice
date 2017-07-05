/*

Apples and oranges problem.

Fruit lands d units of distance from its tree of origin along x-axis. negative value of d indicates is fell to the left of the tree, right value indicates positive

Sam's house is on line s --> t. How many apples and oranges fall on that house

s (left edge) t (right edge)
a (apple tree) b (orange tree)
m (apples) n (oranges)
how far each apple falls from a
how far each orange falls from b

on first line: print number of apples that fall on Sam's house
on second line: print number of oranges that fall on sam's house


house is between point 7 and point 11
apple tree is at point 5, orange tree at point 15
3 apples and 2 oranges

*/

//below is my code that fit in with main

var appleCounter = 0
   var orangeCounter = 0

   for (let i = 0; i < apple.length; i++) {
       if((t >= apple[i] + a) && (apple[i] +a >= s)) {
           appleCounter += 1
       }
   }

   for (let j = 0; j < orange.length; j++) {
       if((s <= orange[j] + b) && (orange[j] + b <= t)) {
           orangeCounter += 1
       }
   }
   console.log(appleCounter)
   console.log(orangeCounter)
