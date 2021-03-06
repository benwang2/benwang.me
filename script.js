let projects = [
    ["#14a76c","resources/images/mnky.jpg","https://mnky.link",
    "mnky.link","A URL shortener that uses Monkey-related emojis to shorten your URL."],
    ["#640f0e","resources/images/betterburn.jpg","https://betterburn.xyz",
    "betterburn.xyz","A website created to contain all of my Rivals of Aether-related projects."],
    ["#13305a","resources/images/stegafun.png","https://benwang2.github.io/stega.fun/",
    "stegafun","Web steganography tools inspired by a previous project written in Java."]
]

let sections = [];
let navbars = []

function addClass(name) {
    var element, name, arr;
    element = document.getElementById("nav-top");
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

function rmvClass(name){
    var element, name, arr;
    element = document.getElementById("nav-top");
    arr = element.className.split(" ");
    if (arr.indexOf(name) >= 0) {
        arr.splice(arr.indexOf(name), 1)
        element.className = arr.join(" ")
    }   
}

function updateMenu(){
    if (window.innerWidth < 500){
        navbars[0].style = "display:none;"
        navbars[1].style = ""
    } else {
        navbars[0].style = ""
        navbars[1].style = "display:none;"
    }
}

function toggleMenu(){
    console.log("hello"+hamburger.classList.contains("is-active"))
    if (hamburger.classList.contains("is-active")){
        hamburger.classList.remove("is-active")
        dropdown.classList.remove("visible")
    } else {
        hamburger.classList.add("is-active")
        dropdown.classList.add("visible")
    }
}

window.addEventListener("load",()=>{
    hamburger = document.getElementById("hamburger")
    dropdown = document.getElementsByClassName("dropdown")[0]
    navbars[0] = document.getElementById("full")
    navbars[1] = document.getElementById("compressed")

    sections = [document.getElementById("home"),document.getElementById("about"),document.getElementById("menu"),document.getElementById("contact")];

    let cell = document.getElementsByClassName("cell")[0]
    let grid = document.getElementById("project-grid")

    for (let x = 0; x <  projects.length; x++){
        let newCell = cell.cloneNode(true);
        newCell.style = "border-color:"+projects[x][0]+";background-image:url('"+projects[x][1]+"')";
        newCell.href = projects[x][2]
        newCell.getElementsByTagName("h1")[0].innerHTML = projects[x][3]
        newCell.getElementsByTagName("p")[0].innerHTML = projects[x][4]
        grid.appendChild(newCell)
    }

    hamburger.addEventListener("click",toggleMenu)
    updateMenu()
    window.addEventListener('resize', updateMenu);
})

window.addEventListener("scroll",(evt)=>{
    let scrollPosition = window.scrollY;
    console.log(scrollPosition+" <= "+(sections[1].offsetTop - 61));
    if (scrollPosition <= (sections[1].offsetTop - 61)){
        addClass("opaque-black")
    } else {
        rmvClass("opaque-black")
    }
})