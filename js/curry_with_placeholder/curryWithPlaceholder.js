const merge = (oldArgs, newArgs) => {
    const result = [];

    let p1 = 0;
    let p2 = 0;

    while (p1 < oldArgs.length || p2 < newArgs.length) {
        if (p1 >= oldArgs.length) {
            result.push(...newArgs.slice(p2));
            break;
        }

        if (p2 >= newArgs.length) {
            result.push(...oldArgs.slice(p1));
            break;
        }

        if (oldArgs[p1] !== _) {
            result.push(oldArgs[p1]);
            p1++;
            continue;
        }

        if (oldArgs[p1] === _) {
            if (newArgs[p2] === _) {
                result.push(_);
            } else {
                result.push(newArgs[p2]);
            }
            p1++;
            p2++;
            continue;
        }
    }

    return result;
};

const curryWithPlaceholder = fn => {
    const curry = (...allOldArgs) => {
        const isAllArgsNotPlaceholders = allOldArgs.slice(0, fn.length).findIndex(value => value === _) === -1;
        if (allOldArgs.length === fn.length && isAllArgsNotPlaceholders) return fn(...allOldArgs);

        return (...newArgs) => {
            const joinedArgs = merge(allOldArgs, newArgs);
            return curry(...joinedArgs);
        };
    };

    return curry;
};

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};

const curriedJoin = curryWithPlaceholder(join);
curryWithPlaceholder.placeholder = Symbol();
const _ = curryWithPlaceholder.placeholder;

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(2)(1, 3)); // '2_1_3'
console.log(curriedJoin(1)(3)(2)); // '1_3_2'

console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
