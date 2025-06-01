const gallery = document.querySelector('#gallery');
axios
	.get('http://localhost:4000/photos')
	.then(response => {
		const photos = response.data;
		photos.map(photo => {
			gallery.innerHTML += `
			<div class="gallery-item">
				<img
					src="${photo.url}"
					alt="Tabiat rasmi">
				<div class="caption">${photo.fullname}</div>
			</div>`
		})
	})
	.catch(error => console.log(error))