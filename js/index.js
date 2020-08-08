const experience_1 = {
	company:"Boeing",
	role:"Software Engineering Intern",
	description:"Developed decryption tools for on-flight telemetry data"
}

const experience_2 = {
	company:"Evanston Development Coorporative",
	role:"Full Stack Developer",
	description:"Developed interactive graphical visualization of accessable homes. Followed through with development from user interview to paper prototyping to deployed solution."
}

const experiences = [experience_1, experience_2];

const RenderExperiences = (experiences) => {
	var exp_elem = document.getElementsByClassName("experience");

	for (experience of experiences) {
		const template = `
			<h2>${experience.company}</h2>
			<h3>${experience.role}</h3>
			<p>${experience.description}</p>
			`;
		exp_elem.innerHTML += template;
	}
}

RenderExperiences(experiences);
