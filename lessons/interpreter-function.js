function interpretTime(message) {
    const timeResult = {
        hour: null,
        minutes: null,
        period: null,
        period: null,
        status: "missing"
    };
    return timeResult;
}

let message = "dentist tomorrow at 8pm"

const interpretedTime = interpretTime(message);

console.log(interpretedTime);