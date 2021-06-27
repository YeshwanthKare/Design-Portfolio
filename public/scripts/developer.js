window.onload = () => {
	developerProject()
}
window.onscroll = () => {scrollFunctionDevelop(".work-header")}

const scrollFunctionDevelop = (header) => {
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(header).style.padding = "8px 100px 8px 100px";
    }else {
    document.querySelector(header).style.padding = "44px 100px 44px 100px";

  }
}

const developerProject = () => {
  let projectsContainer = document.querySelector(".develop-projects-container")

  let projectSelector = "";

  for (let project of developerProjects) {
	  console.log(project)
    
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