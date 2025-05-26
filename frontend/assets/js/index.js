import { createHeader } from "./components/header"
import { SideBar } from "./components/sidebar";
import { ClearBody } from "./functions/clearbody";
import { aboutUs } from "./pages/about";
import { administracao } from "./pages/administracao";
import { criarBrinquedo } from "./pages/Brinquedo";
import { criarCatalogo } from "./pages/catalogo";
import { criarCategorias } from "./pages/categories";

import { homePage } from "./pages/home";
import { NewToyForm } from "./pages/novoBrinquedo";

function renderByHashChange() {
    ClearBody();
    SideBar();
    switch (location.hash) {
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
            if (location.hash.startsWith("#brinquedo")) {
                const id = location.hash.split("/")[1];
                if (id) {
                    criarBrinquedo(id)
                } else {
                    console.log("ID de produto vazio");
                }

            }
            if (location.hash.startsWith("#categoria")) {
                const categoryName = location.hash.split("~")[1];
                criarCategorias(categoryName);
            }
    }
}
createHeader();


renderByHashChange()
window.addEventListener('hashchange', renderByHashChange);