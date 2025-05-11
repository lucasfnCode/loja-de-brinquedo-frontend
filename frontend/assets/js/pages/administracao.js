import { CreateMain } from "../components/main"

export const administracao = () => {
   
  async function criarcard(){
        const prodrow = document.querySelector("#prodrow")
        //isso aq é serviço da 'service' nao consigo imaginar como passar essa funçao do fetch pra service
        const response = await  fetch("https://dummyjson.com/products/");
        const result = await response.json();
        const products = result.products;

         products.forEach(products => {
            const $toy=  `
                <tr>
                <td class="text-center">${products.title}</td>
                <td class="text-center">${products.category}</td>
                <td class="text-center">${products.price}</td>
                <td class="text-center">${products.id}</td>
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
            prodrow.insertAdjacentHTML("afterbegin",$toy)
        });       
    }

    
//  TODO: O BOTAO DE EXLUIR NAO PODE EXCLUIR O ELEMETO DIRETAMENTE DA TABELA, DEVE TER UM ALERT DE EXCLUÇAO
// OBG JADIRA AKA MARÇAL DO UX

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
   

    const main = CreateMain();
    main.insertAdjacentHTML("beforeend", $adm);

    
    criarcard()
    const  removeToy= ()=>{
            document.addEventListener("click", function(event){
                if (event.target.classList.contains("delet")) {
                    let row = event.target.closest("tr"); // Encontra o elemento pai <tr>
                    if (row) {
                        row.remove(); // Remove o elemento da árvore DOM
                    }
                }
            });
    }

  
    removeToy();
}
