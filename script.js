let attempt = 0;

function forget(){
    let item = document.getElementById("forget");
    item.innerHTML = "HINT: What would your name feel like on a <br><em>flip phone</em>?";
    item.style.textAlign = "center"

    item.style.cursor = "text";
};

function submit(){
    let name = document.getElementById("username").value
    let pass = document.getElementById("pass").value

    if (name == ""){
        document.getElementById("waste").innerHTML = "<b>Enter Your Name</b>"
    }

    else if (pass !== "7474"){
        let waste = document.getElementById("waste")
        attempt += 1;
        waste.innerHTML = 'Wrong Password';
        document.getElementById("pass").value = "";

        if (attempt >= 5){
            waste.style.color = "black";
            waste.innerHTML = "how did you not figure this out "  + name + "? <br>There are clues all over the Webpage";
        }

        if (attempt >=10){
            waste.style.color = "black";
            waste.innerHTML = 'OMG STOP TRYING <br> Just ask <a style="color: blueviolet; cursor: pointer;font-family: "Quicksand", sans-serif; margin: 0;" href="https://www.instagram.com/feroan.xo/">me</a> ffs';
        } 
    }
    else{
        localStorage.setItem("attempt", attempt);
        window.location.href = "actual.html";   
    }
}

