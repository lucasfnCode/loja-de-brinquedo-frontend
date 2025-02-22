import { CreateMain } from "../components/main"
// quando uma categoria é selecionada leva para uma vitrine so com brinquedos daquela categoria
// eu ate podia fazer isso agr, mas slc 1:18 da am, ja to chamando jessus de jenesio, peguiça
// vou fazer os html funcionar vcs q se virem depois
export function criarCatalogo (){
    const $catalogo = `
        <section class="p-2">
            <h2>
                brinquedos em destaque
            </h2>
             <ul class="d-flex p-0 m-0">
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
    main.insertAdjacentHTML("beforeend",$catalogo)
}