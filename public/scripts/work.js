window.onload = () => {
	designProject()
}
window.onscroll = () => {scrollFunction(".work-header")}

const scrollFunction = (header) => {
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(header).style.padding = "8px 100px 8px 100px";
    }else {
    document.querySelector(header).style.padding = "44px 100px 44px 100px";

  }
}

const designProject = () => {
  let projectsContainer = document.querySelector(".design-projects-container")

  let projectSelector = "";

  for (let project of designProjects) {
	  console.log(project)
    
    projectSelector += `
      <div id="image-link" class="to-do beat-box weather blog netflix">
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


