window.onload = () => {
	developerProject()
}
window.onscroll = () => {scrollFunction(".work-header")}

const developerProject = () => {
  let projectsContainer = document.querySelector(".develop-projects-container")

  let projectSelector = "";

  for (let project of developerProjects) {
	  console.log(project)
    console.log(project.imageSrc)
    
    projectSelector += `
      <div id="develop-image-link">
          <a target="_blank" href=${project.projectLink}>
              <button class="button-click">${project.buttonText}</button>
              <img class="prjct-image" src=${project.imageSrc} alt="">               
          </a>
      </div>
    `        
  }
  projectsContainer.innerHTML += projectSelector   

  console.log(projectsContainer)
}