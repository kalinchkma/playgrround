const addon = require('./build/Release/addon');

export const DecorateObjects = (input) => {
    return addon.decorateObjects(input);
};

export const MyMethod = (input) => {
    return addon.myMethod(input);
};
