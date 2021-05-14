

window.onscroll = () => {scrollFunction()}

const scrollFunction = () => {
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(".header-container").style.padding = "14px 100px 14px 100px";
    }else {
    document.querySelector(".header-container").style.padding = "44px 100px 44px 100px";

  }
}