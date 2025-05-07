export const createHeader = () => {
    const $header = `
    <img src="https://placehold.co/175x100" alt="logo">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <h1 class="text-center">100Esperança</h1>
            </div>
        </div>
    `;

    const header = document.createElement('header');
    header.classList = 'bg-warning';
    header.insertAdjacentHTML('afterbegin', $header);
    document.body.insertAdjacentElement('afterbegin', header);
}
