const h2 = document.createElement("h2");
h2.textContent = "What is Platform Tennis?";
document.querySelector("body").appendChild(h2);

function addingEventListener() {
    const about = document.getElementById('about');
    const stat = document.getElementById('stat');
    const vid = document.getElementById('vid');

function clickAlertAboutMe() {
  alert('Player Page Loads');
}
function clickAlertStat(){
    alert('Player Stats Load');
}
function clickAlertVid(){
    alert('Video Loads');
}

about.addEventListener('click', clickAlertAboutMe);
stat.addEventListener('click', clickAlertStat );
vid.addEventListener('click', clickAlertVid);
}
addingEventListener();