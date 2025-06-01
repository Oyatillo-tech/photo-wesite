const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  redirectToLogin();
}

document.querySelector(
  "h1"
).innerText = `Welcome, ${user.firstname} ${user.lastname}`;

document.querySelector("#logout-btn").addEventListener("click", redirectToLogin);

function redirectToLogin() {
  localStorage.removeItem("user");
  window.location.href = "../index.html";
}

const gallery = document.querySelector("#gallery");
axios
  .get(`http://localhost:4000/photos?userId=${user.id}`)
  .then((response) => {
    const photos = response.data;
    photos.map((photo) => {
      gallery.innerHTML += `
			<div class="gallery-item" id="${photo.id}">
				<img
					src="${photo.url}"
					alt="Tabiat rasmi">
				<div class="caption">Tabiat manzarasi</div>
				<div class="delBtn">
					<button id="btn" class="btn" onclick='deleteCard(${photo.id})'>Delete</button>
          </div>
          <img src="" alt="like" id="like">
			</div>`;
    });
  })
  .catch((error) => console.log(error));

const deleteCard = (id) => {
  axios
    .delete(`http://localhost:4000/photos/${id}`)
    .then((response) => {
      const res = response.data;
      document.getElementById(id).remove();
    })
    .catch((err) => {
      console.log(err);
    });
};



function deleteBox() {
  document.getElementById('test').remove();
}