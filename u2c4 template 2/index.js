// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", matchList);
var arr = JSON.parse(localStorage.getItem("schedule")) || [];
function matchList() {
  event.preventDefault();

  var matchObj = {
    matchNumber: document.querySelector("#matchNum").value,
    matchTeamA: document.querySelector("#teamA").value,
    matchTeamB: document.querySelector("#teamB").value,
    matchDate: document.querySelector("#date").value,
    matchVenue: document.querySelector("#venue").value,
  };
  arr.push(matchObj);
  console.log(arr);
  localStorage.setItem("schedule", JSON.stringify(arr));

  window.location.herf = "matches.html";
}
