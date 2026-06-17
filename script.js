// function getRandomColor()
// {

// return "#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");

// }


// setInterval(()=>
// {
//     document.body.style.backgroundColor = getRandomColor();
// },1000);



let title = document.querySelector(".RGG");

setInterval(() => {
    title.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
}, 1000);