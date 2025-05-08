import { CreateMain } from "../components/main"

export const administracao = () => {

    const bonneer = {
        nome: "jadir",
        id : "1",
        desc: "vai rodar o codigo no papel"
    }
    const adibule = {
        nome : "jadira",
        id: "1",
        desc : "so nao chama ela de cavala"
    }
    // place holdere pq nao achei o backend

    function creatToy(n){ 
        const htmlToy=`   
            <tr>
                <td class="text-center">oooo</td>
                <td class="text-center">${n.nome}</td>
                <td class="text-center">${n.desc}</td>
                <td class="text-center">${n.id}</td>
                <td class="text-center">
                    <a class="btn" href="#edit" role="button">
                                <button class="btn btn-sm btn-outline-warning">
                                    Editar
                                </button>
                                </a>
                    <button class="delet btn btn-sm btn-outline-danger" >
                        Excluir
                    </button>
                </td>
            </tr>
                `     
                htmlToy.id= n.nome
        return htmlToy
    } 

    const  removeToy= ()=>{
        $delets.forEach((btnsComIdDelet)=>
            {
                btnsComIdDelet.addEventListener('click',() => {
                   const elementoPai =  btnsComIdDelet.parentElement.parentElement
                   elementoPai.remove()
                    }   
                )
            }
        ) 
        
    }


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
                        ${creatToy(bonneer)}
                        ${creatToy(adibule)}
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
   

    const main = CreateMain();
    main.insertAdjacentHTML("beforeend", $adm);
    const $delets = document.querySelectorAll(".delet");
    removeToy();
}
