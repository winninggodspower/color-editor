const body = document.getElementsByTagName('body')[0];

const redInput = document.getElementsByName('red')[0];
const greenInput = document.getElementsByName('green')[0];
const blueInput = document.getElementsByName('blue')[0];

const output = document.getElementsByTagName("section")[0];

const inputs = [redInput,greenInput,blueInput]


const responseSpeed = 50;

setInterval(() => {
    inputs.forEach(input => {
        input.addEventListener("change", ()=>{
            var red = redInput.value * 2.55
            var green = greenInput.value * 2.55
            var blue = blueInput.value * 2.55
            
            body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            
            var RGB =  "rgb(" + red.toFixed() + "," + green.toFixed() + "," + blue.toFixed() + ")";
            //console.log(RGB);
            output.innerHTML = RGB;
        })
    });
}, responseSpeed);
