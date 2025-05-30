import { CreateMain } from "../components/main";
import { getAllToys } from "../sevice/toyService";

export function criarCategorias(categoryName) {
    const $catalogo = `
        <section class="p-2 d-grid">
            <h2>${location.hash.split("~")[1]}</h2>
            <div id="prodrow" class="container">
                <div class="row justify-content-center">
                </div>
            </div>
        </section>
    `;

    const main = CreateMain();
    main.classList = "d-flex";
    main.insertAdjacentHTML('beforeend', $catalogo);

    async function rendertoy() {
        const prodrow = document.querySelector("#prodrow .row");
        const toys = await getAllToys();
        const toysFilter = toys.filter(toy => toy.category.name === categoryName);

        toysFilter.forEach(toy => {
            const $toy = `
                <div class="col-md-4 d-flex">
                    <div class="card m-2 flex-fill h-100">
                        <img class="card-img-top" src="${toy.image}" alt="${toy.image}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column text-center">
                            <p class="card-text flex-grow-1 m-0">${toy.description}</p>
                            <p class="card-text m-0"><strong>${toy.price} R$</strong></p>
                            <a href="#brinquedo/${toy.id}" class="btn btn-warning mt-auto">Ver detalhes</a>
                        </div>
                    </div>
                </div>
            `;
            prodrow.insertAdjacentHTML("beforeend", $toy);
        });
    }

    rendertoy();
}
