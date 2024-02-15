const unitSelector = document.getElementById("unit-selector");
const valueSelector = document.getElementById("value-selector");

const resultText = document.getElementById("result-text");

const conversions = {
    "kilometres": 25000/7,
    "metres": 25/7,
    "centimetres": 0.25/7,
    "millimetres": 0.025/7,
    "miles": 1/0.000173984,
    "yards": 1/0.306212,
    "feet": 1/0.918635,
    "inches": 1/11.0236,
}; // (e.g. metres = 25/7, so 1 metre = 25/7 studs)

function update() {
    if (conversions[unitSelector.value]) {
        const conversionResult = Math.round((valueSelector.value*conversions[unitSelector.value])*10000)/10000; // Rounded to avoid annoying javascript bugs with division

        resultText.innerText = conversionResult + " studs";
    }
}

window.onclick = update;
valueSelector.oninput = update;