const availableColors = ["oklch(0.55 0.169 292.579)", "oklch(0.55 0.169 270.951)", "oklch(0.55 0.169 253.402)", "oklch(0.55 0.169 317.152)", "oklch(0.55 0.169 20.103)", "oklch(0.55 0.169 37.19)", "oklch(0.55 0.169 0.772)", "oklch(0.55 0.169 146.943)", "oklch(0.55 0.169 137.674)"];

const availableShadows = ["0.55 0.0845 292.579", "0.55 0.0845 270.951", "0.55 0.0845 253.402", "0.55 0.0845 317.152", "0.55 0.0845 20.103", "0.55 0.0845 37.19", "0.55 0.0845 0.772", "0.55 0.0845 146.943", "0.55 0.0845 137.674"];

let color;
let chosenColorPosition;
let shadowColor;

function getThemeColor(arr) {
   const selected = Math.floor(Math.random() * arr.length);
   chosenColorPosition = selected;
   return availableColors[selected];
};
function setThemeShadow(arr) {
   return arr[chosenColorPosition];
}

color = getThemeColor(availableColors);
shadowColor = setThemeShadow(availableShadows);

body.style.setProperty("--theme-color", color);
body.style.setProperty("--theme-shadow", shadowColor);