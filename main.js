//capture all the info from the form
document.getElementById("issueInputForm").addEventListener("submit", saveIssue);

function fetchIssues() {
  let issues = JSON.parse(localStorage.getItem("issues")); //grab local storage item
  let issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = "";

  for (let i = 0; i < issues.length; i++) {
    let id = issues[id].id;
    let subject = issues[id].subject;
    let description = issues[id].description;
    let severity = issues[id].severity;
    let assignedTo = issues[id].assignedTo;
    let status = issues[id].status;
    let statusColor = status === "closed" ? "label-success" : "label-info";

    // issuesList.innerHTML +=
  }
}

function saveIssue(e) {
  let issueId = chance.guid();
  let issueSubject = document.getElementById("issueSubInput").value;
  let issueDesc = document.getElementById("issueDescInput").value;
  let issueSeverity = document.getElementById("issueSeverityInput").value;
  let issueAssignedTo = document.getElementById("issueAssignedToInput").value;
}
