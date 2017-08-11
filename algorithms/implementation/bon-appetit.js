/*
You order n items at a restaurant
Anna doesn't want to eat item k because of an allergy

You are given n, k, the cost of each of the n items, and the total amount of money that brian charged Anna for her portion of the bill.

If the Bill is fairly split, print Bon Appetit, otherwise print the amount that Brian must refund Anna

n = number of items ordered
k = 0 based index of item Anna did not eat
next line is an array of costs
last line  = amount brian charged anne

strategy:

get sum of array of costs / 2
get sum of array of costs - k
run conditional logic to see if brian owes Anne money or if the charge is fair.
*/

function bonAppetit(n, k, b, ar) {
  let totalCost = ar.reduce(function(a,b) {
    return a+b;
  });
  let totalShared = totalCost - ar[k];
  if ((ar[k] === 0) && (b === totalCost/2) ) {
    return 'Bon Appetit'; //edge case
  }
  if((ar[k] > 0) && (b > totalShared/2)) {
    let moneyOwed = (b - totalShared/2);
    return moneyOwed;
  } else {
        //This kind of logic would be bug prone, but I'm using it because of the constraints in the problem
    return 'Bon Appetit';
  }

}
