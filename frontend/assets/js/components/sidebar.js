import { CreateMain } from "./main"

export const SideBar=()=>{
    const $sidebar =`
    
    
<section class="sidebar d-none d-sm-block bg-warning vh-100" id="sidebar" style="width: 175px; position: fixed; left: 0;"> 
    <nav>
        <h1>Menu</h1>
            
                <div class ="list-group">
                    <a href="#home" class="list-group-item list-group-item-warning list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-home" aria-controls="list-home">
                        Home
                    </a>
                                         
                    <a href="#catalogo" class="list-group-item list-group-item-warning list-group-item-action" id="list-catalogo-list" data-bs-toggle="list" href="#list-catalogo" aria-controls="list-catalogo">
                        Catálogo de Brinquedos
                    </a>
                        

                        
                    <a href="#adhemin" class="list-group-item list-group-item-warning list-group-item-action" id="list-admin-list" data-bs-toggle="list" href="#list-admin" aria-controls="list-admin">
                        Administração
                    </a>    
                        
                    
                        
                    <a href="#about" class="list-group-item list-group-item-warning list-group-item-action" id="list-sobre-list" data-bs-toggle="list" href="#list-sobre" aria-controls="list-sobre">
                        Sobre a Equipe
                    </a>
                </div>
            
    </nav>
</section>

   
    `
    const main = CreateMain();
    main.insertAdjacentHTML('afterbegin',$sidebar)
}