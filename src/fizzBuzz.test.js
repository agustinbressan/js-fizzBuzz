const { fizzBuzz } = require('./fizzBuzz');

test('given empty as param, when fizzBuzz is executed, it should return an Error', () => {
    try {
        fizzBuzz();
    } catch (err) {
        expect(err.message).toBe('Invalid param.');
    }
});

test('given null as param, when fizzBuzz is executed, it should return an Error', () => {
    try {
        fizzBuzz(null);
    } catch (err) {
        expect(err.message).toBe('Invalid param.');
    }
});

test('given a 0 as param, when fizzBuzz is executed, it should return a 0', () => {
    const result = fizzBuzz(0);
    expect(result).toBe(0);
});

test('given a 7 as param, when fizzBuzz is executed, it should return a 7', () => {
    const result = fizzBuzz(7);
    expect(result).toBe(7);
});

test('given a 3 as param, when fizzBuzz is executed, it should return Fizz', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
});

test('given a 5 as param, when fizzBuzz is executed, it should return Buzz', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
});

test('given a 15 as param, when fizzBuzz is executed, it should return FizzBuzz', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
});

test('given a 30 as param, when fizzBuzz is executed, it should return FizzBuzz', () => {
    const result = fizzBuzz(30);
    expect(result).toBe('FizzBuzz');
});