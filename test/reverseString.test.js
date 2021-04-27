const reverseString = require("../code/reverseString");

test("reverse a string eg. hello to olleh", () => {
	expect(reverseString("Hello")).toBe("olleH");
});
