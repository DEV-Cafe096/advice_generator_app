// import { apiKey } from './config.js';

const descricaoConselho = document.querySelector(".descricao")
const conselho = document.querySelector(".title")

const botao = document.getElementById("button");

botao.addEventListener("click", async () => {
    await atualizarConselho();

});

async function buscarConselho(botao) {
    const url = 'https://api.adviceslip.com/advice';
    try {
        const resposta = await fetch(url)
        return await resposta.json()


    } catch (error) {
        console.error("Erro ao buscar dados na Api:", error);
        return null
    }

}


async function atualizarConselho() {
    const novoConselho = await buscarConselho();

    if (novoConselho) {

        conselho.innerText = `${novoConselho.slip.id}`
        descricaoConselho.innerText = novoConselho.slip.advice;
    } else {
        conselho.innerText = "Erro ao carregar conselho.";
        descricaoConselho.innerText = "Tente novamente mais tarde.";
    }

    console.log("Dados da API:", novoConselho);                                 // Exibe o objeto completo no console
    console.log("ID do Conselho:", novoConselho.slip.id);
    console.log("Descrição:", novoConselho.slip.advice);
}






// // Tradução do Code

// async function atualizarConselho() {
//     const novoConselho = await buscarConselho();

//     if (novoConselho) {
//         conselho.innerText = `${novoConselho.slip.id}`

//         // Traduzir a descrição do conselho
//         const descricaoTraduzida = await traduzirTexto(novoConselho.slip.advice, 'pt');
//         descricaoConselho.innerText = descricaoTraduzida;
//     } else {
//         conselho.innerText = "Erro ao carregar conselho.";
//         descricaoConselho.innerText = "Tente novamente mais tarde.";
//     }
// }

// async function traduzirTexto(texto, linguaDestino) {
//     // const apiKey = ''; // Substitua pela sua chave de API
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

//     const resposta = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             q: texto,
//             target: linguaDestino
//         })
//     });

//     const dados = await resposta.json();
//     return dados.data.translations[0].translatedText;
// }











