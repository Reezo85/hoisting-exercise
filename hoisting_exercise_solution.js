/* Task 1: Declare a Destination Variable */
let destination = "Ancient Egypt"; 
console.log("Destination:", destination); 
// Output: "Destination: Ancient Egypt"


/* Task 2: Change the Destination */
destination = "Medieval Europe"; 
console.log("New Destination:", destination); 
// Output: "New Destination: Medieval Europe"


/* Task 3: Declare a Constant Travel Date */
const travelDate = "2024-03-15";
console.log("Travel Date:", travelDate);

// Trying to reassign will throw an error
// travelDate = "2025-01-01"; ❌ Uncommenting this line causes: 
// TypeError: Assignment to constant variable.
/*
 * Observations:
 * Variables declared with const cannot be reassigned.
 * The initial value is fixed, and trying to change it results in a TypeError.
 */


/* Task 4: Experiment with Variable Hoisting */
console.log("Time Machine Model before declaration:", timeMachineModel);
var timeMachineModel = "T-800"; 
console.log("Time Machine Model after declaration:", timeMachineModel);

/*
 * Observations:
 * When using `var`, the declaration is hoisted (moved to the top of the scope),
 * but its value is not initialized. 
 * So the first console.log prints `undefined`.
 * After assignment, it prints "T-800".
 */
