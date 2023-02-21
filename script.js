//create var for entire script here
var loginButton = document.querySelector("#session"); //for sessionToggle function

//this function will toggle Login/Logut whenever use clicks the button
function sessionToggle() {
    if (loginButton.innerText === "Login") {
        loginButton.innerText = "Logout";
    } 
    else {
        loginButton.innerText = "Login"
    }
}

//this function will alert the user the Ninja was liked when they click the like button for either Ninja definition
function definitionLiked() {
    alert("Ninja was liked");
}

//this function will hide the Add Definition button after it is clicked
function buttonHider(element) {
    element.remove();
    console.log("where??");

}