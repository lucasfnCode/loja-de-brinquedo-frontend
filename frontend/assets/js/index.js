import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


import { createHeader } from "./components/header"
import { SideBar } from "./components/sidebar";
import { ClearBody } from "./functions/clearbody";
import { aboutUs } from "./pages/about";
import { administracao } from "./pages/administracao";
import { criarBrinquedo } from "./pages/brinquedo";
import { criarCatalogo } from "./pages/catalogo";
import { criarCategorias } from "./pages/categories";
import { updateToyComponent } from "./pages/edit";

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
        case '#edit':
            updateToy();
        default:
            if (location.hash.startsWith("#brinquedo")) {
                const id = location.hash.split("/")[1];
                criarBrinquedo(id)
            }
            if (location.hash.startsWith("#categoria")) {
                const categoryName = location.hash.split("~")[1];
                criarCategorias(categoryName);
            }
            if (location.hash.startsWith("#edit")) {
                const toyId = location.hash.split("/")[1];

                updateToyComponent(toyId);
            }
    }
}
createHeader();


renderByHashChange()
window.addEventListener('hashchange', renderByHashChange);