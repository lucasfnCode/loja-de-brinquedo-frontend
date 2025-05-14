import { CreateMain } from "../components/main";
import { getAllProducts, getAllToys } from "../sevice/ToyService";

export const homePage=()=>{
    const $homeHTML=`
    
    
        <section class="p-2 d-grid">
            <h2>Brinquedos em destaque</h2>
            <ul id="prodrow" class="row p-0 m-0 text-center">
            </ul>
        </section>
    `
     

    const main = CreateMain();
    main.classList = "d-flex flex-col"
    main.insertAdjacentHTML('beforeend',$homeHTML);
    
   async function criarcard(){
        const prodrow = document.querySelector("#prodrow")
   
        const product = await getAllToys();    
        product.forEach(product => {
           const $toy =  `
                <li class="list-group-item col m-3">
                    <a href="#brinquedo/${product.id}">
                        <img src="${product.thumbnail}" alt="brinquedo1" >
                        <p" class="d-block ">${product.title}</p>
                        <p>${product.price}</p>
                    </a>
                </li>
            `
        prodrow.insertAdjacentHTML("beforeend", $toy)
        });
    }
     criarcard();
    
}

        