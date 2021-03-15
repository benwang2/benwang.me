let projects = [
    ["#14a76c","images/mnky.jpg","https://mnky.link",
    "mnky.link","A URL shortener that uses Monkey-related emojis to shorten your URL."],
    ["#640f0e","images/betterburn.jpg","https://betterburn.xyz",
    "betterburn.xyz","A website created to contain all of my Rivals of Aether-related resources."]
]

let experiences = [
    [
        "SOHQ","Web Developer","A startup aiming to provide internships for students in STEM/Business related majors to prepare them for their entry into the workforce."
    ]
]

window.onload = function(){
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
}