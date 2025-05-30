import { CreateMain } from "../components/main";
import { getAllMembers } from "../sevice/teamService";

export const aboutUs = async () => {
    const main = CreateMain();
    main.classList = "d-flex flex-col";

    const $about = `
    <section class="d-inline p-2">
        <h2> Sobre a Equipe </h2>
        <ul class="d-inline-flex row p-0 m-0" id="teamList">
        </ul>
    </section>
    `;

    main.insertAdjacentHTML("beforeend", $about);

    const teamList = document.getElementById("teamList");

    try {
        const members = await getAllMembers();

        members.forEach(member => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "col", "m-3");

            listItem.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <label>${member.name}</label>
                <p>${member.ra}</p>
            `;

            teamList.appendChild(listItem);
        });

    } catch (error) {
        console.error("Erro ao buscar integrantes:", error);
        teamList.innerHTML = "<p>Não foi possível carregar os membros da equipe.</p>";
    }
};
