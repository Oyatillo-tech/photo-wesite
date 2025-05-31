function signUp() {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  axios
    .post("http://localhost:4000/signup", {
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      if (res.status == 201 && res.statusText == "OK") {
        window.location.href = "../index.html";
      }
    })
    .catch((err) => {
      document.getElementById("warning").textContent =
        err.response.data.message;
      document.getElementById("warning").style.display = "block";
    });
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  signUp();
});
