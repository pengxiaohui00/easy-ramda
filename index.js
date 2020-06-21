export const curry = (fn, arr = []) =>
    (...args) => {
        const arg = [...arr, ...args]
        return arg.length >= fn.length ? fn(...arg) : curry(fn, arg)
};

export const map = (fn, arr = []) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
};

export const find = (fn, arr = []) => {
    const res = [];
    for (let i = 0; 0 < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
            return res;
        }
    }
};

export const filter = (fn, arr = []) => {
    const res = [];
    for (let i = 0; i <= arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
};

 export const compose = (...fns) => {
    const len = fns.length;
    let count = len - 1;
    let res;
    return fn = (...args) => {
        res = fns[count].apply(this, args);
        if (count <= 0) {
            count = len - 1
            return res
        }
        count--
        return fn.call(null, res)
    }
}

export const pipe = (...fns) => {
    const len = fns.length;
    let count = 0;
    let res;
    return fn = (...args) => {
        res = fns[count].apply(this, args);
        if (count === len - 1) {
            return res
        }
        count++;
        return fn.call(null, res)
    }
}

export  const clone = (target) => {
    let res;
    if (typeof target === 'object') {
        if (Array.isArray(target)) {
            res = [];
            for (let i in target) {
                res.push(clone(target[i]))
            }
        } else if (target === null) {
            res = null;
        } else if (target instanceof Date) {
            res = target;
        } else {
            res = {};
            for (let i in target) {
                res[i] = clone(target[i]);
            }
        }
    } else {
        res = target;
    }
    return res;
}

export   const call = (...arg) => {
    const fn = arg.shift();
    const args = arg;
    return fn(...args)
}

export  const apply = (fn, args) => {
    return fn(...args)
}

export const isObject = (x) => (typeof x === "object") && (x.constructor === Object);
export const isArray = (x) => (typeof x === "object") && (x.constructor === Array);

export const mergeDeepRight = (target, source) => {
    for (let key in source) {
        if (source.hasOwnProperty(key) === true) {
            // console.log(target[key], source[key])
            res1 = isObject(target[key]);
            res2 = isObject(source[key]);
            // console.log(res1, res2)
            if (res1 && res2) {
                return mergeDeepRight(target[key], source[key])
            }
            target[key] = source[key];
        }
    }
};