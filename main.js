// Adding functionality of navbar in website
document.querySelector("#open-nav-menu").addEventListener("click", ()=>{
    document.querySelector("header nav .wrapper").classList.toggle("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", ()=>{
    document.querySelector("header nav .wrapper").classList.toggle("nav-open");
})

//Greeting sections

function celToFahr(temperature){
    let fahr=(temperature * 9/5) +32;
    return(fahr);
}

const greetingText = "Good Morning";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.845;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and its ${temperature.toFixed(1)}°C ouside`
let fahrText  = `The weather is ${weatherCondition} in ${userLocation} and its ${celToFahr(temperature.toFixed(1))}°F ouside`

document.querySelector('#greeting').innerHTML=greetingText;
document.querySelector('p#weather').innerHTML=celsiusText;

//Changing the temperature based on the click of radio button 
document.querySelector(".weather-group").addEventListener("click", (e)=>{
    if(e.target.id === "fahr"){
        
        document.querySelector('p#weather').innerHTML=fahrText;
    }else{
        document.querySelector('p#weather').innerHTML=celsiusText;
    }
});

//padStart(number of spaces before the actual String, "Item to be filled in the space")
//padStart is a string function and only to be applied on string
//it is used to show 01 instead of 1

setInterval(()=>{
    let localTime=new Date();
    document.querySelector("#seconds").innerHTML=localTime.getSeconds().toString().padStart(2,"0");
    document.querySelector("#minutes").innerHTML=localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("#hours").innerHTML=localTime.getHours().toString().padStart(2,"0");
},1000)

//Gallery section
const galleryImages=[
    {
        src:"./assets/gallery/image1.jpg",
        alt:"image 1"
    },
    {
        src:"./assets/gallery/image2.jpg",
        alt:"image 2"
    },
    {
        src:"./assets/gallery/image3.jpg",
        alt:"image 3"
    }
];

/* for(let i in galleryImages){
    console.log(galleryImages[i]);
} */

    let mainImage=document.querySelector("#gallery > img"); //selecting the img inside gallery
    let thumbnails =document.querySelector("#gallery .thumbnails"); //selecting the thumbnails div
    
    mainImage.src=galleryImages[0].src;
    mainImage.alt=galleryImages[0].alt;

    galleryImages.forEach((image, index)=>{
        let thumb =document.createElement("img"); //creating img tag
        thumb.src=image.src; //setting src value
        thumb.alt=image.alt;
        thumb.dataset.arrayIndex =index; //data-array-index
        thumb.dataset.selected=false; // data-selected
        thumbnails.appendChild(thumb);
    })



// //Traditional for loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }

// // for-in loop for array
// let animal=["dog","cat","horse","lion"];
// for(let i in animal){ //i is index
//     console.log(animal[i]);
// }

// let dog={"name":"tony", "color":"white"};
// for(let i in dog){
//     console.log(i);
//     console.log(dog[i]);
// }


//Adding class to an element
// document.getElementById("greeting").classList.add("redbg")

//toggle will remove if the class if they already have the class
// document.getElementById("greeting").classList.toggle("redbg") //this will add

//After 2 sec it will be removed
// setTimeout(()=>{
//     document.getElementById("greeting").classList.toggle("redbg")
// },2000)

// slice method
// let firstname= "Aman";
// let x=firstname.slice(0,2); 0 //is inclusive and 2 is exclusive
// console.log(x)

//replace
// let accounNumber="PT_456545"
// accounNumber=accounNumber.replace("_","-");
// console.log(accounNumber)

//converting string to number using parseFloat
// let num1="4";
// let num2=10;
// console.log(parseFloat(num1)+parseFloat(num2));

//number to string
// let num=10;
// num =num.toString();
// console.log(typeof num);

