import { CreateMain } from "../components/main";
import { getAllCategories } from "../sevice/categoryService";
import { getToyById, updateToy } from "../sevice/ToyService";

export const updateToyComponent = async (toyId) => {
    const categories = await getAllCategories();

    const toy = await getToyById(toyId);

    const categoryOptions = categories.map(category =>
        `<option value="${category.id}">${category.name}</option>`).join("");

    const $toyform = `
    <section class="d-flex flex-column align-self-center">
        <h1 class="ms-2 align-self-center">Atualização de Produto</h1>
        <form class="d-grid w-100 gap-2 p-3" id="toyFormUpdate">
            <div class="form-group d-flex flex-column justify-content-between">
                <label for="codigo">Código:</label>
                <input type="text" class="form-control w-100" id="codigo" name="codigo">
            </div>
            <div class="form-group d-flex flex-column justify-content-between>
                <label for="descricao">Descrição:</label>
                <input type="text" class="form-control" id="descricao" name="descricao">
            </div>
            <div class="form-group d-flex flex-column justify-content-between">
                <label for="categoria">Categoria:</label>
                <select class="form-control" id="categoria" name="categoria">
                    <option value="" disabled selected>Selecione uma categoria</option>
                    ${categoryOptions}
                </select>
            </div>
            <div class="form-group d-flex flex-column justify-content-between">
                <label for="marca">Marca:</label>
                <input type="text" class="form-control" id="marca" name="marca">
            </div>
            <div class="form-group d-flex flex-column justify-content-between">
                <label for="imagem">Imagem:</label>
                <input class="form-control" type="file" id="imagem" name="imagem" accept="image/*">
            </div>
            <div class="form-group d-flex flex-column justify-content-between">
                <label for="valor">Valor:</label>
                <input type="text" class="form-control" id="valor" name="valor">
            </div>
            <div class="form-group d-flex flex-column justify-content-between">
                <label for="detalhes">Detalhes:</label>
                <input type="text" class="form-control" id="detalhes" name="detalhes">
            </div>
            <div class="d-flex justify-content-center gap-2">
                <button type="submit" class="btn btn-warning">Atualizar Dados</button>
                    <button type="button" class="btn btn-danger">
                        <a class="btn" href="#admin">
                            Voltar
                        </a>
                    </button>
            </div>
            <p id="feedbackMessage" class="text-success mt-3" style="display:none;">✅ Produto atualizado com sucesso!</p>
        </form>
    </section>
    `;

    const main = CreateMain();
    main.classList = "d-flex flex-column";
    main.insertAdjacentHTML("beforeend", $toyform);

    const fillForm = (toy) => {
        document.getElementById("codigo").value = toy.code;
        document.getElementById("descricao").value = toy.description;
        document.getElementById("marca").value = toy.brand;
        document.getElementById("valor").value = toy.price;
        document.getElementById("detalhes").value = toy.details;
    }

    fillForm(toy);

    document.querySelector("#toyFormUpdate").addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const file = document.querySelector("#imagem").files[0];

        const convertToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        };

        let base64Image = "";
        if (file) {
            base64Image = await convertToBase64(file);
        }

        const toyData = {
            code: formData.get("codigo"),
            description: formData.get("descricao"),
            brand: formData.get("marca"),
            image: base64Image,
            price: formData.get("valor"),
            details: formData.get("detalhes"),
            category: {
                id: formData.get("categoria")
            }
        };

        updateToy(toy.id, JSON.stringify(toyData))

        event.target.reset();
        document.querySelector("#feedbackMessage").style.display = "block";

        setTimeout(() => {
            document.querySelector("#feedbackMessage").style.display = "none";
        }, 3000);
    });
}