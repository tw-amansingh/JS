const galleryImages = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "image 2",
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "image 3",
  },
];

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

// Adding functionality of navbar in website
function menuHandler() {
  document.querySelector("#open-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.toggle("nav-open");
  });

  document.querySelector("#close-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.toggle("nav-open");
  });
}

//Temperature conversion
function celToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32;
  return fahr;
}

//Greeting sections
function greetingHandler() {
  let currentHour = new Date().getHours();
  let greetingText;

  if (currentHour < 12) greetingText = "Good Morning!";
  else if (currentHour < 17) greetingText = "Good AfterNoon!";
  else if (currentHour < 24) greetingText = "Good Evening!";
  else greetingText = "Welcome!";
  const weatherCondition = "sunny";
  const userLocation = "New York";
  let temperature = 22.845;

  let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and its ${temperature.toFixed(
    1
  )}°C ouside`;
  let fahrText = `The weather is ${weatherCondition} in ${userLocation} and its ${celToFahr(
    temperature.toFixed(1)
  )}°F ouside`;

  document.querySelector("#greeting").innerHTML = greetingText;
  document.querySelector("p#weather").innerHTML = celsiusText;

  //Changing the temperature based on the click of radio button
  document.querySelector(".weather-group").addEventListener("click", (e) => {
    if (e.target.id === "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    } else {
      document.querySelector("p#weather").innerHTML = celsiusText;
    }
  });
}

function clockHandler() {
  //padStart(number of spaces before the actual String, "Item to be filled in the space")
  //padStart is a string function and only to be applied on string
  //it is used to show 01 instead of 1

  setInterval(() => {
    let localTime = new Date();
    document.querySelector("#seconds").innerHTML = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0");
    document.querySelector("#minutes").innerHTML = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0");
    document.querySelector("#hours").innerHTML = localTime
      .getHours()
      .toString()
      .padStart(2, "0");
  }, 1000);
}

//Gallery section
function galleryHandler() {
  let mainImage = document.querySelector("#gallery > img"); //selecting the img inside gallery
  let thumbnails = document.querySelector("#gallery .thumbnails"); //selecting the thumbnails div

  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;

  galleryImages.forEach((image, index) => {
    let thumb = document.createElement("img"); //creating img tag
    thumb.src = image.src; //setting src value
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index; //data-array-index
    thumb.dataset.selected = index === 0 ? true : false; // data-selected

    thumb.addEventListener("click", (e) => {
      let selectIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectIndex];

      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      thumbnails.querySelectorAll("img").forEach((img) => {
        img.dataset.selected = false;
      });
      e.target.dataset.selected = true;
    });
    thumbnails.appendChild(thumb);
  });
}

//Product Section

/* <div class="product-item">
                <img src="./assets/products/img6.png" alt="AstroFiction">
                <div class="product-details">
                    <h3 class="product-title">AstroFiction</h3>
                    <p class="product-author">John Doe</p>
                    <p class="price-title">Price</p>
                    <p class="product-price">$ 49.90</p>
                </div>  
    </div>*/
function productsHandler() {
  let productSection = document.querySelector(".products-area");

  //Run a loop through the products and create an HTML element ("product-item") for each of them
  products.forEach((product, index) => {
    //Create the HTML for the individual product
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");

    //Create the product Image
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "image for" + product.title;
    
    //Appending img to productElm
    productElm.appendChild(productImage);

    //Create the inner div
    let productDetail = document.createElement("div");
    productDetail.classList.add("product-details");

    //Append innerdiv productElm
    productElm.appendChild(productDetail);
    

    //Append productElm to
    productSection.appendChild(productElm);

    //Create h3 and 3p inside inner div
    let h3 = document.createElement("h3");
    h3.classList.add("product-title");
    h3.innerHTML = product.title;
    let p1 = document.createElement("p");
    p1.classList.add("product-author");
    p1.innerText = product.author;
    let p2 = document.createElement("p");
    p2.classList.add("price-title");
    p2.innerText = "price";
    let p3 = document.createElement("p");
    p3.classList.add("product-price");
    p3.innerHTML = "$  " + product.price;

    //Appending the h3 and 3p to innerDiv
    productDetail.appendChild(h3);
    productDetail.appendChild(p1);
    productDetail.appendChild(p2);
    productDetail.appendChild(p3);
  });
}

// page load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();

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
