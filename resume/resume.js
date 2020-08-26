var sec0 = document.getElementById("profilesec");
var sec1 = document.getElementById("resumesec");
var sec2 = document.getElementById("educationsec");
var sec3 = document.getElementById("workingexsec");
var sec4 = document.getElementById("portfoliosec");

// sec0.style.display = "block";

// document.getElementsByClassName("profile").onclick = function() {
//     pro()
// };

document.getElementById("profile").onclick = function() {
    pro()
};
document.getElementById("resume").onclick = function() {
    res()
};
document.getElementById("education").onclick = function() {
    edu()
};
document.getElementById("workexperience").onclick = function() {
    wor()
};
document.getElementById("portfolio").onclick = function() {
    por()
};

function pro() {
    if (sec0.style.display === "block") {
        sec0.style.display = "none";
    } else {
        sec0.style.display = "block";
        sec1.style.display = "none";
        sec2.style.display = "none";
        sec3.style.display = "none";
        sec4.style.display = "none";
    }
}

function res() {
    if (sec1.style.display === "block") {
        sec1.style.display = "none";
    } else {
        sec1.style.display = "block";
        sec0.style.display = "none";
        sec2.style.display = "none";
        sec3.style.display = "none";
        sec4.style.display = "none";
    }
}

function edu() {
    if (sec2.style.display === "block") {
        sec2.style.display = "none";
    } else {
        sec2.style.display = "block";
        sec1.style.display = "none";
        sec0.style.display = "none";
        sec3.style.display = "none";
        sec4.style.display = "none";
    }
}

function wor() {
    if (sec3.style.display === "block") {
        sec3.style.display = "none";
    } else {
        sec3.style.display = "block";
        sec1.style.display = "none";
        sec2.style.display = "none";
        sec0.style.display = "none";
        sec4.style.display = "none";
    }
}

function por() {
    if (sec4.style.display === "block") {
        sec4.style.display = "none";
    } else {
        sec4.style.display = "block";
        sec1.style.display = "none";
        sec2.style.display = "none";
        sec3.style.display = "none";
        sec0.style.display = "none";
    }
}