const createModal = () => {
    const modal = `
        <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="confirmDeleteLabel">Confirmação de Exclusão</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body">
                Tem certeza de que deseja excluir este item?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="cancelDeleteBtn" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" id="confirmDeleteBtn">Excluir</button>
            </div>
            </div>
        </div>
        </div>
    `;
    main.insertAdjacentHTML("afterbegin", modal);
};

export const showModal = () => {
    if (!document.getElementById("confirmDeleteModal")) {
        createModal();
    }
    const modal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));
    modal.show();
}