import { CreateMain } from "../components/main"
import { getAllCategories } from "../sevice/categoryService"

export function criarCatalogo() {
    const $catalogo = `
        <section class="d-flex row justify-content-certer p-2">
            <h2 class="text-center">
                catalogo
            </h2>
             <ul class="categories-row d-flex col- p-0 m-0 text-center" id="categories-row">
            </ul>
        </section>
    `
    const main = CreateMain();
    main.classList = "d-flex flex-col justify-content-center"
    main.insertAdjacentHTML("beforeend", $catalogo)

    async function creteCategorie() {
        const $catalogorow = document.querySelector("#categories-row");
        const categorie = await getAllCategories();

        categorie.forEach(cats => {
            const $catalogo = `
                <li class="list-group-item col m-3 categorie">
                    <a href="#categoria/${cats.id}~${cats.name}">
                        <p>${cats.name}</p>
                    </a>
                </li>
        `
            $catalogorow.insertAdjacentHTML("afterbegin", $catalogo);
        });
    }

    creteCategorie();
}