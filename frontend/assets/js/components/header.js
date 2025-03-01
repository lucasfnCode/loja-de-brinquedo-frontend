
export const createHeader =()=>{
  
    const $header = `
            <img src="" alt="logo">
            <h1>Nome da loja de Brinquedo</h1>
            `
    
    const header = document.createElement('header')
    header.classList='bg-warning'
    header.insertAdjacentHTML('afterbegin',$header)
        
    document.body.insertAdjacentElement('afterbegin',header)
}