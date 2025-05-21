const librewolflike = document.getElementById("librewolflikebutton");
const librewolfhide = document.getElementById("librewolfhideshowbutton"); // fixed typo
const librewolftext = document.getElementById("librewolftext");
//librewolf hide button
librewolfhide.addEventListener("click", function() {
    if (librewolftext.style.display === "block") {
        librewolftext.style.display = "none";
        librewolfhide.textContent = "Show Post"
        
    } else {
        librewolftext.style.display = "block";
        librewolfhide.textContent = "Hide Post"

    }
    
})