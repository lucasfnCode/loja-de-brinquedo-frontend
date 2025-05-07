import { CreateMain } from "../components/main"

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
                        <th scope="col" class="text-center">Quantidade</th>
                        <th scope="col" class="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <td class="text-center">Descrição de Brinquedo</td>
                            <td class="text-center">Categoria 1</td>
                            <td class="text-center">72,90</td>
                            <td class="text-center">10</td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-outline-warning">
                                    Editar
                                </button>
                                <button class="btn btn-sm btn-outline-danger">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">Minha Pomba</td>
                            <td class="text-center">Categoria 8cm</td>
                            <td class="text-center">3,80</td>
                            <td class="text-center">8cm</td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-outline-warning">
                                    Editar
                                </button>
                                <button class="btn btn-sm btn-outline-danger">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-5 d-flex justify-content-center">
                <button type="button" class="btn btn-sm btn-outline-success" id="MakeNewToy">
                    <a class="btn" href="#toymaker" role="button"> 
                        Novo Brinquedo
                    </a>
                </button>
            </div>
        </section>
    `;
    const main = CreateMain();
    main.classList = "d-flex flex-column align-items-center"; // Centraliza horizontalmente e verticalmente
    main.insertAdjacentHTML("beforeend", $adm);
}
