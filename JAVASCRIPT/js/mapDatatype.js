// // Create a map to hold the items
// const itemsMap = new Map();

// // Add 5 items to the map, each with 3 attributes
// itemsMap.set(
//   "Laptop",
//   new Map([
//     ["color", "Silver"],
//     ["size", "15 inches"],
//     [
//       "details",
//       {
//         brand: "Dell",
//         weight: "2 kg",
//         model: "Inspiron 15",
//       },
//     ],
//   ])
// );

// itemsMap.set(
//   "Notebook",
//   new Map([
//     ["color", "Blue"],
//     ["size", "A4"],
//     [
//       "details",
//       {
//         brand: "Moleskine",
//         weight: "0.3 kg",
//         pages: 200,
//       },
//     ],
//   ])
// );

// itemsMap.set(
//   "Mouse",
//   new Map([
//     ["color", "Black"],
//     ["size", "Medium"],
//     [
//       "details",
//       {
//         brand: "Logitech",
//         weight: "0.1 kg",
//         model: "MX Master 3",
//       },
//     ],
//   ])
// );

// itemsMap.set(
//   "Pen",
//   new Map([
//     ["color", "Red"],
//     ["size", "Standard"],
//     [
//       "details",
//       {
//         brand: "Pilot",
//         weight: "0.02 kg",
//         type: "Gel",
//       },
//     ],
//   ])
// );

// itemsMap.set(
//   "Headphones",
//   new Map([
//     ["color", "Black"],
//     ["size", "Over-ear"],
//     [
//       "details",
//       {
//         brand: "Sony",
//         weight: "0.25 kg",
//         model: "WH-1000XM4",
//       },
//     ],
//   ])
// );

const laptop = new Map();

const featuresObj = { color: "#868e96", Keyboard: "RGB", mouse: "Generic" };
const specObj = { brand: "Lenovo", cpu: "Intet i7 9750h", gpu: "RTX 2060" };

laptop.set("spec", specObj).set(featuresObj, "features");

console.log(laptop.get(featuresObj), laptop.size);
