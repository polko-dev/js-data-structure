class LinkedList {
  // constructor(length) {
  //   this.length = length;
  // }

  // shorten by new js grammer
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }
  search(index) {
    return this.#search(index)[1]?.value;
  }
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // when index is 0
      this.head = current.next;
      this.length--;
      return this.length;
    }
    // if you can't find target index to delete, then you don't need to do anything.
    // else {
    //   return undefined;
    // }
  }
}

class Node {
  next = null;
  // 외부에서 받는 데이터는 constructor 사용해줘야 함.
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();

ll.length;
ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
ll.add(6); // 6
console.log(ll.search(6)); // undefined
ll.remove(4);
console.log(ll.search(4)); // 6
ll.remove(4);
console.log(ll.search(4)); // undefined
console.log(ll.remove(4)); // undefined
console.log("end!");
