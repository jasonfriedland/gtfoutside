// Hides "rode on Zwift" activities on Strava.

function gtfoutside() {
    console.log("Running GTFOutside");
    var activities = document.getElementsByClassName("activity");
    for (var i = 0; i < activities.length; i++) {
        for (var j = 0; j < activities[i].childNodes.length; j++) {
            var activityChild = activities[i].childNodes[j];
            if (activityChild.className == "entry-header" &&
                    activityChild.innerText.indexOf("rode on Zwift") !== -1) {
                console.log("Found a Zwift, hiding ActivityID: " + activities[i].id);
                activities[i].style.display = "none";
                break;
            }
        }
    }
}

function init() {
    var button = document.createElement("button");
    button.id = "GTFOutside";
    button.textContent = "gtfoutside";
    button.className = "button btn btn-sm btn-primary";
    button.style.fontSize = "12px";
    button.addEventListener("click", gtfoutside, false);

    var uploadMenu = document.getElementsByClassName("upload-menu")[0];
    uploadMenu.parentNode.insertBefore(button, uploadMenu.nextSibling);

    console.log("Initialised GTFOutside");
    window.addEventListener("load", gtfoutside, false);
}

init();
