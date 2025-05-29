import { showModal } from "../components/globalModal";
import { CreateMain } from "../components/main"
import { deleteToyById, getAllToys } from "../sevice/toyService";

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
            deleteButton.addEventListener("click", () => {
                showModal();
            })
        })
    };

    const main = CreateMain();
    main.insertAdjacentHTML("beforeend", $adm);
    criarcard();


    const removeToy = (toyId) => {
        const row = document.querySelector(`button[data-id='${toyId}']`).closest("tr");
        if (row) {
            row.remove();
        }
    };




    /* document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
        const toyId = document.getElementById("confirmDeleteModal").getAttribute("data-id");

        deleteToyById(toyId);

        const modalInstance = bootstrap.Modal.getInstance(document.getElementById("confirmDeleteModal"));
        modalInstance.hide();

        removeToy(toyId);
    }); */


    /* document.getElementById("cancelDeleteBtn").addEventListener("click", () => {
        const modalInstance = bootstrap.Modal.getInstance(document.getElementById("confirmDeleteModal"));
        modalInstance.hide();
    }) */




}
