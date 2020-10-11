
const RenderExperiences = (experiences) => {
	console.log("hello");
	var exp_elem = document.getElementsByClassName("experience")[0];
	console.log(exp_elem);
	for (experience of experiences) {
		const template = `
			<div class="experience-card">
				<img src="${experience.image}" class="experience-card-image"></img>
				<div class="experience-card-content">
					<h2>${experience.company}</h2>
					<h3>${experience.role}</h3>
					<p>${experience.description}</p>
				</div>
			</div>
			`;
		exp_elem.innerHTML += (template);
	}
}

const experience_1 = {
	image:"assets/plane.svg",
	company:"Boeing",
	role:"Software Engineering Intern",
	description:"Developed decryption tools for on-flight telemetry data"
}

const experience_2 = {
	image:"assets/edc_logo.png",
	company:"Evanston Development Coorporative",
	role:"Full Stack Developer",
	description:"Developed interactive graphical visualization of accessable homes. Followed through with development from user interview to paper prototyping to deployed solution."
}

const experiences = [experience_1, experience_2];

console.log("hello!");
RenderExperiences(experiences);
