var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function (item) {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("John");
nameQueue.add("Doe");
var numberQueue = new Queue();
numberQueue.add(1);
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = [];
    }
    Stack.prototype.addData = function (item) {
        this.data.push(item);
    };
    Stack.prototype.removeData = function (item) {
        this.data.pop();
    };
    return Stack;
}());
var dataStack = new Stack();
dataStack.addData("John");
// generic function
function genericFunction(param) {
    return param;
}
//decorator
