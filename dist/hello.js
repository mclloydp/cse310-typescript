"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(g) {
    return `Hello, ${g.name}! Happy ${g.day}.`;
}
console.log(greet({ name: "Worlds", day: "Monday" }));
