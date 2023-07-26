//console.log(process.argv);

/*
'C:\\Program Files\\nodejs\\node.exe',
    'c:\\Users\\UZVIDTI\\Desktop\\nodejs\\node\\demo1.js'

The process.stdin property is an inbuilt application programming interface of the process 
module which listens for the user input. The stdin property of the process object is a Readable Stream.
 It uses on() function to listen for the event.

Syntax:
            {  process.stdin.on(); }
Return Value: It doesn’t return any value.

Parameters: This property takes Input from the user.



The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and 
is treated as falsy for boolean operations


    */
const x  = 12;
const y = 800;
var str = null;
const inp = process.stdin.on('connection', (str) => {

    console.log(`${str ? 'No connection yet': str } connected`)
})

process.on("exit", function (){

    process.stdout.write("\n\n\n");
    process.stdout.write(
        `Go ${x} = horizontal ${y} vertical and input
         is ${!str ? 'No connection yet': str}`
    )
})


// Node.js program to demonstrate the
// process.stdin Property

// Enter any texts ( User input)
process.stdin.on('data', (data) => {
    console.log(`You typed ${data.toString()} are you crazy!`);
    process.exit();
    });
    



// Node.js program to demonstrate the
// process.stdin Property

process.stdin.on('readable', () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
    }
    });
    


    // Require fork method from child_process
// to spawn child process
const fork = require('child_process').fork;

// Child process file
const child_file = 'demo.js';

// Spawn child process
const child = fork(child_file);

// Start listening to the child process
child.on('message', message => {

	// Message from the child process
	console.log('Message from child:', message);
});

///----------------------------------------------

console.log('In Child.js')

// If the send method is available
if(process.send) {

	// Send Hello
	process.send("Hello, this is child process.");

	// Send multiple messages
	setTimeout((function() {
		return process.send("This was send after 1 second.");
	}), 1000);

	setTimeout((function() {
		return process.send("This was send after 2 seconds.");
	}), 2000);

	setTimeout((function() {
		return process.send("This was send after 3 seconds.");
	}), 3000);
}
