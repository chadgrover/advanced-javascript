// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// The order is finished function, finished execution, click event!

// Finished function happens first because it's synchronous.

// 'Click event!' can't happen until after the while loop is done, because the event queue is only processed when the execution stack is empty.