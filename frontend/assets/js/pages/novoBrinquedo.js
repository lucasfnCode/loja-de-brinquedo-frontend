import { CreateMain } from "../components/main"

export const NewToyForm = () =>{
    const $toyform = `
    
    <form class="d-grid w-100 p-5">
        <div class="form-group d-flex justify-content-between">
            <label class="text-start w-50 w-sm-25 " for="exampleInputEmail1">Codigo:</label>
            <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" >
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputPassword1">descriçao</label>
            <input type="text" class="form-control " id="exampleInputPassword1" >
        </div>
         <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">CATEGORIA:</label>
            <input type="text" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" >
        </div>
         <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">MARCA</label>
            <input type="text" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" >
        </div>
         <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">IMAGEM</label>
            <input type="text" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" >
            
         </div>
         <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">VALOR</label>
            <input type="text" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" >
        </div>
         <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">DETALHES</label>
            <input type="text" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" >
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
    const main = CreateMain()
     main.classList = "d-flex flex-col"
    main.insertAdjacentHTML("beforeend",$toyform);
}