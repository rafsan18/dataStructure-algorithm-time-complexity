class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const friends = new Queue();

friends.enqueue("Batman");
friends.enqueue("Spiderman");
friends.enqueue("Superman");

console.log(friends);

const firstOut = friends.dequeue();

console.log(firstOut);
console.log(friends);
