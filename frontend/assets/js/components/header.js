import img from "./macacobanana.jpg"
const logo = img
export const createHeader =()=>{

    const $header = `
            <img src="${logo}" alt="logo">
            <h1>Nome da loja de Brinquedo</h1>
            `
    
    const header = document.createElement('header')
    header.classList='bg-warning d-flex'
    header.insertAdjacentHTML('afterbegin',$header)
        
    document.body.insertAdjacentElement('afterbegin',header)
}