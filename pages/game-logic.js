let name = localStorage.getItem("name") || "no data found";
name = name.charAt(0).toUpperCase() + name.slice(1);
document.getElementById("name-text").innerHTML = `what will <br> ${name} do?`;
document.getElementById("p-name").innerHTML = name;

let p_health = 100;
let e_health = 100;
let p_hp = document.getElementById("p-hp");
let e_hp = document.getElementById("e-hp");
let p_bar = document.getElementById("p-health");
let e_bar = document.getElementById("e-health");

let turn = 0;

function run(){
    window.alert("you cant fucking run!")
}

function fight(){
    document.getElementById("fov").style.display = "flex"
    e_health -= 20;
    document.getElementById("e-hp").innerHTML = `HP: ${e_health}/100`;
    document.getElementById("p-hp").innerHTML = `HP: ${p_health}/100`;
    e_bar.style.width = e_health + "%";
    p_bar.style.width = p_health + "%";

    setTimeout(() => {if (e_health <= 0) {window.alert("You Won");}},1000)
}

function closed(){
    document.getElementById("fov").style.display = "none";
    console.log("closed");
}