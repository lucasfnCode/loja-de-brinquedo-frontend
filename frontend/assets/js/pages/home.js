import { CreateMain } from "../components/main";

import placeholder from "../../media/pistatubarao.jpg"
import placeholder2 from "../../media/ben10pika.jpg"
import placeholder3 from "../../media/jabolo.jpg";


const img3 = placeholder3
const img2 = placeholder2
const img1 = placeholder;
export const homePage=()=>{
    const $homeHTML=`
    
    
        <section class="p-2 d-grid">
            <h2>Brinquedos em destaque</h2>
            <ul class="row p-0 m-0 text-center">
                <li class="list-group-item col m-3">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p" class="d-block ">dedscriçao</p>
                        <p>preço</p>
                    </a>
                </li>
                <li class="list-group-item col m-3">
                    <img src="${img2}" alt="brinquedo1">
                    <p" class="d-block ">descriçao</p>
                    <p>preço</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="${img3}" alt="brinquedo1">
                    <p" class="d-block ">descriçao</p>
                    <p>preço</p>
                </li>
            </ul>
        </section>
    `
    const main = CreateMain();
    main.classList = "d-flex flex-col"
    main.insertAdjacentHTML('beforeend',$homeHTML);

}