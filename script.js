var tablinks = document.getElementsByClassName("links");
var tabcontents = document.getElementsByClassName("contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var Sidebar = document.getElementById("Sidebar");

function openmenu() {
  Sidebar.style.right = "0";
}
function closemenu() {
  Sidebar.style.right = "-200px";
}