// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
Document.write(fruits[0]); // Output: Apple

// Adding an element to the end
fruits.push("Mango");
Document.write(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

Document.write(fruits[2])

// Removing the last element
fruits.pop();
Document.write(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating through an array
fruits.forEach(fruit => console.log(fruit));

// Finding an element
Document.write(fruits.includes("Banana")); // Output: true


