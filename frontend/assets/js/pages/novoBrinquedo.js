import { CreateMain } from "../components/main"

export const NewToyForm = () =>{
    const $toyform = `
    
    <h1 class="ms-2">Cadastro de Produto</h1>
    
    <form class="d-grid w-100 gap-1 p-5">
        <div class="form-group d-flex justify-content-between">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Codigo:</label>
            <input type="email" class="form-control w-100"  aria-describedby="emailHelp">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputPassword1">Descrição:</label>
            <input type="text" class="form-control" >
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Categoria:</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Marca:</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp">
        </div>

        <div class="form-group d-flex align-items-center">
            <label for="formFileSm" class="form-label w-50 w-sm-25">Imagem:</label>
            <input class="form-control" type="file" id="formFileSm">
        </div>

        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Valor:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Detalhes:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>

        <div class="d-flex justify-content-center mt-3 gap-2" role="group">
            <a class="btn" href="" role="button">
                <button type="submit" class="btn btn-success">
                    Salvar Dados
                </button>
            </a>

            <a class="btn" href="#admin" role="button">
                <button type="button" class="btn btn-danger">
                    Voltar
                </button>
            </a>
        </div>
    </form>
    `
    const main = CreateMain();
    main.classList = "d-flex flex-col";
    main.insertAdjacentHTML("beforeend", $toyform);
}
