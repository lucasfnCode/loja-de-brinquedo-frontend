import { CreateMain } from "../components/main"
import { getAllCategories } from "../sevice/categoryService"

export function criarCatalogo() {
    const $catalogo = `
        <section class="d-flex flex-column p-2 w-100">
            <h2 class="m-4 p-1 border-bottom">
                Catálogo de Brinquedos :: categorias
            </h2>
             <ul class="categories-row d-flex col- p-0 m-0 text-center justify-content-center" id="categories-row">
            </ul>
        </section>
    `
    const main = CreateMain();
    main.classList = "d-flex"
    main.insertAdjacentHTML("beforeend", $catalogo)

    async function creteCategorie() {
        const $catalogorow = document.querySelector("#categories-row");
        const categorie = await getAllCategories();

        categorie.forEach(cats => {
            const $catalogo = `
                <li class="list-group-item m-3 categorie border border-2 rounded shadow-sm">
                    <a href="#categoria/${cats.id}~${cats.name}">
                        <img src="${cats.image}" alt="${cats.image}" width="250" >
                        <p>${cats.name}</p>
                    </a>
                </li>
        `
            $catalogorow.insertAdjacentHTML("afterbegin", $catalogo);
        });
    }

    creteCategorie();
}