// Execution Context, in the Creation Phase, sets variables to undefined.

// var a;
// Throws a reference error because a is not set up in the global execution context.

var a;
// Now, a is taking up memory space in the global execution context.
console.log(a);

// undefined simply means that the variable has not been assigned a value.


// undefined isn't in quotes because it's a keyword in JavaScript.
if (a === undefined) {
    console.log('a is undefined!');
} else {
    console.log('a is defined!');
}

// When debugging code, it's best practice to NOT set variables to undefined.

// undefined should mean "I never set the value for this variable."