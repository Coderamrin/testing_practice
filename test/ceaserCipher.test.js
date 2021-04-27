const ceasar = require("../code/ceaserCipher");

test("wrappe from hello to ifmmp", () => {
	expect(ceasar("hello", 1)).toBe("ifmmp");
}); 

test("wrappe from Z to A", () => {
	expect(ceasar("Z", 1)).toBe("A");
});


 