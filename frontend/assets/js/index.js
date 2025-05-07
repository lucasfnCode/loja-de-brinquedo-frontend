import { createHeader } from "./components/header"
import { SideBar } from "./components/sidebar";
import { ClearBody } from "./functions/clearbody";
import { aboutUs } from "./pages/about";
import { administracao } from "./pages/administracao";
import { criarBrinquedo } from "./pages/Brinquedo";
import { criarCatalogo } from "./pages/catalogo";
import { homePage } from "./pages/home";
import { NewToyForm } from "./pages/novoBrinquedo";

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
        case '#admin':
            administracao();
            break;
        case '#about':
            aboutUs();
            break;
        case '#brinquedo':
            criarBrinquedo();
            break;
        case '#toymaker':
            NewToyForm();
            break
    }   
  
}
createHeader();

renderByHashChange()
window.addEventListener('hashchange',renderByHashChange);
window.addEventListener("load",renderByHashChange);