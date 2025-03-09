
export const createHeader =()=>{
  
    const $header = `
            <img src="https://placehold.co/175x100" alt="logo">
            <h1 class="ms-1">Nome da loja de Brinquedo</h1>
            `
    
    const header = document.createElement('header')
    header.classList='bg-warning'
    header.insertAdjacentHTML('afterbegin',$header)
        
    document.body.insertAdjacentElement('afterbegin',header)
}