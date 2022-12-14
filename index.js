const inputName = document.getElementById('inputName');
const inputType = document.getElementById('inputType');
const inputImage = document.getElementById('inputImage');
const body = document.getElementById('#table-body');
const table = document.getElementById('main-table');
const form = document.getElementById('main-form');
const pokemons = [];

function showAlert(message, className) {
    const divContainer = document.getElementById('alertDiv');
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.innerHTML = message;
    divContainer.appendChild(div);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

function cleanInputs() {
    inputName.value = '';
    inputType.value = 'Selecione o Tipo';
    inputImage.value = '';
}

function firstToUpper(string) {
    let newString = string[0].toUpperCase() + string.substr(1);
    return newString;    
}

function validateType() {
    let input = document.getElementById('inputType').value;
    if (input === 'Selecione o Tipo') {
        return false;
    }
    return true;
}

function validatePokemon() {
    for (i = 0; i < pokemons.length; i++) {
        if (inputName.value === pokemons[i]) {
            return false;
        }
    }   
    pokemons.push(inputName.value);
    return true;    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateType()) {
        if (validatePokemon()) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td><img src="${inputImage.value}" width="100px"</td>
            <td>${firstToUpper(inputName.value)}</td>
            <td><button id="type-button" class="${inputType.value}">${firstToUpper(inputType.value)}</button></td>
            <td>
                <a href="#" class="btn btn-danger btn-sm delete">Remover</a>
            </td>
            `
            body.appendChild(row);
            cleanInputs();
            showAlert('Pokemon Adicionado', 'success');
        }
        else {
            cleanInputs();
            showAlert('Pokemon já existente!', 'danger');
        }
    }
    else {
        showAlert('Selecione um tipo', 'warning');
    }
})

body.addEventListener('click', (e) => {
    target = e.target;
    const actualRow = target.parentElement.parentElement;
    if (target.classList.contains('delete')) {
        actualRow.remove();
        showAlert('Pokemon removido com sucesso', 'danger');
        pokemons.splice(0, 1);
        for (i = 0; i < pokemons.length; i++) {
            if (pokemons[i]=== actualRow.children[1].value) {
                pokemons.splice(i, 1);
                console.log(pokemons)
            }
        }
    }
});


