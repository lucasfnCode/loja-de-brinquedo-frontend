import { CreateMain } from "../components/main"
// quando uma categoria é selecionada leva para uma vitrine so com brinquedos daquela categoria
// eu ate podia fazer isso agr, mas slc 1:18 da am, ja to chamando jessus de jenesio, peguiça
// vou fazer os html funcionar vcs q se virem depois
export function criarCatalogo(){
    const $catalogo = `
        <section class="d-flex row justify-content-certer p-2">
            <h2 class="text-center">
                catalogo
            </h2>
             <ul class="categories-row d-flex col- p-0 m-0 text-center" id="categories-row">
            </ul>
        </section>
    `    
    //se brinquedo category == category category render brinquedo
    const main = CreateMain();
    main.classList = "d-flex flex-col justify-content-center"
    main.insertAdjacentHTML("beforeend",$catalogo)

    // 
    async function getCategories() {
        const response = await fetch(`http://localhost:8080/categories`);
        const result = await response.json();
        return result;
    }
    // render categorie
    
    async function creteCategorie() {
        const $catalogorow = document.querySelector("#categories-row");
        const categorie = await getCategories();

        categorie.forEach(cats => {
              const $catalogo=`
                <li class="list-group-item col m-3 categorie">
                    <a href="#categoria/${cats.id}~${cats.name}"
                        <p>${cats.name}</p>
                    </a>
                </li>
        `       
        $catalogorow.insertAdjacentHTML("afterbegin",$catalogo);
        });
    }creteCategorie();
}