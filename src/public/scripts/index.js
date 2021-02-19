document.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    var ele = event.target;
    if (ele.matches("#send-email-btn")) {
      sendEmail();
    } else if (ele.matches("#request-data-get-users-bubble-btn")) {
      sendRequestDataGetUsersBubble();
    } else if (ele.matches("#request-data-log-data-btn")) {
      sendRequestDataLogData();
    }
  },
  false
);

function sendEmail() {
  var email = document.getElementById("email-input");
  var content = document.getElementById("content-input");
  var data = {
    email: email.value,
    content: content.value,
  };
  httpPost("/api/email/send", data);
}

function sendRequestDataLogData() {
  httpPost("/api/request-data/log-data");
}

function sendRequestDataGetUsersBubble() {
  httpPost("/api/request-data/get-user-bubble");
}

function httpGet(path) {
  return fetch(path, getOptions("GET"));
}

function httpPost(path, data = undefined) {
  return fetch(path, getOptions("POST", data));
}

function httpPut(path, data) {
  return fetch(path, getOptions("PUT", data));
}

function httpDelete(path) {
  return fetch(path, getOptions("DELETE"));
}

function getOptions(verb, data) {
  var options = {
    dataType: "json",
    method: verb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options;
}
