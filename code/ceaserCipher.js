 const alphabet = [
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 
  'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 
  'y', 'z'
];

function encrypt(char, shift) {
	if (alphabet.includes(char.toLowerCase())) {
		const position = alphabet.indexOf(char.toLowerCase());
		const newPosition = (position + shift) % 26;

		if (char.toUpperCase() === char) {
			return alphabet[newPosition].toUpperCase();
		}else {
			return alphabet[newPosition];
		}
		
	}else { 
		return char;
	}
}

function ceasar(string, shift) {
	const newString = [];
	for (i = 0; i < string.length; i++) {
		newString.push(encrypt(string[i], shift));
	}

	return newString.join("");
}

module.exports = ceasar;
 