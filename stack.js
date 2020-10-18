class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Rahman");
guest.add("Zaman");
console.log(guest.stack);
