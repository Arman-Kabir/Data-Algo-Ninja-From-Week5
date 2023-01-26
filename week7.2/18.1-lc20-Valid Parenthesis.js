// 20. Valid Parentheses

var isValid = function (s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let char of s) {
        console.log(char);
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (pairs[last] !== char) return false;

        }

    }
    if (stack.length) {
        return false;
    } else {
        return true;
    }
    console.log(stack);
};

console.log(isValid("()[]{}"));

// string is iterable in js