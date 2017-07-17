//print all the elements of a linked list. done recursively.

function print(head) {
  if(!head) return;
  console.log(head.data);
  print(head.next);

}
