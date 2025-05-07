
export const createHeader =()=>{
  
    const $header = `
            <img src="https://placehold.co/175x100" alt="logo">
            <div class="">
            <p class="text-center">
                <h1 class="ms-1">Nome da Loja de Brinquedo</h1>
            </p>
            </div>    `
    
    const header = document.createElement('header')
    header.classList='bg-warning'
    header.insertAdjacentHTML('afterbegin',$header)
        
    document.body.insertAdjacentElement('afterbegin',header)
}