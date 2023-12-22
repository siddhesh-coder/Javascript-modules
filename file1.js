// Dummy function 1
export function greet(name) {
    return `Hello, ${name}!`;
}

// Dummy function 2
export function square(num) {
    return num * num;
}

// Dummy function 3
export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dummy function 4
export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
