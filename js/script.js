/* ---------------------------- GLOBAL-SHORTCUTS ---------------------------- */
let firstLoad = true;

const doc = document;
const body = document.querySelector("body");

const title = doc.querySelector(".title");

const sections = Array.from(doc.querySelectorAll("section"));

let typeTimeout;

/* ------------------------------- TYPE-TITLE ------------------------------- */

let titleText = title.textContent;

let forceStop = false;

let titleChars = [];
let typeDuration;
let currentChar = 1;

function getTitleText() {
   for (let i = 0; i < titleText.length; i++) {
      titleChars.push(titleText.charAt(i));
   };
   titleText = "";
};
getTitleText();

function setTypeDuration() {
   typeDuration = Math.floor(((Math.random() * 100) + 100));
};
setTypeDuration();

function typeChars(char) {
   typeTimeout = setTimeout(() => {
      titleText += char;
      title.textContent = titleText + ":";
      title.classList.remove("hidden");
      if (currentChar <= titleChars.length) {
         type();
      };
   }, typeDuration);
}

function type() {
   if (forceStop === false) {
      setTypeDuration();
      let thisChar = titleChars[currentChar - 1];
      typeChars(thisChar);
      currentChar += 1;
   }
}
type();

/* ------------------------------ HOVER-SECTION ----------------------------- */

const sideInfoOptions = Array.from(doc.querySelectorAll(".extra-info"))

let lastSection;

const sideInfo = doc.querySelector(".side-info");
let sectionId;

function sectionHover(arr) {
   for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("mouseenter", () => {
         sectionId = arr[i].id;
         if (sectionId !== lastSection) {
            setSideInfo(sectionId);
         }
         lastSection = sectionId;
      });
   }
}

function setSideInfo(data) {
   sideInfo.classList.add("hidden");
      setTimeout(() => {
         sideInfo.classList.remove("hidden");
         for (let i = 0; i < sideInfoOptions.length; i++) {
            if (data === sideInfoOptions[i].parentElement.id) {
               sideInfo.textContent = sideInfoOptions[i].textContent;
            }
         }
      }, 200);
}

sectionHover(sections);

/* ----------------------------- CLOSEST-SECTION ---------------------------- */


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (firstLoad === true) {
            firstLoad = false;
        } else {
            clearTimeout(typeTimeout);
        }
        if (entry.isIntersecting === true && entry.target.id !== "about") {
            title.classList.add("hidden");
            let sectionName = entry.target.querySelector(".header").textContent;
            titleText = sectionName;
            titleChars = [];
            currentChar = 1;
            getTitleText()
            type();
        } else if (entry.isIntersecting === true && entry.target.id === "about" && firstLoad === false) {
            titleText = "The Archive";
            titleChars = [];
            currentChar = 1;
            getTitleText()
            type();
        }
    });
}, {
    rootMargin: "-50% 0% -50% 0%",
});

sections.forEach(section => {
    observer.observe(section);
});

/* --------------------------- nav wrappers hover --------------------------- */

const wrappers = [doc.querySelector("#hw"), doc.querySelector("#clw"), doc.querySelector("#siw")];

let focusedWrapper;

function focusWrapper() {
   wrappers.forEach(wrapper => {
      if (wrapper.id !== focusedWrapper) {
         wrapper.classList.add("unfocused");
      }
   })
}
function noFocusedWrapper() {
   wrappers.forEach(wrapper => {
      wrapper.classList.remove("unfocused");
   })
}

wrappers.forEach(wrapper => {
   wrapper.addEventListener("mouseenter", () => {
      focusedWrapper = wrapper.id;
      focusWrapper()
   })
   wrapper.addEventListener("mouseleave", () => {
      noFocusedWrapper()
   })
})

/* ------------------------------ cursor shadow ----------------------------- */

const shadow = doc.querySelector("#cursor-shadow");

function adjustShadow(e) {
   let x = e.clientX + "px";
   let y = e.clientY + scrollY + "px";
   shadow.style.setProperty("--x", x);
   shadow.style.setProperty("--y", y);
}

doc.addEventListener("mousemove", e => {
   adjustShadow(e);
});

/* ------------------------------- coding days ------------------------------ */

const codingDays = doc.querySelector(".coding-days");

// The date I started coding
const date1 = new Date(2025, 10 , 27);

const currentDate = new Date();
const oneDay = 24 * 60 * 60 * 1000;

function getDayDifference() {
   const dateDiff = currentDate - date1;
   codingDays.textContent = "about " + Math.round(dateDiff / oneDay);
}
getDayDifference()

const ageSpan = doc.querySelector(".age");

const birthDate = new Date(2011, 7, 23, 13);

function getAge() {
   const dateDiff = (currentDate - birthDate);
   const age = Math.round(dateDiff / (oneDay * 365));
   ageSpan.textContent = `(currently ${age})`
}
getAge();