const capitalize = require('./capitalize');

test('capitalize a string eg. hello to Hello', () => {
	expect(capitalize("hello")).toBe("Hello");
})
 