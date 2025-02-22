export function ClearBody(){
    const $main = document.querySelector('main');
    if($main){
        $main.innerHTML= '';
        $main.classList= '';
        const body = document.querySelector('body')
        // body[0].classList= null;
    }
}