
const librewolfhide = document.getElementById("librewolfhideshowbutton");
const librewolftext = document.getElementById("librewolftext");

librewolfhide.addEventListener("click", function () {
  if (librewolftext.style.display === "block") {
    librewolftext.style.display = "none";
    librewolfhide.textContent = "Show Post";
  } else {
    librewolftext.style.display = "block";
 
    librewolfhide.textContent = "Hide Post";
  }
})
