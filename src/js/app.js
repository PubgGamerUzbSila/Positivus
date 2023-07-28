const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");
const i1 = document.querySelector('#i1')
const i2 = document.querySelector('#i2')
const i3 = document.querySelector('#i3')


    btn.onclick = () => {
        if(i1 < 0 && i2 < 0 && i3 < 0){
        console.log('aslaoska')
        }else{
            btnText.innerHTML = "Message Sending!!!";
            btn.classList.add("active");
            console.log('dsfd')
        }
    };
