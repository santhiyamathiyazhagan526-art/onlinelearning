function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

function goLogin() {
  alert("Redirect to login page");
  // window.location.href = "login.html";
}
