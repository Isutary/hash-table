import hashTable from "./hashtable.js";

let group = Object.create(hashTable);

group.setup(3);

group.put("John", {
    name: "John",
    age: 22
});
group.put("Jolly", {
    name: "Jolly",
    age: 30
});

console.log(group.find("John")); // { name: "John", age: 22}
console.log(group.includes("Sam")); // false
console.log(group.remove("John")); // true

for (let element of group) {
    console.log(element.value);
}

// { name: "Jolly", age: 30}