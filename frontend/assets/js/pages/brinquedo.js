import { CreateMain } from "../components/main"
import { getToyById } from "../sevice/toyService";

export async function criarBrinquedo(idToy) {
    const brinquedo = await getToyById(idToy);

    const $brinquedo = `
    <section class="container p-2 w-100">
        <h2 class="m-4 p-1 border-bottom">Catálogo de Brinquedos :: ${brinquedo.category.name} :: ${brinquedo.description} </h2>
        <section class="row p-4 g-3">
                <img class="col-sm-3 img-thumbnail bg-dark" src="${brinquedo.image}"/>
                <section class="col jusify-content-center">
                <h1>${brinquedo.code}</h1>
                <h2>${brinquedo.description}</h2>
                <p class="col fs-3">R$ ${brinquedo.price}</p>
                </section>
                <div class="border rounded">
                    <h3 class="pt-1">Detalhes do Produto</h3>
                    <p class="col fs-3">${brinquedo.details}</p>
                </div>
        </section>
    </section>
    `;

    const main = CreateMain()
    main.classList = "d-flex";
    document.addEventListener("DOMContentLoaded",
    main.insertAdjacentHTML('beforeend', $brinquedo))
}