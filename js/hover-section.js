const section = Array.from(doc.querySelectorAll(".section-container"));
const sideInfoOptions = ["Hover over a section for more info", "This is the about section, it tells you a little about me and what I do.", "Superstitions is a theme I made in April of 2026. I made it because I wanted a theme that would look good with anti-blue light glasses. It's made to be the most comfortable on my eyes so I can work for hours on end."]

let lastSection;

const sideInfo = doc.querySelector(".side-info");
let sectionId;

function sectionHover(arr) {
   for (let i = 0; i <= arr.length; i++) {
      arr[i].addEventListener("mouseenter", e => {
         sectionId = arr[i].dataset.section;
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
         if (data === "default") {
            sideInfo.textContent = sideInfoOptions[0];
         } else if (data === "about") {
            sideInfo.textContent = sideInfoOptions[1];
         } else if (data === "superstitions") {
            sideInfo.textContent = sideInfoOptions[2];
         }
      }, 200);
}

sectionHover(section);