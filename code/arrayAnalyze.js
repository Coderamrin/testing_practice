function analyze(array) {
	const sum = array.reduce((total, currentValue) => total + currentValue);
	const average = sum / array.length;
	const min = Math.min(...array);
	const max = Math.max(...array);
	const length = array.length;

	return {
		average,
		min,
		max,
		length
	};
}

module.exports = analyze;