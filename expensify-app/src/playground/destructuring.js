const person = {
  // name: "Shock",
  age: 37,
  location: {
    city: "Taichung",
    temp: 32
  }
};

// Using '=' to be default value and ':' for renaming.
const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

// Renaming the temp variable to temperature using ':'
const { city, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${city}.`);
