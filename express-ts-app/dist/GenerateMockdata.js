"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUsers = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee'];
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generateMockUsers(count = 10) {
    const users = [];
    for (let i = 1; i <= count; i++) {
        const first = getRandom(firstNames);
        const last = getRandom(lastNames);
        const name = `${first} ${last}`;
        const email = `${first.toLowerCase()}.${last.toLowerCase()}${i}@example.com`;
        const avatar = `https://api.multiavatar.com/${first}${i}.png`;
        users.push({ id: i, name, email, avatar });
    }
    return users;
}
exports.mockUsers = generateMockUsers(5);
