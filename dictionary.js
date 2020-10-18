class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add("Janet", "01725645752");
phoneBook.add("Kazi", "01823654965");
phoneBook.add("Forest", "01925645752");
phoneBook.add("Marsha", "01525645752");

console.log(phoneBook.dictionary);

const marshaPhn = phoneBook.get("Marsha");
console.log("Phone Number of Marsha ", marshaPhn);
