// FizzBuzz game algorithm
function fizzBuzz(num) {
    if (num == 0) return num;
    if (!num) throw Error('Invalid param.');

    if (!(num % 3) && !(num % 5)) {
        return 'FizzBuzz';
    } else if (!(num % 3)) {
        return 'Fizz';
    } else if (!(num % 5)) { return 'Buzz' };

    return num;
}

module.exports = {
    fizzBuzz
};