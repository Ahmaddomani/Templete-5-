// Option and local storge javscript
let lis = document.querySelectorAll(".Colors-list li");

//
let imgeillustrationColor = document.getElementById("img-box")
  .firstElementChild;

//Colros Section

//loop on li's and add actvie class to the clicked li and remove it from the others
lis.forEach((e) => {
  e.onclick = function (e) {
    lis.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    //change the main-color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    if (e.target.dataset.color === "#e91e63") {
      imgeillustrationColor.setAttribute(
        "src",
        "/js/Templete_Four/imges/red.png"
      );
    } else if (e.target.dataset.color === "#2196f3d4") {
      imgeillustrationColor.setAttribute(
        "src",
        "/js/Templete_Four/imges/blue.png"
      );
    } else if (e.target.dataset.color === "#3f51b5") {
      imgeillustrationColor.setAttribute(
        "src",
        "/js/Templete_Four/imges/purple.png"
      );
    } else if (e.target.dataset.color === "#8bc34a") {
      imgeillustrationColor.setAttribute(
        "src",
        "/js/Templete_Four/imges/green.png"
      );
    }
    // add the color to the local storge
    localStorage.setItem("color", e.target.dataset.color);
  };
});

//chaek if there is a color in the local storge
let mainColr = localStorage.getItem("color");
if (mainColr) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  lis.forEach(function (e) {
    e.classList.remove("active");
    if (e.dataset.color === localStorage.getItem("color")) {
      e.classList.add("active");
    }
  });
  if (localStorage.getItem("color") === "#e91e63") {
    imgeillustrationColor.setAttribute(
      "src",
      "/js/Templete_Four/imges/red.png"
    );
  } else if (localStorage.getItem("color") === "#2196f3d4") {
    imgeillustrationColor.setAttribute(
      "src",
      "/js/Templete_Four/imges/blue.png"
    );
  } else if (localStorage.getItem("color") === "#3f51b5") {
    imgeillustrationColor.setAttribute(
      "src",
      "/js/Templete_Four/imges/purple.png"
    );
  } else if (localStorage.getItem("color") === "#8bc34a") {
    imgeillustrationColor.setAttribute(
      "src",
      "/js/Templete_Four/imges/green.png"
    );
  }
}

// gear section and make it spin and hide the logo

// let gear = document.getElementById("gear");
let settingBox = document.querySelector(".setting-box");
let gear = document.querySelector(".setting-box").firstElementChild;

gear.onclick = function () {
  settingBox.classList.toggle("Open");
  gear.firstElementChild.classList.toggle("fa-spin");
  logo.classList.toggle("opacity0");
};

//backgroundcahnge section

// get the yes and no buttons that change the background imge
let buttons = document.querySelectorAll(".button");
// this var for stop the interval
let backgroundinterval;

buttons.forEach((e) => {
  e.onclick = () => {
    // remove active class from the buttons-
    buttons.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // add active class to the cliked button
    e.classList.add("active");
    // adding the answer to the local storge
    localStorage.setItem("answer", e.dataset.answer);
    if (localStorage.getItem("answer") === "yes") {
      changeBackground();
    } else {
      clearInterval(backgroundinterval);
    }
  };
});

// just adding the active class
let mainAnswer = localStorage.getItem("answer");

//For When Start And When Removing the Local Stroge the Default Value is true so we need to run the changer
changeBackground();

if (mainAnswer) {
  buttons.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.answer === mainAnswer) {
      ele.classList.add("active");
    }
  });
  // cheak the value of localstorge and start the function or stop it
  if (mainAnswer === "yes") {
    changeBackground();
  } else {
    clearInterval(backgroundinterval);
  }
}

// Selcet The Landing Page
let landing = document.querySelector(".landing");
// The Array Of Imges

let ImgesArray = [
  "kalen-emsley-Bkci_8qcdvQ-unsplash.jpg",
  "stats.png",
  "sean-oulashin-KMn4VEeEPR8-unsplash.jpg",
  "subscribe.jpg",
  "landing.jpg",
  "01.jpg",
];

// get the  logo
let logo = document.querySelector(".logo");

// start with show or hidden the side bar buttons

// Cheak The answer For Show The bullets bar

let Bullets2 = document.querySelectorAll(".button2");

// Apply The Add and Remove Function

addAndRemove(Bullets2);

// identifing the yes and no and the side bar buttons

let show = localStorage.getItem("Show-bullets"); // yes and no

let sidebarBullets = document.querySelector(".bullets ul"); // side bar buttons

Bullets2.forEach((ele) => {
  ele.addEventListener("click", () => {
    window.localStorage.setItem("Show-bullets", ele.dataset.show);
    if (ele.dataset.show === "no") {
      sidebarBullets.style.display = "none";
    } else {
      sidebarBullets.style.display = "flex";
    }
  });
});

// Cheak The Value OF Show The Bullets in Local Storge And add Active to the required elemnt

if (show) {
  Bullets2.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.show === show) {
      ele.classList.add("active");
    }
    if (show === "no") {
      sidebarBullets.style.display = "none";
    } else {
      sidebarBullets.style.display = "flex";
    }
  });
}

// End with show or hidden the side bar buttons

// start nav bullets events

let bullets = document.querySelectorAll(".bullets ul li ");
console.log(bullets);

scrolltosection(bullets); // the funnction is below
addAndRemove(bullets); // the funnction is below

// end nav bullets events

// let Home Links Take To The Sections

let homeLinks = document.querySelectorAll("ul.links a");

scrolltosection(homeLinks); // the funnction is below

//  Dealing With Reset Default Options Buttons

document.querySelector(".resetDefault").onclick = () => {
  // If You Want To Remove The Whole Things So You Dont Have Nessarry Data
  localStorage.clear();
  // If You Have  Nessarry Data
  // localStorage.removeItem("Show-bullets");
  // localStorage.removeItem("answer");
  // localStorage.removeItem("color");

  // Reload The Window
  window.location.reload();
};

// Start with Srolling to the skills Sections and Full the Forms

// Select Our Skill
let myskill = document.querySelector(".our-skills");

window.onscroll = function () {
  // the far from the top of the skills section and the head of the page
  let skilloffsettop = myskill.offsetTop;

  // get the window height

  let windowHeight = this.innerHeight;

  // window scroll top => show you how much scroll you have done

  let windowScroolTop = this.pageYOffset;

  let skillprogrees = document.querySelectorAll("[data-prog]");

  let percentage = document.querySelectorAll(".percentage");

  if (windowScroolTop + skilloffsettop - windowHeight > skilloffsettop) {
    skillprogrees.forEach((e) => {
      e.style.width = e.dataset.prog;
    });
  }
};

// Start with Srolling to the skills Sections and Full the Forms

// Start Wtih Gallery Section to Show the Imge In A popup

// For Show The Imge In A popoup When Click On It

// Get The Gallery Imges
let imges = document.querySelectorAll(".imges-box img");

imges.forEach((img) => {
  img.onclick = function () {
    // Creat the Overlay

    let Overlay2 = document.createElement("div");

    // add class to overlay

    Overlay2.className = "overlay2";

    //add the overlay to the body

    document.body.appendChild(Overlay2);

    //creat the container of the imge (popup)

    let popup = document.createElement("div");

    popup.className = "popup";

    // creat the img

    let imge = document.createElement("img");

    // add src to the new img

    imge.src = img.src;

    //add the img to the popup
    popup.append(imge);

    // add the popup to the body

    //creat the cancel button

    let cancelbutton = document.createElement("button");

    cancelbutton.innerHTML = "X";
    cancelbutton.className = "cancelbutton";

    // add the button to the popup

    popup.append(cancelbutton);

    // removing the popup and the overlay2 when click on cancel

    cancelbutton.onclick = function () {
      document.body.removeChild(popup);
      document.body.removeChild(Overlay2);
    };

    document.body.append(popup);
  };
});

// End Wtih Gallery Section to Show the Imge In A popup

// For When The user Refresh The Page Back To The Home

let Home = document.querySelector(".landing");

window.onload = function () {
  Home.scrollIntoView({
    behavior: "smooth",
  });
};

// Start the Bar links button
let barbutton = document.querySelector("div.toggle-button");

let thelinks = document.querySelector("ul.links");

barbutton.addEventListener("click", () => {
  thelinks.classList.toggle("showlinks");
});

// End the Bar links button

//  Start functions

// Scroll To Specific Seciotn Function
function scrolltosection(Listofitems) {
  Listofitems.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Add and Remove Function

function addAndRemove(Listofitems) {
  Listofitems.forEach((ele) => {
    ele.onclick = function () {
      Listofitems.forEach((ele) => {
        ele.classList.remove("active");
      });
      ele.classList.add("active");
    };
  });
}

// change the bakcground function

function changeBackground() {
  backgroundinterval = setInterval(() => {
    landing.style.transition = "background-image 1s ease-in-out"; // Customize duration and easing
    landing.style.backgroundImage = `url('imges/${
      ImgesArray[Math.floor(Math.random() * ImgesArray.length)]
    }')`;
  }, 7000);
}
