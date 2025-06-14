"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumber(a, b) {
    return a + b;
}
console.log(addTwoNumber(2, 2));
function upperCase(str) {
    return str.toUpperCase();
}
console.log(upperCase('hello'));
var removeSpace = function (str) {
    var result = '';
    var strArray = str.split('');
    strArray.forEach(function (str) {
        if (str !== ' ') {
            result = result + str;
        }
    });
    return result;
};
console.log(removeSpace('hello world'));
