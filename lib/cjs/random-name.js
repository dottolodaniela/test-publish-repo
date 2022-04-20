"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = void 0;
const randomName = () => {
    const names = ['Dwight Schrute', 'Jim Halpert', 'Pam Beesly', 'Michael Scott'];
    return names[Math.floor(Math.random() * names.length)];
};
exports.randomName = randomName;
