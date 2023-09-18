function a() {
  function b() {
    console.log(myVar);
	// Output is 2, because a is the outer environment of b, and a has myVar = 2
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();

// Cannot call b() from outside of a() because b() is not in the global scope.  It's in the scope of a().

// Since b doesn't have myVar, it looks to its outer environment, which is the global environment, which has myVar = 1

// Is this like prototype chain?  No, it's not.  It's scope chain.  It's not about objects, it's about functions.  It's about where the function sits lexically.  It's about where the function is written.
