// const boxes = document.querySelectorAll(".box");
// const inputs = document.querySelectorAll("input");

// inputs.forEach((input, index) => {
//   input.addEventListener("change", () => {
//     boxes.forEach((box, boxIndex) => {
//       if (inputs[boxIndex].checked) {
//         box.style.borderColor = "black";
//       } else {
//         box.style.borderColor = "rgb(170, 170, 170)";
//       }
//     });
//   });
// });

function totop() {
  window.scrollTo(0, -100000);
}

window.onscroll = function () {
  stickyheader();
};
var header = document.getElementById("navbar");
var limit = header.offsetTop;
var screen = document.getElementById("main");
function stickyheader() {
  if (window.pageYOffset > limit) {
    header.classList.remove("stickyoff");
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.add("stickyoff");
  }
}

function showsidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "flex";
  sidebar.style.position = "fixed";
  sidebar.classList.add("movesb");
}
function hidesidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("movesb");
  hideall();
}
function shownews() {
  var news = document.getElementById("news");
  hideall();
  news.classList.add("showcontent");
}
function showmen() {
  var men = document.getElementById("men");
  hideall();
  men.classList.add("showcontent");
}
function showwoman() {
  var woman = document.getElementById("woman");
  hideall();
  woman.classList.add("showcontent");
}
function showkid() {
  var kid = document.getElementById("kid");
  hideall();
  kid.classList.add("showcontent");
}
const sidebar = document.querySelectorAll(".dropside-content");
function hideall() {
  sidebar.forEach((x) => {
    x.classList.remove("showcontent");
  });
}

function showhelp() {
  var help = document.getElementById("help");
  var helpbar = document.getElementById("helpcolumn");
  help.classList.add("showhelp");
  helpbar.style.display = "flex";
}
function hidehelp() {
  var help = document.getElementById("help");
  var helpbar = document.getElementById("helpcolumn");
  help.classList.remove("showhelp");
  helpbar.style.display = "none";
}

var mycontent = document.getElementById("content");
document.getElementById("navmenu").onmouseover = function () {
  mouseOver();
};
document.getElementById("navmenu").onmouseout = function () {
  mouseOut();
};
function mouseOver() {
  mycontent.classList.add("blurryy");
}
function mouseOut() {
  mycontent.classList.remove("blurryy");
}
