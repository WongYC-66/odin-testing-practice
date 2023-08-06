import * as myFunc from './example'

test('capitalize first character, foo => Foo', () => {
    expect(myFunc.capitalize('foo')).toMatch('Foo');
    expect(myFunc.capitalize('Foo')).toMatch('Foo');
    expect(myFunc.capitalize('fOO')).toMatch('FOO');
});

test('reverse a string, foo => oof', () => {
    expect(myFunc.reverseString('foo')).toMatch('oof');
    expect(myFunc.reverseString('palindrome')).toMatch('emordnilap');
});

test('calculate + - x / correctly', () => {
    expect(myFunc.calculator.add(3, 3)).toBe(6);
    expect(myFunc.calculator.subtract(10, 3)).toBe(7);
    expect(myFunc.calculator.divide(6, 3)).toBe(2);
    expect(myFunc.calculator.multiply(2, 4)).toBe(8);
});

test('caesarCipher works correctly, .eg. call("abc", 3) => def', () => {
    expect(myFunc.caesarCipher('abc', 3)).toMatch('def');
    expect(myFunc.caesarCipher('nobita', 1)).toMatch('opcjub');
    expect(myFunc.caesarCipher('abc', 26)).toMatch('abc');
    expect(myFunc.caesarCipher('abc', 52)).toMatch('abc');
});

test('analyze array correctly, .eg. avg = 4, min = 1, max = 8, length = 6', () => {
    const sampleAns1 = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    const sampleAns2 = {
        average: 20,
        min: 10,
        max: 30,
        length: 3
    };
    expect(myFunc.analyzeArray([1,8,3,4,2,6])).toEqual(sampleAns1);
    expect(myFunc.analyzeArray([10,20,30])).toEqual(sampleAns2);
});