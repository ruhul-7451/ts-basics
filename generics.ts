class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove(item: T) {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add("John");
nameQueue.add("Doe");

const numberQueue = new Queue<number>();
numberQueue.add(1);

class Stack<T> {
  private data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }

  removeData(item: T) {
    this.data.pop();
  }
}

const dataStack = new Stack<string>();
dataStack.addData("John");

// generic function
function genericFunction<T>(param: T) {
  return param;
}

//decorator
