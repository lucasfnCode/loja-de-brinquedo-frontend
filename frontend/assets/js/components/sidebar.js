import { CreateMain } from "./main"

export const SideBar=()=>{
    const $sidebar =`
    
    
    <section class="sidebar pe-4 ps-5 d-none d-sm-block" id="sidebar">
        
        <nav class="sticky-top">
        <h1>menu principal</h1>
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