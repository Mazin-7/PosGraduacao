output.innerHTML = `
    <p>
        <input type="text" id="nome"/>
        <button id="btn">ok</button>
    </p>
    <p id="resultado"></p>
`;

btn.onclick = () => {
    let hoje = new Date();
    let horas = hoje.getHours();
    let mensagem = '';
    if (horas < 12) mensagem += 'Bom dia, ';
    else if (horas < 18) mensagem += 'Boa tarde, ';
    else mensagem += 'Boa noite, ';
    mensagem += getNome();
    resultado.innerHTML = mensagem;
};

function getNome() {
    return nome.value;
}
