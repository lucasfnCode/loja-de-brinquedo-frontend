import { CreateMain } from "../components/main";

import placeholder from "../../media/pistatubarao.jpg"
import placeholder2 from "../../media/ben10pika.jpg"
import placeholder3 from "../../media/jabolo.jpg";

import { getAllProducts } from "../sevice/productService";


const img3 = placeholder3
const img2 = placeholder2
const img1 = placeholder;
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
        //isso aq é serviço da 'service' nao consigo imaginar como passar essa funçao do fetch pra service
        const response = await  fetch("https://dummyjson.com/products/");
        const result = await response.json();
        const products = result.products;

         products.forEach(products => {
            const $toy=  `
             <li class="list-group-item col m-3">
                     <a href="#brinquedo/${products.id}">
                         <img src="${products.thumbnail}" alt="brinquedo1" >
                        <p" class="d-block ">${products.title}</p>
                         <p>${products.price}</p>
                    </a>
                </li>
             `
            prodrow.insertAdjacentHTML("beforeend",$toy)
        });       
    }
    criarcard()
    
}

        