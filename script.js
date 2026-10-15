const doc = document;

const backdrop = doc.querySelector(".backdrop");
const numOfGradients = 2; // needs updates
function setDefaultValues() {
    let initials = {};
    for (let i = 1; i <= numOfGradients; i++) {
        initials[`--x${i}`] = window.getComputedStyle(backdrop).getPropertyValue(`--x${i}`);
        initials[`--y${i}`] = window.getComputedStyle(backdrop).getPropertyValue(`--y${i}`);
    };
    return initials;
};
const initials = setDefaultValues();

function moveGradients() {
    for (let i = 1; i <= numOfGradients; i++) {
        const defaultX = initials[`--x${i}`];
        const defaultY = initials[`--y${i}`];

        const rangeX = 30;
        const rangeY = 20;

        let numX = Math.floor(Math.random() * rangeX - (rangeX / 2));
        const deviationX = `calc(${defaultX} + ${numX}vw)`;

        let numY = Math.floor(Math.random() * rangeY - (rangeY / 2));
        const deviationY = `calc(${defaultY} + ${numY}vh)`;
        backdrop.style.setProperty(`--x${i}`, `${deviationX}`);
        backdrop.style.setProperty(`--y${i}`, `${deviationY}`);
    };
    setTimeout(() => {
        moveGradients();
    }, 5000);
};
moveGradients();

