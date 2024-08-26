function myFunction() {
  // Grab the values from the input fields
  let nameValue = document.getElementById("name").value;
  let ageValue = document.getElementById("age").value;

  // Combine the strings to form a complete message
  let message =
    "Hello, my name is " + nameValue + " and I am " + ageValue + " years old.";

  // Change the innerHTML of the pTag to display the message
  document.getElementById("p").innerHTML = message;
}

console.log("Hi");

// Create a Map to store items
let itemsMap = new Map();

// Add items with attributes
itemsMap.set("Laptop", {
  color: "Silver",
  size: "15-inch",
  features: { brand: "Apple", model: "MacBook Pro" },
});

itemsMap.set("Book", {
  color: "Blue",
  size: "Medium",
  features: { title: "JavaScript Guide", pages: 450 },
});

itemsMap.set("Phone", {
  color: "Black",
  size: "6-inch",
  features: { brand: "Samsung", model: "Galaxy S21" },
});

itemsMap.set("Bottle", {
  color: "Green",
  size: "1 liter",
  features: { material: "Stainless Steel", brand: "Thermos" },
});

itemsMap.set("Chair", {
  color: "Brown",
  size: "Standard",
  features: { material: "Wood", type: "Recliner" },
});

// Function to print all items and their attributes
function printAllItems() {
  for (let [item, attributes] of itemsMap) {
    console.log(`${item}:`, attributes);
  }
}

// Function to print attributes of a specific item
function printItemAttributes(item) {
  if (itemsMap.has(item)) {
    console.log(`${item} attributes:`, itemsMap.get(item));
  } else {
    console.log(`${item} not found.`);
  }
}

// Example usage:
printAllItems();
printItemAttributes("Phone");
