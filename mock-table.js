const mockPikachu  = () => {
    const table = document.getElementById('#table-body');
    const row = document.createElement('tr');
    row.innerHTML =  `
            <td class="col-3"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" width="70px"</td>
            <td class="col-3">Pikachu</td>
            <td class="col-3"><span id="type-badge" class="badge badge-dark electric">electric</span></td>
            <td class="col-3">
                <i href="#" id="delete-button" class="fa-sharp fa-solid fa-trash delete"></i>
            </td>
        `
    table.append(row);
}

mockPikachu();
