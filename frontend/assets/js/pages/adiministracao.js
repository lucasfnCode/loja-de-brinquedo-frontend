import { CreateMain } from "../components/main"

export const adiministracao = ()=>{
    const $adm =`
    <table class="table  table-striped">
        <thead>
            <tr>
            <th scope="col">Descriçao</th>
            <th scope="col">categoria</th>
            <th scope="col">valor</th>
            <th scope="col">contoles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>descriçao de brinquedo</td>
                <td>categoria 1 </td>
                <td>72,90</td>
                <td>sim nao</td>
            </tr>
            <tr>
                <td>dminha pommba</td>
                <td>categoria 8cm </td>
                <td>3,80</td>
                <td>sim</td>
            </tr>
            
        </tbody>
    </table>
    `
    const main = CreateMain()
    main.insertAdjacentHTML("beforeend",$adm)
}