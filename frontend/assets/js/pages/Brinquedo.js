import { CreateMain } from "../components/main"

export async function criarBrinquedo(){

    const id = location.hash.split("/")[1]

    const response =await fetch(`http://localhost:8080/toys/${id}`,{
                method : "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            });

    const brinquedo = await response.json();

    
    const $brinquedo = `
    <section class="container p-2">
   
        <section class="row">
                <img class="col-sm-3 ms-3 img-thumbnail bg-dark" src="${brinquedo.image}"/>
                <section class="col jusify-content-center">
                     <h2>${brinquedo.description}</h2>
                    <p class="col fs-3">R$ ${brinquedo.price}</p>
                </section>
                <h2 class="pt-1 fs-1">Detalhes do Produto</h2>
                    <p class="col fs-3">${brinquedo.details}</p>
        </section>
    </section>
    `
    const main = CreateMain()
    document.addEventListener("DOMContentLoaded", 
    main.insertAdjacentHTML('beforeend',$brinquedo))
}