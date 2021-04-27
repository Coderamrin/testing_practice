
function Calculator(a, b) {
	function add() {
		return a + b; 
	}

	function subtract() {
		return a - b;
	}

	function divide() {
		return a / b;
	}

	function multiply() {
		return a * b; 
	}

	return {
		add,
		subtract,
		divide,
		multiply
	}
}

module.exports = Calculator;