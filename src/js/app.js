const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");
const i1 = document.querySelector('#i1')
const i2 = document.querySelector('#i2')
const i3 = document.querySelector('#i3')
btn.onclick = () => {
    btnText.innerHTML = "Thank You, Your Message Sending!!!";
    btn.classList.add("active");
};