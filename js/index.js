
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
				<img src=${project.image} class="project-card-image" style="width: 100%; height: 30vw; object-fit: cover; border-radius: 8px"></img>
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
	href:"http://dtr.northwestern.edu/projects/oces_for_relationship_development_",
	image:"assets/cerebro-screenshot.png",
	title:"OCEs For Relationship Development",
	description:"Researched, designed, and tested social interactions application that connects busy students looking to connect outside their social circle. The app pairs users sharing the same environment and promotes self-disclosure between them to help develop their relationship."
}

const project_2 = {
	href:"https://drive.google.com/file/d/1yxxeqqy_vLUs4e5v_tFvqPk95hFeYihm/view?usp=sharing",
	image:"assets/cv-final.png",
	title:"Finger Cursor",
	description:"Developed Python program that recognize finger gestures to draw on video. I used Skin color segmentation, contour extraction, and template based contour matching."
}

const project_3 = {
	href:"https://linmason.github.io/graphics-project-c/",
	image:"assets/graphics.png",
	title:"Computer Graphics Lighting Project",
	description:"Developed 3D Webgl program that demonstrates different shading and lighting techniques with navigatable camera, customizable light, and materials."
}

const project_4 = {
	href:"https://linmason.github.io/graphics-project-particles/",
	image:"assets/graphics-particles.png",
	title:"Computer Graphics Particle System Project",
	description:"Developed 3D Webgl program that demonstrates particle systems simulating various complex particle forces and behaviors with different solvers."
}

const experiences = [experience_1, experience_3, experience_2];
const projects = [project_1, project_3, project_4, project_2];

RenderExperiences(experiences);
RenderProjects(projects)


