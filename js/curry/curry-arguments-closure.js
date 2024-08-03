function curry(fn) {
    const curried = (...args) => {
        // resultFunction
        if (args.length >= fn.length) return fn(...args);

        // anonymFunction
        return (...restArgs) => {
            return curried.apply(null, [...args, ...restArgs]);
        };
    };

    return curried;
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
console.log(curriedJoin(1)(2)(3)); // '1_2_3'

const sumOfFour = (a, b, c, d) => {
    return a + b + c + d;
};

const curriedSumOf4 = curry(sumOfFour);
console.log(curriedSumOf4(5)(3)(3)(2));

const step1 = curriedSumOf4(5);
const step2 = step1(3, 3);
const step3 = step2(3);
console.log(step3);

// // step1
// curried, args = 5
// return anonymousFunction
// // step2
// curried, args = 5, 3, 3
// return anonymousFunction
// // step3
// curried, args = 5, 3, 3, 2
// return resultFunction
