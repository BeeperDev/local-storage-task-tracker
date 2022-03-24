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
  let issueId = chance.guid(); //generates an id
  let issueSubject = document.getElementById("issueSubInput").value;
  let issueDesc = document.getElementById("issueDescInput").value;
  let issueSeverity = document.getElementById("issueSeverityInput").value;
  let issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  let issueStatus = "Open";

  let issue = {
    id: issueId,
    subject: issueSubject,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus,
  };

  if (localStorage.getItem("issues") === null) {
    // if there are no items
    let issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues)); //stringify bc local storage needs strings
  } else {
    let issues = JSON.parse(localStorage.getItem("issues")); // parse json into an array
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  document.getElementById("issueInputForm").reset(); // form gets reset to default values

  fetchIssues();

  e.preventDefault(); // stop button from trying anything we don't want it to do.
}
