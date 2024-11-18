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

function populateProducts(productLists) {
  let productSection = document.querySelector(".products-area");
  productSection.textContent = "";

  productLists.forEach((product) => {
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
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.innerHTML = product.title;
    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.innerText = product.author;
    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.innerText = "price";
    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    //toFixed(2) forces the price to be in 2 decimal places
    productPrice.innerHTML =
      product.price > 0 ? "$  " + product.price.toFixed(2) : "Free";

    //Appending the h3 and 3p to innerDiv
    productDetail.appendChild(productTitle);
    productDetail.appendChild(productAuthor);
    productDetail.appendChild(priceTitle);
    productDetail.appendChild(productPrice);
  });
}

function productsHandler() {
  let freeProduct = products.filter((item) => {
    return !item.price || item.price <= 0;
  });

  let paidProduct = products.filter((item) => {
    return item.price > 0;
  });

  populateProducts(products);

  //Run a loop through the products and create an HTML element ("product-item") for each of them

  document.querySelector(
    ".products-filter label[for=all] span.product-amount"
  ).textContent = products.length;
  document.querySelector(
    ".products-filter label[for=paid] span.product-amount"
  ).textContent = paidProduct.length;
  document.querySelector(
    ".products-filter label[for=free] span.product-amount"
  ).textContent = freeProduct.length;

  //Creating separate tag for paid and free
  let productsFilter = document.querySelector(".products-filter");
  productsFilter.addEventListener("click", function (e) {
    if (e.target.id === "all") {
      populateProducts(products);
    } else if (e.target.id === "paid") {
      populateProducts(paidProduct);
    } else if (e.target.id === "free") {
      populateProducts(freeProduct);
    }
  });
}

function footerHandler(){
  document.querySelector("footer").textContent= `© ${new Date().getFullYear()} - All rights reserved`
}

// page load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();

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

//Filter example for array
// let number = [1, 2, 3, 4, 5, 6, 7, 8];

// let greaterThan4 = number.filter((item) => {
//   return item > 4;
// });

// console.log(greaterThan4);
