const btn = document.getElementById("btn");
const pizza = document.getElementById("pizza");
const fries = document.getElementById("fries");
const drink = document.getElementById("drink");
const idli = document.getElementById("idli");
const biryani = document.getElementById("biryani");


let obj = {
    pizza : "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fries : "https://images.unsplash.com/photo-1647759887093-bc5023ed586d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    drink : "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    idli : "https://imgs.search.brave.com/f4dXbbVKAxOkSHTO9cO_evwP8TKeARlMEXQX7XPnS1k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcG9s/bG9zdWdhci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTIvUmljZS1JZGxp/LmpwZw",
    biryani : "https://imgs.search.brave.com/Wk2ATCxgIz4vI_zshMtmMjnmjtbG48vmFV_5RRcsXDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzU4LzczLzQz/LzM2MF9GXzM1ODcz/NDM2N19PUVlSejJW/QzZ4ZTFEcEVIUWtu/dlRtc1M3RXc0WlNt/by5qcGc"
};

function fetchData() {
    let food = undefined;
    
  if(pizza.checked){
    food = pizza.value
  }else if(fries.checked){
    food = fries.value
  }else if(drink.checked){
    food = drink.value
  }else if(idli.checked){
    food = idli.value
  }else if(biryani.checked){
    food = biryani.value
  }else if(pizza.checked || fries.checked || drink.checked || biryani.checked || idli.checked){
    const foods = Object.keys(obj);
        food = foods[Math.floor(Math.random() * foods.length)];
  }

  let promise = new Promise((res,rej) =>{
    setTimeout(() => {
        res()
    }, 1000);
  })

  promise.then(() =>{
    let img = document.getElementById("image")
    img.src = obj[food]
  }).catch((e) =>{
    console.log(e);
  })
}

btn.addEventListener("click", fetchData);
