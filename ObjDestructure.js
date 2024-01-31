//object destrucrting

const person = {
  name: "yash bhide",
  age: 30,
  hobbies: ["coding", "reading", "hiking"]
};

// Destructure the name property and the hobbies array
const { name, hobbies: [hobby1, hobby2, ...otherHobbies] } = person;

console.log(name);          // Output: John Doe
console.log(hobby1);       // Output: coding
console.log(hobby2);       // Output: reading
console.log(otherHobbies); // Output: ["hiking"]