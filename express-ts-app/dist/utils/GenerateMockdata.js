"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateMockdata = void 0;
class GenerateMockdata {
    constructor() {
        this.firstNames = ['Alice', 'Bob', 'Charlie', 'Diana'];
        this.lastNames = ['Smith', 'Johnson', 'Brown', 'Lee'];
    }
    getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    generateUsers(count = 10) {
        const users = [];
        for (let i = 1; i <= count; i++) {
            const first = this.getRandom(this.firstNames);
            const last = this.getRandom(this.lastNames);
            const name = `${first} ${last}`;
            const email = `${first.toLowerCase()}.${last.toLowerCase()}${i}@example.com`;
            const avatar = `https://api.multiavatar.com/${first}${i}.png`;
            users.push({ id: i, name, email, avatar });
        }
        return users;
    }
}
exports.GenerateMockdata = GenerateMockdata;
