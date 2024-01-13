// MENU   
let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
  document.body.classList.toggle('menu-open');
});

// NAV SCROLL 
let header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{
  console.log(window.scrollY)
  if(window.scrollY >= 300){
    header.style.backgroundColor= "darkgrey";
  }
});

// CHIAMATA ASINCRONA
let numUtenti = document.querySelector("#numUtenti");
let numProdotti = document.querySelector("#numProdotti");
let numMessaggi = document.querySelector("#numMessaggi");


function creazioneNumeri(numeroFinale, element){
  let counter = 0
  let intervalloNumeri = setInterval( ()=>{
    if(counter < numeroFinale){
      counter++
      element.innerHTML = counter;
    } else {
      clearInterval(intervalloNumeri)
    }
  }, 100)
  
};
creazioneNumeri(210, numUtenti);
creazioneNumeri(220, numProdotti);
creazioneNumeri(230, numMessaggi);

//  CARD
let AnnunciWrapper = document.querySelector("#AnnunciWrapper")

let annunci = [
    {nome: "Coca Cola", categoria: "Bevanda analcolica", prezzo: 3, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Macallan", categoria: "Bevanda alcolica", prezzo: 150, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Sprite", categoria: "Bevanda analcolica", prezzo: 20, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Hendrick's", categoria: "Bevanda alcolica", prezzo: 37, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Sprite", categoria: "Bevanda analcolica", prezzo: 5, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Jameson", categoria: "Bevanda alcolica", prezzo: 40, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Fanta", categoria: "Bevanda analcolica", prezzo: 10, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Gin Mare", categoria: "Bevanda alcolica", prezzo: 55, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Red Bull", categoria: "Bevanda analcolica", prezzo: 25, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Oban", categoria: "Bevanda alcolica", prezzo: 73, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Rivella", categoria: "Bevanda analcolica", prezzo: 87, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Montenegro", categoria: "Bevanda alcolica", prezzo: 93, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Succo d'arancia", categoria: "Bevanda analcolica", prezzo: 36, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Don Papa", categoria: "Bevanda alcolica", prezzo: 66, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Acqua", categoria: "Bevanda analcolica", prezzo: 8, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Franciacorta", categoria: "Bevanda alcolica", prezzo: 28, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Thè Limone", categoria: "Bevanda analcolica", prezzo: 16, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Vino Rosato", categoria: "Bevanda alcolica", prezzo: 99, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Thè Pesca", categoria: "Bevanda analcolica", prezzo: 5, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    {nome: "Amaro Bruno", categoria: "Bevanda alcolica", prezzo: 44, img: "image.ipg/bobby-donald-KikhsHzIO9o-unsplash.jpg"},
    
];



annunci.forEach( (card, i)=>{
    if(i < 20 ){
        let colonna = document.createElement("div");
        colonna.classList.add("col-12", "col-md-3", "my-2");
        colonna.innerHTML = `
                        <div class="card text-center">
                            <div class="card-img-top">
                                <img src="${card.img}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">${card.nome}</h5>
                            <p class="card-text">Categoria: ${card.categoria}</p>
                            <p class="card-text">Prezzo: ${card.prezzo}</p>
                            <div class="d-flex">
                                <a href="#" class="btn btn-dark">Aggiungi al carrello</a>
                            </div>
                            </div>
                        </div>
        `
        AnnunciWrapper.appendChild(colonna)
    }


});

// FILTRO CATEGORIE 

function filterByCategory(){
  let radioBtnArray = Array.from(radioButtons)
  let checked = radioBtnArray.find( (el)=> el.checked == true )

  if(checked.id == "All"){
      createCards(data)
  } else {
      let filtered = data.filter( (el)=> el.categoria == checked.id)
      createCards(filtered);
  }

}


radioButtons.forEach((radioButton)=>{
  radioButton.addEventListener("input", ()=>{
      filterByCategory();
  } )
})

let inputPrice = document.querySelector("#inputPrice")
let priceLabel = document.querySelector("#priceLabel")