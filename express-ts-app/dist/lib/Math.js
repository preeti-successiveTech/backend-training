"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
const lodash_1 = __importDefault(require("lodash"));
function add(num1, num2) {
    return lodash_1.default.add(num1, num2);
}
function sub(num1, num2) {
    return lodash_1.default.subtract(num1, num2);
}
function mult(num1, num2) {
    return lodash_1.default.multiply(num1, num2);
}
function div(num1, num2) {
    return lodash_1.default.divide(num1, num2);
}
