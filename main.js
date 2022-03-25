//capture all the info from the form
document.getElementById("issueInputForm").addEventListener("submit", saveIssue);

function fetchIssues() {
  let issues = JSON.parse(localStorage.getItem("issues")); //grab local storage item
  let issuesList = document.getElementById("issuesList");
  console.log(issues);

  issuesList.innerHTML = "";

  for (let i = 0; i < issues.length; i++) {
    let id = issues[i].id;
    let subject = issues[i].subject;
    let description = issues[i].description;
    let severity = issues[i].severity;
    let assignedTo = issues[i].assignedTo;
    let status = issues[i].status;
    let statusColor = status === "closed" ? "label-success" : "label-danger";

    issuesList.innerHTML +=
      '<div class="well">' +
      "<h6>Issue ID:" +
      id +
      "</h6>" +
      '<p><span class="label ' +
      statusColor +
      ' ">' +
      status +
      "</span></p>" +
      "<h3>" +
      subject +
      "</h3>" +
      "<p>" +
      description +
      "</p>" +
      "</div>";
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
    //package form data into an object
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
