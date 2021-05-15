window.onload = () => {
  project()
}

window.onscroll = () => {scrollFunction()}

const scrollFunction = () => {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector(".header-container").style.padding = "8px 100px 8px 100px";
    }else {
    document.querySelector(".header-container").style.padding = "44px 100px 44px 100px";

  }
}


const project = () => {
  let imageLink = document.querySelector("#image-link");
  console.log(imageLink)
    let button = document.querySelector("button")
    let image = document.querySelector("img")
    console.log(button, image)

  imageLink.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    button.style.opacity = "1";
    image.style.opacity = "0.7"
    
  })

  imageLink.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    button.style.opacity = "0";
    image.style.opacity = "1"
    
  })
}

