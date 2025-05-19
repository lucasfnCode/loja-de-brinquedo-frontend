import { CreateMain } from "../components/main"
export function criarCategorias(){
     const $catalogo=`
    
        
        <section class="p-2 d-grid">
            <h2>${location.hash.split("~")[1]}</h2>
            <ul id="prodrow" class="row p-0 m-0 text-center">
            </ul>
        </section>
    `
     
    
    const main = CreateMain();
    main.classList = "d-flex flex-col"
    main.insertAdjacentHTML('beforeend',$catalogo);


    const id = location.hash.split("/")[1][0]
 
    
    async function fetchcategorias() {
        
        try{
            const response = await fetch("http://localhost:8080/toys");
            const result = await response.json()
            const listaDeBrinquedos = [];

            result.forEach(toy => {
               if(toy.category.id == id){
                listaDeBrinquedos.push(toy)
               return listaDeBrinquedos;
               }
            });
            const data = listaDeBrinquedos
            return data
        }catch(erro){
            console.log(erro);
        }
    }


    async function rendertoy(){
        const prodrow = document.querySelector("#prodrow")
        const toys = await fetchcategorias()
        console.log(toys);
        toys.forEach(toy => {
            const $toy = `
             <li class="list-group-item col m-4">
                    <a href="#brinquedo/${toy.id}">
                        <img src="${toy.image}" alt="${toy.image}" >
                        <p>${toy.description}</p>
                        <p>${toy.price} $RS</p>
                    </a>
                </li>
        `;
        prodrow.insertAdjacentHTML("beforeend", $toy)
        });
    }rendertoy();
}