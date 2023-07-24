
var details= document.getElementById("details")
var info=[{
  id:0,
  img:"img/adapter.jpg",
  name:"Tech Pouch",
  price:"Rs.1,000",
  desc:"The primary pack material used here is 915D CORDURA®, which is durable and highly water-resistant. The front side has a TPU-like coating, which adds extra protection from the elements."
},
{
  id:1,
  img:"img/scope.jpg",
  name:"scope",
  price:"Rs.1,000",
  desc:"The primary pack material used here is 915D CORDURA®, which is durable and highly water-resistant. The front side has a TPU-like coating, which adds extra protection from the elements."
},
{
  id:2,
  img:"img/adapter.jpg",
  name:"Tech Pouch",
  price:"Rs.1,000",
  desc:"The primary pack material used here is 915D CORDURA®, which is durable and highly water-resistant. The front side has a TPU-like coating, which adds extra protection from the elements."
},
{
  id:3,
  img:"img/adapter.jpg",
  name:"Tech Pouch",
  price:"Rs.1,000",
  desc:"The primary pack material used here is 915D CORDURA®, which is durable and highly water-resistant. The front side has a TPU-like coating, which adds extra protection from the elements."
},
{
  id:4,
  img:"img/adapter.jpg",
  name:"Tech Pouch",
  price:"Rs.1,000",
  desc:"The primary pack material used here is 915D CORDURA®, which is durable and highly water-resistant. The front side has a TPU-like coating, which adds extra protection from the elements."
}

]

info.forEach((val) => {
  details.innerHTML +=`<div class="container" data-aos="zoom-out-down">
  <div class="card mt-5 box" style="width: 18rem;">
    <img src="${val.img}" class="card-img-top product-image" alt="...">
    <div class="card-body">
      <h5 class="card-title">${val.name} <br> <span class="rate"> ${val.price}</span></h5>
      <p class="card-text img-card">${val.desc}</p>
      <a href="#" class="btn btn-primary button">Visit</a>
    </div>
  </div>
  </div>`
  
});


var catagory = document.getElementById("catagory")
var catagoryinfo = [{

id:0,
name1 : "Mobile Accessories",
img1 : "img/mobile accessories.jfif"
},
{
  id:1,
  name1 : "Beach Gadgets",
  img1 : "img/paddle board.webp"
},
{
  id:2,
  name1 : "Tour Gadgets",
  img1 : "img/camp.jfif"
}
,
{
  id:2,
  name1 : "Influential Accessories",
  img1 : "img/influential.jfif"
}
]

catagoryinfo.forEach((cat) => {
  catagory.innerHTML +=`<div class="card cat" style="width: 18rem; height: 60vh;"data-aos="zoom-out-down">
  <a " href="#"><img src="${cat.img1}" class="card-img-top cardimg" alt="..."></a>
  <div class="card-body card2">
    <h2 class="card-text ">${cat.name1}</h2>
  </div>
</div>`
});





