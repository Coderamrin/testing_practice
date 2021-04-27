function reverseString(string) {
	const reversedStir = string.split("")
								.reverse()
								.join("");

	return reversedStir;
}

module.exports = reverseString; 