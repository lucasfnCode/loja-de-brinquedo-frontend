export const createHeader = () => {
    const $header = `
        <img src="https://placehold.co/175x100" alt="logo">
        <div class="container d-flex justify-content-center align-items-center p-0 w-75">
            <div class="d-flex flex-column align-items-center">
                <h1 class="text-center">100Esperança</h1>
            </div>
        </div>
    `;

    const header = document.createElement('header');
    header.classList = 'bg-warning d-flex border-bottom border-warning p-3 shadow';
    header.insertAdjacentHTML('afterbegin', $header);
    document.body.insertAdjacentElement('afterbegin', header);
}
