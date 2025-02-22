import { CreateMain } from "./main"

export const SideBar=()=>{
    const $sidebar =`
    <section class="sidebar" id="sidebar">
        <h1>menu principal</h1>
        <nav>
            <ul class="navbar-nav">
                <li class="list-group-item">
                    <a href="#home">
                        home
                    </a>
                </li>
                <li>
                    <a href="#catalogo">
                        catálogo de brinquedos
                    </a>
                </li>
                <li>
                    <a href="#adhemin">
                        adiministração
                    </a>    
                </li>
                    
                <li>
                    <a href="#about">
                        sobre a equipe
                    </a>
                </li>
            </ul>
        </nav>
    </section>
    `
    const main = CreateMain();
    main.insertAdjacentHTML('afterbegin',$sidebar)
}