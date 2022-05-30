const contForm = document.getElementById("container-form");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

// const imageErr= document.getElementsByClassName('image-error')
const imageErr = document.getElementById('imageErr')
const textErr = document.getElementById('textErr')

btn.addEventListener("click", () => {
    let val = input.value;
    let exp =
    /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(val);
    
    if (val == "" || exp == false) {
        textErr.style.display="block";
        contForm.style.border = "3px solid hsl(0, 93%, 68%)";
        imageErr.style.display = "block";
        btn.style.boxShadow=" 0px 20px 60px #a09a9a,-20px -20px 60px #ffffff"
    }
    else {
            textErr.style.display="none";
    contForm.style.border = "1px solid hsl(0, 36%, 70%)";
        imageErr.style.display = "none";
        btn.style.boxShadow = " 0px 0px 0px ,0px 0px 0px ";
        
    }
});
