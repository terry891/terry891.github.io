function showMessage() {
    alert("Hello from the external JS file!");
}

function changeText() {
    const element = document.getElementById("text");
    element.innerHTML = "Text changed!";
}
function changeColor() {
    const element = document.getElementById("text");
    element.style.color = "red";
}

function changeBackgroundColor() {
    const element = document.getElementById("text");
    element.style.backgroundColor = "yellow";
}