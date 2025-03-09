import { CreateMain } from "../components/main"

export const aboutUs =()=>{
    const $about=`
    <section class="d-inline p-2">
            <h2> Sobre a Equipe </h2>

          <ul class="d-inline-flex row p-0 m-0">
          
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">luketa</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">felpopinho</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">ygona</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">jabriel</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">phafael o mais bixa de bh</label>
                    <p>RGM</p>
                </li>
                 <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">alan</label>
                    <p>RGM</p>
                </li>
            </ul>
    <section>
    `
    const main = CreateMain();
    main.classList = "d-flex flex-col"
    main.insertAdjacentHTML("beforeend",$about)
}
// amanha eu termina essa pika

// NAO TENHO O GIT Q DELICIA
// VOU FICAR MAIS MEIA HORA OLLHANDO PRA ESSA TELA PRETA FEIA E .. ja baixo
// instalando se vc ta lendo isso vc ta muito desocupado