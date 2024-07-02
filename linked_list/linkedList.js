class LinkedList {
  length = 0;
  head = null;
  tail = null;

  add(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  search(index) {
    return this.#search(index)[1]?.value;
  }

  #search(index) {
    let count = 0;
    let current = this.head;
    while (count < index && current) {
      current = current.next;
      count++;
    }
    return [current?.prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (!current) return undefined;

    if (prev) {
      prev.next = current.next;
    } else {
      this.head = current.next;
    }

    if (current.next) {
      current.next.prev = prev;
    } else {
      this.tail = prev;
    }

    this.length--;
    return this.length;
  }

  searchReverse(index) {
    return this.#searchReverse(index)[1]?.value;
  }

  #searchReverse(index) {
    let count = 0;
    let current = this.tail;
    while (count < index && current) {
      current = current.prev;
      count++;
    }
    return [current?.next, current];
  }
}

class Node {
  next = null;
  prev = null;

  constructor(value) {
    this.value = value;
  }
}

// test code
const ll = new LinkedList();

ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
ll.add(6); // 6

console.log(ll.search(4)); // 5
console.log(ll.searchReverse(4)); // 2

ll.remove(4);
console.log(ll.search(4)); // 6

ll.remove(4);
console.log(ll.search(4)); // undefined

console.log(ll.remove(4)); // undefined

console.log("end!");
