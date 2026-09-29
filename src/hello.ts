interface Greeting {
    name: string;
    day: string;
}

function greet(g: Greeting): string {
    return `Hello, ${g.name}! Happy ${g.day}.`;
}

console.log(greet({ name: "Worlds", day: "Monday" }));