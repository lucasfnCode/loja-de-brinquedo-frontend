import { CreateMain } from "../components/main";

export const homePage=()=>{
    const $homeHTML=`
    
        <section class="main_content">
            <h2>Brinquedos em destaque</h2>
            <ul>
                <li class="toy-cell">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descriçao</label>
                    <p>preço</p>
                </li>
                <li class="toy-cell">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descriçao</label>
                    <p>preço</p>
                </li>
                <li class="toy-cell">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descriçao</label>
                    <p>preço</p>
                </li>
            </ul>
        </section>
    `
    const main = CreateMain();
    
    main.insertAdjacentHTML('beforeend',$homeHTML);

}