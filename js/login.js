const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  window.location.href = "./pages/myPhotos.html";
}

function loginUser() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  axios
    .post(`http://localhost:4000/login`, {
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      const user = res.data.user;
      window.location.href = `./pages/myPhotos.html`;
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((err) => {
      document.querySelector(".err").style.display = "block";
      console.log(err);
    });
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  loginUser();
});
