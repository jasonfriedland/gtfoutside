// Hides "rode on Zwift/Trainerroad/trainer" activities on Strava.

const HIDE_ZWIFT = true;
const HIDE_TRAINERROAD = true;

function gtfoutside() {
    console.log("Running GTFOutside");
    var activities = document.getElementsByClassName("activity");
    hideActivities(activities);
}

function hideActivities(activities) {
    for (var i = 0; i < activities.length; i++) {
        for (var j = 0; j < activities[i].childNodes.length; j++) {
            var activityChildNode = activities[i].childNodes[j];
            if (activityChildNode.className == "entry-header" && checkHideActivity(activityChildNode)) {
                console.log("Matched activity, hiding ActivityID: " + activities[i].id);
                activities[i].style.display = "none";
                break;
            }
        }
    }
}

function checkHideActivity(elem) {
    if (HIDE_ZWIFT && elem.innerText.indexOf("rode on Zwift") !== -1) {
        return true;
    }
    if (HIDE_TRAINERROAD && elem.innerText.indexOf("rode on TrainerRoad") !== -1) {
        return true;
    }
    return false
}

function setupButton() {
    var btn = document.createElement("button");
    btn.id = "GTFOutside";
    btn.textContent = "gtfoutside";
    btn.className = "button btn btn-sm btn-primary";
    btn.style.fontSize = "12px";
    btn.addEventListener("click", gtfoutside, false);

    return btn;
}

function init() {
    var btn = setupButton();
    var uploadMenu = document.getElementsByClassName("upload-menu")[0];
    uploadMenu.parentNode.insertBefore(btn, uploadMenu.nextSibling);

    console.log("Initialised GTFOutside");
    window.addEventListener("load", gtfoutside, false);
}

init();
