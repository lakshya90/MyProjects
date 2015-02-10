/**
 * 
 */

var results = [];

function generateFibonacciSeries(n) {
	results.length = 0;
	for (var i = 0; i < n - 1; i++) {
		results.push(calculateNextFibonacciValue(i));
	}

	postMessage(results);
}
function calculateNextFibonacciValue(n) {
	var s = 0, returnValue;
	if (n == 0) {
		return s;

	}
	if (n == 1) {
		s += 1;
		return s;

	} else {
		return (calculateNextFibonacciValue(n - 1) + calculateNextFibonacciValue(n - 2))
	}

}
function messageHandler(e) {
	if (e.data > 0) {
		generateFibonacciSeries(e.data);
	}

}
addEventListener("message", messageHandler);