import { CreateMain } from "../components/main"
import { getAllToys } from "../sevice/toyService";

export function criarCategorias(categoryName) {
    const $catalogo = `
        <section class="p-2 d-grid">
            <h2>${location.hash.split("~")[1]}</h2>
            <ul id="prodrow" class="row p-0 m-0 text-center">
            </ul>
        </section>
    `

    const main = CreateMain();
    main.classList = "d-flex flex-col"
    main.insertAdjacentHTML('beforeend', $catalogo);

    async function rendertoy() {
        const prodrow = document.querySelector("#prodrow")
        const toys = await getAllToys()
        const toysFilter = toys.filter(toy => toy.category.name === categoryName)

        toysFilter.forEach(toy => {
            const $toy = `
             <li class="list-group-item col m-4">
                    <a href="#brinquedo/${toy.id}">
                        <img src="${toy.image}" alt="${toy.image}" >
                        <p>${toy.description}</p>
                        <p>${toy.price} $RS</p>
                    </a>
                </li>
        `;

            prodrow.insertAdjacentHTML("beforeend", $toy)
        });
    } rendertoy();
}