import { CreateMain } from "../components/main";

export const homePage=()=>{
    const $homeHTML=`
    
        <section class="p-2">
            <h2>Brinquedos em destaque</h2>
            <ul class="row p-0 m-0">
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descriçao</label>
                    <p>preço</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descriçao</label>
                    <p>preço</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descriçao</label>
                    <p>preço</p>
                </li>
            </ul>
        </section>
    `
    const main = CreateMain();
    main.classList = "d-flex flex-col"
    main.insertAdjacentHTML('beforeend',$homeHTML);

}