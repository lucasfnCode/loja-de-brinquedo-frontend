import { CreateMain } from "../components/main"

export const adiministracao = ()=>{
    const $adm =`
        <section>
            <table class="table table-striped table-bordered table-hover w-100 m-3">
                <thead class="table-warning">
                    <tr>
                    <th scope="col">Descriçao</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                    </tr>
                </thead>

                <tbody class="table-group-divider">
                    <tr>
                        <td>descriçao de brinquedo</td>
                        <td>categoria 1 </td>
                        <td>72,90</td>
                        <td>10</td>
                    </tr>
                    
                    <tr>
                        <td>dminha pommba</td>
                        <td>categoria 8cm </td>
                        <td>3,80</td>
                        <td>8cm</td>
                    </tr>            
                </tbody>
            </table>
        </section>

        <aside class="p-5">
            <button type="button" class="btn btn-success" id="MakeNewToy">
                <a class="btn" href="#toymaker" role="button"> 
                    Novo Brinquedo
                <a>
            </button>
        </aside>     
    `
    const main = CreateMain()
     main.classList = "d-flex flex-col"
    main.insertAdjacentHTML("beforeend",$adm)
}