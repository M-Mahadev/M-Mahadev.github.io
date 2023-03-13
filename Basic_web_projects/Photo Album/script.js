

var image = document.querySelectorAll("img");
    for (let i =0; i<image.length;i++)
    {
        let greyish = document.getElementById("greyish")
        greyish.addEventListener("click" , function(){
            image[i].style.filter="grayscale(100%)";
        })
    }

    for (let i =0; i<image.length;i++)
    {
        let bright = document.getElementById("bright")
        bright.addEventListener("click" , function(){
            image[i].style.filter="brightness(150%)";
        })
    }

    for (let i =0; i<image.length;i++)
    {
        let blur = document.getElementById("blur")
        blur.addEventListener("click" , function(){
            image[i].style.filter="blur(8px)";
        })
    }

