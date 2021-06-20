window.onload = () => {
  project()
}

window.onscroll = () => {scrollFunction()}

const scrollFunction = () => {
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(".header-container").style.padding = "8px 100px 8px 100px";
    }else {
    document.querySelector(".header-container").style.padding = "44px 100px 44px 100px";

  }
}



const project = () => {
  let projectsContainer = document.querySelector(".projects-container")

  let projectSelector = "";

  for (let project of projects) {
    console.log(projectsContainer)
    console.log(project)
    projectSelector += `
      <div id="image-link" class="to-do beat-box weather blog netflix">
          <a href=${project.projectLink}>
              <button class="button-click">${project.buttonText}</button>
              <img src=${project.imageSrc} alt="">
          </a>
      </div>
    `   
     
  }

  projectsContainer.innerHTML += projectSelector 

  for(let project of projects){
    let imageLink = document.querySelector("#image-link");
    // console.log(imageLink)
    let button = document.querySelector(".button-click")
    let image = document.querySelector("img")

    imageLink.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      button.style.opacity = "1";
      image.style.opacity = "0.7"
      imageLink.style.transform = "scale(1.05)" 
      
    })

    imageLink.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      button.style.opacity = "0";
      image.style.opacity = "1"
      imageLink.style.transform = "scale(1)"
      
    })
  }
}



