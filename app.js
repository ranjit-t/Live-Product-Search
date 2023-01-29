

      
      let url = 'https://dummyjson.com/products';

      fetch(url)
      .then(res => res.json())
      .then(out =>{ let prods = out.products;
      const myProducts = prods;
      //console.log(products[0].title);



const main = document.querySelector("#main");

// element.innerHTML = myProducts[0].title;
// main.appendChild(element);

function showProducts(allProducts){
  for(let prod of allProducts){

    const element = document.createElement("div");
    element.classList.add("prodDIV")
  
    element.innerHTML = `
    <img src=${prod.images[0]}></img>
    <h3>${prod.title}</h3>
    <h3 class="prix">${prod.price} euros</h3>
    <p class="description">${prod.description}</p>`;
    main.appendChild(element);
}
}
showProducts(myProducts);

const input = document.querySelector("input");
input.addEventListener('input',()=>{
    main.innerHTML='';
  
    const searchTerm = input.value.toLowerCase();

    const filteredProducts = myProducts.filter((product)=>product.title.toLowerCase().includes(searchTerm));

    showProducts(filteredProducts);





});























    })
      