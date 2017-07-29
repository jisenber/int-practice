function insert(head, data) {
  node = new Node(data);
  if (!head) {
    head = node;
    return head;
  }
  let end  = traverse(head);
  end.next = node;
  return head;
}

function traverse(node) {
  if(!node.next) return node;
  node = node.next;
  return traverse(node);
}
