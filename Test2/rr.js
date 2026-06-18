// let qu= document.querySelector(".RGG");
// ServiceWorker(()=>
// {

// title.style.color = "#"+Math.floor(Math.random()*16777215).toString(16);
// },
// 1000);

// what this not efict on h2? 
let title = document.getElementById("d");

setInterval(() => {
    title.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
}, 1000);