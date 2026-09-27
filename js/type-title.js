const title = doc.querySelector("header h1");
let titleText = title.textContent;
const defaultHTML = title.innerHTML;
const defaultText = title.textContent;

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
   typeDuration = Math.floor(((Math.random() * 200) + 100));
};
setTypeDuration();


function typeChars(char) {
   setTimeout(() => {
      titleText += char;
      title.textContent = titleText + defaultText.slice(-1);
      if (currentChar < titleChars.length) {
         clearTimeout(watchdog);
         type();
      };
   }, typeDuration);
   const watchdog = setTimeout(() => {
      doc.querySelector("header h1").innerHTML = defaultHTML;
      forceStop = true;
   }, 1000);
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