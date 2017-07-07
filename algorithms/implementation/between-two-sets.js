//two sets of positive integers, A and B. positive integer x is betweens sets A and B if the following conditions are satisfied

/*
All elements in A are factors of x
x is  factor of all elements in B

Given A and B, find the number of integers that are between the two sets

first line contains two space separated integers describing the respective values of n and m, (number of elements in A and B respectively)

*/

//checkArr has all the possible answers
//for all checkArr[i]
//all sortedA[j] must be a factor of checkArr[i]
 //else: checkArr++ (see labeled for loops)
 //if all sorted[B] factors into checkArr[i]
  //counter +=1
  //else break statement
