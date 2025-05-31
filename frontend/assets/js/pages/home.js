/* import { CreateMain } from "../components/main";
import { getAllToys } from "../sevice/toyService";

export const homePage = () => {
    const $homeHTML = `
        <section class="p-2 d-flex-inline w-100">
            <h2 class="m-4 p-1 border-bottom">Brinquedos em destaque</h2>
            <div id="prodrow" class="container">
                <div class="row justify-content-center gap-2">
                </div>
            </div>
        </section>
    `;

    const main = CreateMain();
    main.classList = "d-flex h-100";
    main.insertAdjacentHTML('beforeend', $homeHTML);

    async function criarcard() {
        const prodrow = document.querySelector("#prodrow .row");
        const products = await getAllToys();

        products.forEach(toy => {
            const $toy = `
                <div class="col-md-4 d-flex">
                    <div class="card m-2 flex-fill h-100">
                        <img class="card-img-top" src="${toy.image}" alt="${toy.image}" style="height: 170px; object-fit: cover;">
                        <div class="card-body d-flex flex-column text-center">
                            <p class="card-text flex-grow-1 m-0">${toy.description}</p>
                            <p class="card-text m-0"><strong>${toy.price}</strong></p>
                            <a href="#brinquedo/${toy.id}" class="btn btn-warning mt-auto">Ver detalhes</a>
                        </div>
                    </div>
                </div>
            `;
            prodrow.insertAdjacentHTML("beforeend", $toy);
        });
    }

    criarcard();
};


 */

import { CreateMain } from "../components/main";
import { getAllToys } from "../sevice/toyService";

export const homePage = () => {
    const $homeHTML = `
        <section class="p-2 w-100">
            <h2 class="m-4 p-1 border-bottom">Brinquedos em destaque</h2>
            <div id="prodrow" class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                </div>
            </div>
        </section>
    `;

    const main = CreateMain();
    main.classList = "d-flex h-100";
    main.insertAdjacentHTML('beforeend', $homeHTML);

    async function criarcard() {
        const prodrow = document.querySelector("#prodrow .row");
        const products = await getAllToys();

        products.forEach(toy => {
            const card = document.createElement("div");
            card.classList.add("col");

            card.innerHTML = `
                <div class="card h-100">
                    <img class="card-img-top" src="${toy.image}" alt="${toy.image}" style="height: 170px; object-fit: cover;">
                    <div class="card-body text-center d-flex flex-column">
                        <p class="card-text flex-grow-1 m-0">${toy.description}</p>
                        <p class="card-text m-0"><strong>R$ ${toy.price}</strong></p>
                        <a href="#brinquedo/${toy.id}" class="btn btn-warning mt-auto">Ver detalhes</a>
                    </div>
                </div>
            `;

            prodrow.appendChild(card);
        });
    }

    criarcard();
};
