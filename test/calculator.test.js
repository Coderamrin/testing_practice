const Calculator = require("../code/calculator");

test("add two integers", () => {
	expect(Calculator(2, 2).add()).toBe(4);
});

test("subtract two integers", () => {
	expect(Calculator(4, 2).subtract()).toBe(2);
});

test("divide to integers", () => {
	expect(Calculator(4, 2).divide()).toBe(2);
});

test("multiply to integers", () => {
	expect(Calculator(4, 2).multiply()).toBe(8);
});