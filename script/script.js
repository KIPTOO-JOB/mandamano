console.log("hello");

document.addEventListener("DOMContentLoaded", () => {
	const wasee = document.querySelector("#wasee");
	console.log("wozaa");
	const appUrl = "http://localhost:3000/citizens";

	// Fetch and display citizens
	fetch(appUrl)
		.then((res) => res.json())
		.then((citizens) => citizens.forEach((citizen) => displayCitizens(citizen)))
		.catch((error) => console.error("Error fetching citizens:", error));

	function displayCitizens(citizen) {
		console.log(citizen);
		// main div
		const mainDiv = document.createElement("div");
		mainDiv.className = "citizen-container";

		const name = document.createElement("h1");
		name.className = "name";
		name.textContent = `NAME: ${citizen.name}`;
		mainDiv.appendChild(name);

		const media = document.createElement("p");
		media.className = "media";
		media.textContent = `SOCIALS: ${citizen.socials}`;
		mainDiv.appendChild(media);

		const sex = document.createElement("h1");
		sex.textContent = `SEX: ${citizen.sex}`;
		mainDiv.appendChild(sex);

		const photo = document.createElement("img");
		photo.className = "photo";
		photo.src = citizen.photo;
		mainDiv.appendChild(photo);

		const found = document.createElement("button");
		found.className = "found";
		found.textContent = "Found";
		found.addEventListener("click", () => deleteName(citizen.id, mainDiv));
		mainDiv.appendChild(found);

		wasee.appendChild(mainDiv);
	}

	// Form Data
	const form = document.querySelector("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		// Getting form inputs
		const Name = document.querySelector("#name").value;
		const Socials = document.querySelector("#whatsAppNumber").value;
		const Sex = document.querySelector("#sex").value;
		const Age = document.querySelector("#age").value;
		const photoUrl = document.querySelector("#photo").value;
		console.log("yooooh");

		const formData = {
			name: Name,
			socials: Socials,
			sex: Sex,
			age: Age,
			photo: photoUrl,
		};

		// Sending data to the backend
		fetch(appUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((citizen) => {
				console.log(citizen);
				displayCitizens(citizen);
			})
			// erros
			.catch((error) => console.error("Error posting data:", error));

		console.log(formData);
	});

	function deleteName(id, parentElement) {
		console.log("Deleting citizen with ID:", id);
		fetch(`${appUrl}/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// Remove the parent element from DOM
				parentElement.remove();
			})
			.catch((error) => console.error("Error deleting citizen:", error));
	}
});
