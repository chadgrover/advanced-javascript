function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// Since b doesn't have myVar, it looks to its outer environment, which is the global environment, which has myVar = 1

// Is this like prototype chain?  No, it's not.  It's scope chain.  It's not about objects, it's about functions.  It's about where the function sits lexically.  It's about where the function is written.

