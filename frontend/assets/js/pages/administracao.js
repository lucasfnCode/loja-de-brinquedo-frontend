import { showModal } from "../components/globalModal";
import { CreateMain } from "../components/main"
import { getAllToys } from "../sevice/toyService";

export const administracao = () => {

    const $adm = `
        <section class="w-100"> 
            <div class="d-flex justify-content-center">
                <table class="table table-striped table-bordered table-hover w-100 m-3">
                    <thead class="table-warning">
                        <tr>
                        <th scope="col" class="text-center">Descrição</th>
                        <th scope="col" class="text-center">Categoria</th>
                        <th scope="col" class="text-center">Valor</th>
                        <th scope="col" class="text-center">Controles</th>
                        </tr>
                    </thead>
                    <tbody id="prodrow" class="table-group-divider">
                       
                            <!-- to chamando localmente pq nao tem o back -->
                            <!--  com o back é so um fetchall redenrizando as paradas -->
                    </tbody>
                </table>
            </div>

            <div class="p-5 d-flex justify-content-center">
                <a class="btn" href="#toymaker" role="button"> 
                    <button type="button" class="btn btn-outline-success" id="MakeNewToy">
                        Novo Brinquedo
                    </button>
                </a>
            </div>
        </section>
    `;


    async function criarcard() {
        const prodrow = document.querySelector("#prodrow")
        const products = await getAllToys();

        products.forEach(toys => {
            const $toy = `
                <tr>
                <td class="text-center">${toys.description}</td>
                <td class="text-center">${toys.category.name}</td>
                <td class="text-center">${toys.price}</td>
                <td class="d-flex">
                    <a class="btn" href="#edit/${toys.id}" role="button">
                        <button class="btn btn-sm btn-outline-warning">
                            Editar
                        </button>
                    </a>
                    <button class="delete btn btn-sm btn-outline-danger" id="deleteButton" data-id="${toys.id}">
                        Excluir
                    </button>
                </td>
            </tr>
             `
            prodrow.insertAdjacentHTML("afterbegin", $toy)
        });

        const deleteButtons = Array.from(document.getElementsByClassName("delete"));

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener("click", (event) => {
                const toyId = event.target.getAttribute("data-id");
                showModal(toyId);
            })
        })

    };

    const main = CreateMain();
    main.classList = "d-flex";
    main.insertAdjacentHTML("beforeend", $adm);
    criarcard();

}
