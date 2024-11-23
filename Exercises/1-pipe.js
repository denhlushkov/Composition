'use strict';

const pipe = (...fns) => {
    for(const key of fns)
    {
        if(typeof key !== 'function')
        {
            throw new Error('Not all elements are function!');
        }
    }
    return (x) => fns.reduce((acc, g) => g(acc), x)
};

module.exports = { pipe };
