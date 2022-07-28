const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const title1 = document.getElementsByClassName("emergency-tasks")[0];
title1.style.backgroundColor = "rgb(255, 159, 132)";

const title2 = document.getElementsByClassName("no-emergency-tasks")[0];
title2.style.backgroundColor = "rgb(249, 219, 94)";

const titlecol1 = document.querySelectorAll(".emergency-tasks h3");
titlecol1[0].style.backgroundColor = "rgb(165, 0, 243)";
titlecol1[1].style.backgroundColor = "rgb(165, 0, 243)";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";

const titlecol2 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < titlecol2.length; index += 1) {
  titlecol2[index].style.backgroundColor = "rgb(35, 37, 37)";
}
