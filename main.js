
//Adding class to an element
// document.getElementById("greeting").classList.add("redbg")

//toggle will remove if the class if they already have the class
// document.getElementById("greeting").classList.toggle("redbg") //this will add

//After 2 sec it will be removed
// setTimeout(()=>{
//     document.getElementById("greeting").classList.toggle("redbg")
// },2000)

//Adding functionality of navbar in website
document.querySelector("#open-nav-menu").addEventListener("click", ()=>{
    document.querySelector("header nav .wrapper").classList.toggle("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", ()=>{
    document.querySelector("header nav .wrapper").classList.toggle("nav-open");
})