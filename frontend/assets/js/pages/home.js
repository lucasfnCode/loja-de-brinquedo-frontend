import { CreateMain } from "../components/main";
import { getAllToys } from "../sevice/toyService";

export const homePage=()=>{
    const $homeHTML=`
        <section class="p-2 d-flex-inline w-100">
            <h2>Brinquedos em destaque</h2>
            <ul id="prodrow" class="row p-0 m-0 text-center">
            </ul>
        </section>
    `

    const main = CreateMain();
    main.classList = "d-flex  h-100"
    main.insertAdjacentHTML('beforeend',$homeHTML);    
   

   async function criarcard(){
        const prodrow = document.querySelector("#prodrow")
   
        const products = await getAllToys();    
        products.forEach(toy => {
           const $toy =  `
                <li class="list-group-item col m-4">
                    <a href="#brinquedo/${toy.id}">
                        <img src="${toy.image}" alt="${toy.image}" >
                        <p>${toy.description}</p>
                        <p>${toy.price}</p>
                    </a>
                </li>
            `
        prodrow.insertAdjacentHTML("beforeend", $toy)
        });
    }
    criarcard();
    
}

        