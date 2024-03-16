const btn = document.getElementById("btn");
const pizza = document.getElementById("pizza");
const coffe = document.getElementById("coffe");
const momos = document.getElementById("momos");
const combo = document.getElementById("combo");
const noodle = document.getElementById("noodle");

let obj = {
    pizza : "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coffe : "https://images.unsplash.com/photo-1558122104-355edad709f6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    momos : "https://images.unsplash.com/photo-1694923450868-b432a8ee52aa?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    combo : "https://images.unsplash.com/photo-1603614550145-c7bb90bbfddf?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    noodle : "https://images.unsplash.com/photo-1607328874287-114b468189c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

function fetchData() {
    let food = undefined;
    
  if(pizza.checked){
    food = pizza.value
  }else if(coffe.checked){
    food = coffe.value
  }else if(momos.checked){
    food = momos.value
  }else if(combo.checked){
    food = combo.value
  }else if(noodle.checked){
    food = noodle.value
  }else if(pizza.checked || coffe.checked || momos.checked || noodle.checked || combo.checked){
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
