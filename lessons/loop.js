const messages = ["pm", "am", "hello"]

function doesMessageInclude(check) {
    if (messages.some(message => messages.includes("am"))) {
        return console.log("true");
    } else if (messages.some(message => messages.includes("pm"))) {
        return console.log("true");
    } else {
        return console.log("fasle")
    }
}

