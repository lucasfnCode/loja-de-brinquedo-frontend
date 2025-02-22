import { SideBar } from "./components/sidebar";
import { ClearBody } from "./functions/clearbody";
import { adiministracao } from "./pages/adiministracao";
import { criarCatalogo } from "./pages/catalogo";
import { homePage } from "./pages/home";

function renderByHashChange(){
    ClearBody()

    SideBar()
    switch(location.hash){
        case '':
        case undefined:
        case '#home':
            homePage();
            break;
        case '#catalogo':
            criarCatalogo();
            break;
        case '#adhemin':
            adiministracao();
            break;
    }   

}


renderByHashChange()

window.addEventListener('hashchange',renderByHashChange);
window.addEventListener("load",renderByHashChange);