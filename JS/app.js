const  wrapper  =  document.querySelector(".sliderWrapper"); const  menuItems  =  document.querySelectorAll(".menuItem");

const products = [
{
id:  1,
title: "Pumps", price:  990, colors: [
{
code: "black",
img:  "C:\Users\prati\OneDrive\Desktop\Ecommerce\air.jpg",
},
{
code: "darkblue",
img:  "C:\Users\prati\OneDrive\Desktop\Ecommerce\air2.jpg",
},
],
},
{
id:  2,
title: "Loafers", price:  899, colors: [
{
code: "lightgray",
img:  "C:\Users\prati\OneDrive\Desktop\Ecommerce\loafers1.jpeg",
},
{
code: "green",
img: "",
},
],
},
{
id:  3,
title: "Stilettos", price:  1399, colors: [
 
{
code: "lightgray", img: "",
},
{
code: "green",
img: "",
},
],
},
{
id:  4,
title: "Sneakers", price:  999, colors: [
{
code: "black",
img: "",
},
{
code: "lightgray", img: "",
},
],
},
{
id:  5,
title: "Hippie", price:  1499, colors: [
{
code: "gray",
img: "",
},
{
code: "black",
img: "",
},
],
},
];

let  choosenProduct  =  products[0];

const  currentProductImg  =  document.querySelector(".productImg"); const  currentProductTitle  =  document.querySelector(".productTitle"); const  currentProductPrice  =  document.querySelector(".productPrice"); const  currentProductColors  =  document.querySelectorAll(".color");
 
const  currentProductSizes  =  document.querySelectorAll(".size");

menuItems.forEach((item,  index)  =>  { item.addEventListener("click",  ()  =>  {
//change the current slide
wrapper.style.transform = `translateX(${-100 * index}vw)`;

//change the choosen product choosenProduct = products[index];

//change texts of currentProduct currentProductTitle.textContent  =  choosenProduct.title; currentProductPrice.textContent  =  "Rs."  +  choosenProduct.price; currentProductImg.src  =  choosenProduct.colors[0].img;

//assing new colors currentProductColors.forEach((color,  index)  =>  {
color.style.backgroundColor  =  choosenProduct.colors[index].code; }); });    



currentProductColors.forEach((color, index) => { color.addEventListener("click",  ()  =>  {
currentProductImg.src  =  choosenProduct.colors[index].img;
});
});

currentProductSizes.forEach((size, index) => { size.addEventListener("click",  ()  =>  {
currentProductSizes.forEach((size)  =>  { size.style.backgroundColor = "white"; size.style.color  =  "black";
});
size.style.backgroundColor = "black"; size.style.color  =  "white";
});
});

const  productButton  =  document.querySelector(".productButton"); const  payment  =  document.querySelector(".payment");
const  close  =  document.querySelector(".close");

productButton.addEventListener("click", () => { payment.style.display  =  "flex";
});

close.addEventListener("click",  ()  =>  {
 
payment.style.display  =  "none";
});

