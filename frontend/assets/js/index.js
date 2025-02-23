import { createHeader } from "./components/header"
import { SideBar } from "./components/sidebar";
import { ClearBody } from "./functions/clearbody";
import { aboutUs } from "./pages/about";
import { adiministracao } from "./pages/adiministracao";
import { criarBrinquedo } from "./pages/Brinquedo";
import { criarCatalogo } from "./pages/catalogo";
import { homePage } from "./pages/home";

function renderByHashChange(){
    
    ClearBody();
   
  
    SideBar();
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
        case '#about':
            aboutUs();
            break;
        case '#brinquedo':
            criarBrinquedo();
            break;
    }   
    
}


renderByHashChange()

window.addEventListener('hashchange',renderByHashChange);
window.addEventListener("load",renderByHashChange);