import { CreateMain } from "./main"

export const createHeader =()=>{
    const header = document.createElement('header')
    header.innerHTML = $header
    const $header = `
            <img src="" alt="logo">
            <h1>Nome da loja de Brinquedo</h1>
    `
    header.classList= "w-100 d-flex"

    
    document.body.insertAdjacentElement('afterbegin',header)
}