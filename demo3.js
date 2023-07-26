const waitTime = 3000 ; //3 secs
console.log(`Setting a ${waitTime/1000} second Delay`);
const timeElapsed = () => console.log('Done...');
setTimeout(timeElapsed, waitTime);
/*

The purpose of setTimeout function is to execute a piece of code after a certain interval of time. The setTimeout() function accepts two arguments. 
The first argument is a function and the second argument is time in milliseconds. 

------------------
The setInterval() method helps us to repeatedly execute a function after a fixed delay.
It returns a unique interval ID which can later be used by the clearInterval() method which stops further repeated execution of the function. 


const intervalId = setInterval(func, 
    [delay, arg1, agr2, ..., argN]);
func is the function that we want to execute repeatedly after delay milliseconds.
delay (optional parameter) is the number of milliseconds delay between 
two repeated execution of the function.
arg1, …, argN (optional parameter) are the arguments that will be passed to func when it is executed
*/


let count = 0;

const intervalId = setInterval(() => {
console.log('HELLO GEEK');
count++;

if (count === 5) {
	console.log('Clearing the interval id after 5 executions');
	clearInterval(intervalId);
}
}, 1000);

///---------------setInterval