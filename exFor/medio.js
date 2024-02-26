var primo = [5, 12, 8, 14, 3, 20, 31];
for (var i = 0; i < primo.length; i++) {
    if (primo[i] == 2) {
        console.log("".concat(primo[i], " \u00E9 primo"));
    }
    else if (primo[i] % 2 == 0) {
        console.log("".concat(primo[i], " n\u00E3o \u00E9 primo"));
    }
    else if (primo[i] == 3) {
        console.log("".concat(primo[i], " \u00E9 primo"));
    }
    else if (primo[i] % 3 == 0) {
        console.log("".concat(primo[i], " n\u00E3o \u00E9 primo"));
    }
    else {
        console.log("".concat(primo[i], " \u00E9 primo"));
    }
}
