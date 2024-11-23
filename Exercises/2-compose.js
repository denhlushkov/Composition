'use strict';

const compose = (...fns) => {
    const trash = [];
    const com = (x) => {
        if(fns.length === 0) return x;        
        const end = fns.length - 1;
        let fin = x;

        try
        {
            for(let i = end; i >= 0; --i){
                fin = fns[i](fin);
            }
            return fin;
        }catch(error) 
        {
            for(const num of trash)
            {
                num(error);
            }
            return undefined;
        }
    };
    com.on = (id, num) => {
        if(id === 'error') trash.push(num);
    };
    return com;
};

module.exports = { compose };
