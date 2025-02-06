// Creating an object
let person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Accessing properties
Document.write(person.name); // Output: John

// Modifying properties
person.age = 26;
Document.write(person.age); // Output: 26

// Adding a new property
person.country = "USA";
Document.write(person); 

// Looping through an object
for (let key in person) {
    Document.write(`${key}: ${person[key]}`);
}

// Checking if a property exists
Document.write("city" in person); // Output: true
