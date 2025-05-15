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
    console.log("index:",location.hash);
    
    ClearBody();
   
    const id = location.hash.split("/")[1]
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
        case '#toymaker':
            NewToyForm();
            break;
        default:
            if(location.hash.startsWith("#brinquedo")){
                const id = location.hash.split("/")[1];
                if(id){
                    criarBrinquedo(id)
                }else{
                    console.log("ID de produto vazio");
                }
        }
    }   
  
}
createHeader();

renderByHashChange()
window.addEventListener('hashchange',renderByHashChange);
// 1:52am eu ganhei