function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList () {
  this.head = null;
  this.length  = null;
}

LinkedList.prototype.append = function(element) {
  var node = new Node(element);
  // 在头部插入
  if(this.head === null) {
    this.head = node;
  } else {
    var current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length ++;
}

LinkedList.prototype.removeAt = function(index) {
  var length = this.length,
      head = this.head,
      current = head;
  
  // 边界校验
  if(index < 0  || index > length) {
    return current;
  }
  // 头部
  if(index === 0) {
    head = head.next;
  } else {
    // 其他
    var previous = head,
        current = head,
        i = 0;
    while(i < index) {
      i++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }

  length --;

  return current;
}

LinkedList.prototype.insert = function(position, element) {
  if(position < 0 || position > this.length ) {
    return null;
  }
  var node = new Node(element);
  if(position === 0) {
    this.head = node;
  } else {
    var current = this.head, 
        i = 0;
    while(i < position) {
      current = current.next;
    }

  }
  this.length ++;
  return node;
}

// remove (element)
// indexof
// isEmpty
// size
// getHead
// toString
// print



LinkedList.prototype.print = function() {
  var current = this.head;
  console.log('>>> print list:');
  while(current) {
    console.log(current);
    current = current.next;
  }
}



// test
var Link = new LinkedList();
Link.append({
  a: 1
});
Link.print();
Link.append([3, 2, 1]);
Link.print();
Link.append(5);
Link.print();
var node = Link.removeAt(1);
console.log('>>>node')
console.log(node);
Link.print();
Link.insert(0, 1);
Link.insert(1, 2);

