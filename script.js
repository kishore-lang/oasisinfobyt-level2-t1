let screen = document.getElementById("screen");

function append(value) {
    if (screen.value === "0") {
        screen.value = "";
    }
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}

// Enable keyboard input
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || "+-*/.%".includes(e.key)) {
        append(e.key);
    }
    if (e.key === "Enter") {
        calculate();
    }
    if (e.key === "Backspace") {
        deleteLast();
    }
    if (e.key === "Escape") {
        clearScreen();
    }
});
