function skillsmember() {
    var skills = document.getElementById("skills");
    var skillslist = document.getElementById("skillslist");
    if (skills.style.display === "none") {
        skills.style.display = "block";
        skillslist.style.display = "none";
    } else {
        skills.style.display = "none";
        skillslist.style.display = "block";
    }
} 
    