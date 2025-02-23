import { CreateMain } from "../components/main"
import placeholder from "../../media/pistatubarao.jpg"
const img1 = placeholder;

export const criarBrinquedo=()=>{

    const $brinquedo = `
    <section class="container">
   
        <section class="row">
          <h2>nome do brinquedo</h2>
                <img class="col-sm-3 img-thumbnail bg-dark" src="${img1}"></img>
                <section class="col align-items-center">
                    <p class="col fs-4"> codigo do brinquedo</p> 
                    <p class="col fs-1">Descriçao do brinquedo</p>
                    <p class="col fs-3">R$</p>
                </section>
        </section>
        <p>detalhes do brinquedo lorem nunsei oq nunsei oqla </p>
    </section>
    `
    const main = CreateMain()
    main.classList = "d-flex"
    main.insertAdjacentHTML('beforeend',$brinquedo)
}