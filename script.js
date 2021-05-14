

window.onscroll = () => {scrollFunction()}

const scrollFunction = () => {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector(".header-container").style.padding = "8px 100px 8px 100px";
    }else {
    document.querySelector(".header-container").style.padding = "44px 100px 44px 100px";

  }
}