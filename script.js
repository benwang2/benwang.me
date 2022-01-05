window.addEventListener("load",(e)=>{
    let nav = document.getElementById("nav")
    let nav_container = nav.querySelector("div")
    let nav_desktop = document.getElementById("navbar-desktop")
    let nav_mobile = document.getElementById("navbar-mobile")
    let nav_menu_button = document.getElementById("navbar-mobile-button")

    let anchors = [document.getElementsByClassName("text-center")[0],document.getElementById("about")]

    function updateNav(e){
        nav_desktop.classList.toggle("hidden", window.innerWidth < 824)
        nav_mobile.classList.toggle("hidden", window.innerWidth >= 824)
        nav.classList.toggle("nav-opaque",(window.scrollY > (anchors[0].offsetTop-12) || nav_desktop.classList.contains("hidden")))
        nav_container.classList.toggle("row", !(nav_desktop.classList.contains("hidden")))
    }

    function toggleNav(e){
        nav_menu_button.classList.toggle("is-active")
        nav_mobile.getElementsByTagName("ul")[0].classList.toggle("hidden", !nav_menu_button.classList.contains("is-active"))
    }

    function setNav(e,val){
        nav_menu_button.classList.toggle("is-active",val)
        nav_mobile.getElementsByTagName("ul")[0].classList.toggle("hidden", !nav_menu_button.classList.contains("is-active"))
    }

    nav_menu_button.addEventListener("click",toggleNav)
    window.addEventListener("scroll", updateNav)
    window.addEventListener("resize", updateNav)
    updateNav()

    let links = [...nav_container.getElementsByTagName("li")]
    for (let i = 0; i < links.length; i++){
        links[i].addEventListener("click",(e)=>{setNav(e,false)})
    }

})