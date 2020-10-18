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

const number = new Stack();
number.add(44);
number.add(36);
number.add(10);
number.add(38);
number.add(93);
number.add(74);

console.log(number);

const removedNumber = number.remove();
console.log({ removedNumber });
console.log(number);

const guest = new Stack();
guest.add("Rahman");
guest.add("Zaman");
guest.add("Kaman");
guest.add("Kamran");
console.log(guest.stack);
const speaker = guest.remove();
console.log(speaker);
console.log(guest.stack);
