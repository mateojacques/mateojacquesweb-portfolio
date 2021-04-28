//select theme
const themeSelector = document.querySelector("#theme-selector");
const separatorLines = document.querySelectorAll(".separator-line");
const root = document.documentElement;
let i = 0;
themeSelector.addEventListener("click", () => {
  switch (i) {
    case 0:
      root.style.setProperty("--primary-color", "#000");
      themeSelector.style.color = "#DE0B7B";
      separatorLines.forEach((line) => {
        line.style.stroke = "#000";
      });
      i++;
      break;
    case 1:
      root.style.setProperty("--primary-color", "#DE0B7B");
      themeSelector.style.color = "#85203b";
      separatorLines.forEach((line) => {
        line.style.stroke = "#DE0B7B";
      });
      i++;
      break;
    case 2:
      root.style.setProperty("--primary-color", "#85203b");
      themeSelector.style.color = "#F58343";
      separatorLines.forEach((line) => {
        line.style.stroke = "#85203b";
      });
      i++;
      break;
    case 3:
      root.style.setProperty("--primary-color", "#F58343");
      themeSelector.style.color = "#C4CED4";
      separatorLines.forEach((line) => {
        line.style.stroke = "#F58343";
      });
      i++;
      break;
    case 4:
      root.style.setProperty("--primary-color", "#C4CED4");
      themeSelector.style.color = "#552583";
      separatorLines.forEach((line) => {
        line.style.stroke = "#C4CED4";
      });
      i++;
      break;
    case 5:
      root.style.setProperty("--primary-color", "#552583");
      themeSelector.style.color = "#3388FF";
      separatorLines.forEach((line) => {
        line.style.stroke = "#552583";
      });
      i++;
      break;
    case 6:
      root.style.setProperty("--primary-color", "#0a1c56");
      themeSelector.style.color = "#fff";
      separatorLines.forEach((line) => {
        line.style.stroke = "#0a1c56";
      });
      i = 0;
      break;
  }
});

//toggle lights on and off
const headerLightbulb = document.querySelector(".fa-lightbulb");
const lightbulbs = document.querySelectorAll(".lightbulb");

const lightSwitch = () => {
  if (root.style.getPropertyValue("--light-switch") !== "#FFD700") {
    root.style.setProperty("--light-switch", "#FFD700");
    root.style.setProperty("--lightbulb", "#FFD700");
  } else {
    root.style.setProperty("--light-switch", "#fff");
    root.style.setProperty("--lightbulb", "#8D8D8D");
  }
};

lightbulbs.forEach((lightbulb) => {
  lightbulb.addEventListener("click", lightSwitch);
});

headerLightbulb.addEventListener("click", lightSwitch);

//hover animation on header
const hideLeft = document.querySelector("#hide-left");
const hideRight = document.querySelector("#hide-right");
const designerTitle = document.querySelector(".designer-title");
const frontendTitle = document.querySelector(".frontend-title");
const headerHide = document.querySelector(".header-hide");
const designerDesc = document.querySelector(".designer-desc");
const designerCta = document.querySelector(".designer-cta");
const frontendDesc = document.querySelector(".frontend-desc");
const frontendCta = document.querySelector(".frontend-cta");

const changePositionLeft = () => {
  designerTitle.style.transform = "translateY(-150px)";
  designerDesc.style.transform = "translateY(-125px)";
  designerCta.style.transform = "translateY(-75px)";
};

const changePositionRight = () => {
  frontendTitle.style.transform = "translateY(-150px)";
  frontendDesc.style.transform = "translateY(-150px)";
  frontendCta.style.transform = "translateY(-110px)";
};

const resetPosition = () => {
  designerTitle.style.transform = "translateY(0px)";
  designerDesc.style.transform = "translateY(50px)";
  designerCta.style.transform = "translateY(0px)";
  frontendTitle.style.transform = "translateY(0px)";
  frontendDesc.style.transform = "translateY(50px)";
  frontendCta.style.transform = "translateY(0px)";
};

const listeners = () => {
  hideLeft.addEventListener("mouseover", changePositionLeft);

  hideLeft.addEventListener("mouseout", resetPosition);

  hideRight.addEventListener("mouseover", changePositionRight);

  hideRight.addEventListener("mouseout", resetPosition);
};

const removeListeners = () => {
  hideLeft.removeEventListener("mouseover", changePositionLeft);
  hideLeft.removeEventListener("mouseout", resetPosition);
  hideRight.removeEventListener("mouseover", changePositionRight);
  hideRight.removeEventListener("mouseout", resetPosition);
};

const changeOpacityLeft = () => {
  designerTitle.style.opacity = "0";
  designerDesc.style.opacity = "1";
  designerCta.style.opacity = "1";
};

const changeOpacityRight = () => {
  frontendTitle.style.opacity = "0";
  frontendDesc.style.opacity = "1";
  frontendCta.style.opacity = "1";
};

const resetOpacity = () => {
  designerTitle.style.opacity = "1";
  designerDesc.style.opacity = "0";
  designerCta.style.opacity = "0";
  frontendTitle.style.opacity = "1";
  frontendDesc.style.opacity = "0";
  frontendCta.style.opacity = "0";
};

const opacityListeners = () => {
  hideLeft.addEventListener("mouseover", changeOpacityLeft);
  hideLeft.addEventListener("mouseout", resetOpacity);
  hideRight.addEventListener("mouseover", changeOpacityRight);
  hideRight.addEventListener("mouseout", resetOpacity);
};

opacityListeners();

if (window.matchMedia("(min-width: 1600px").matches) {
  listeners();
}

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1600px").matches) {
    listeners();
  } else if (window.matchMedia("(max-width: 1600px").matches) {
    removeListeners();
  }
});
