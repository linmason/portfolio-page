
const RenderExperiences = (experiences) => {
	console.log("rendering experiences");
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


const RenderProjects = (projects) => {
	console.log("rendering projects");
	var proj_elem = document.getElementsByClassName("projects")[0];
	console.log(proj_elem);
	for (project of projects) {
		const template = `
			<a href=${project.href} class="project-card">
				<img src=${project.image} class="project-card-image" style="width: 100%; height: 40vw; object-fit: cover; border-radius: 8px"></img>
				<div class="project-card-overlay">
					<div class="project-card-content">
						<h2>${project.title}</h2>
						<p>${project.description}</p>
					</div>
				</div>
			</a>
			`;
		proj_elem.innerHTML += (template);
	}
}


const experience_1 = {
	image:"assets/boeing.png",
	company:"Boeing",
	role:"Software Engineering Intern",
	description:"Developed, tested, and deployed Python mission control software for Direct Attacks missiles. Identified, solved, and tested ADA in-flight software customer problem reports. Contributed to sprint planning, standups, code review as part of an Agile Scrum team."
}

const experience_2 = {
	image:"assets/edc_logo.png",
	company:"Evanston Development Coorporative",
	role:"Full Stack Developer",
	description:"Developed interactive graphical visualization of accessable homes. Followed through with development from user interview to paper prototyping to deployed solution."
}

const experience_3 = {
	image:"assets/delta.png",
	company:"Design Technology and Research, Delta Lab",
	role:"Undergraduate Researcher",
	description:"Conducted Human-Computer Interaction research on novel digital social interactions to easily progress friendships at distance. Developing meteor.js mobile app in order to deploy and test research-based social experiences. Propelled research forward with HCI research methodologies as part of an Agile-based team."
}

const project_1 = {
	href:"me.html",
	image:"assets/delta.png",
	title:"Graphics",
	description:"Developed 3D navigatable shaded world using WebGL"
}

const experiences = [experience_1, experience_3, experience_2];
const projects = [project_1, project_1];

RenderExperiences(experiences);
RenderProjects(projects)


