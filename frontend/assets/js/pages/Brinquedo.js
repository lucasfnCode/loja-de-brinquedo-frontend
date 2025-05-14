import { CreateMain } from "../components/main"
import placeholder from "../../media/pistatubarao.jpg"
import { getToyById } from "../sevice/ToyService";
const img1 = placeholder;

export async function criarBrinquedo(){

    const brinquedo = await getToyById(location.hash)
           
    console.log(location.hash);
    console.log(brinquedo);
    const $brinquedo = `
     <p class="col fs-4"> ${brinquedo}</p> 
    <section class="container p-2">
   
        <section class="row">
          <h2>Nome do Brinquedo</h2>
                <img class="col-sm-3 ms-3 img-thumbnail bg-dark" src="${img1}"></img>
                <section class="col align-items-center">
                    <p class="col fs-4"> </p> 
                    <p class="col fs-1">Descrição do Brinquedo</p>
                    <p class="col fs-3">R$</p>
                </section>

                <h2 class="pt-1 fs-1">Detalhes do Produto</h2>
                    <p> 
                        Esse brinquedo blabla é legal e tal, brinca ai e pá
        </section>
    </section>
    `
    const main = CreateMain()
    main.classList = "d-flex"
    main.insertAdjacentHTML('beforeend',$brinquedo)

 
}