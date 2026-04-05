const randonBtn = document.querySelector('#random')
const share = document.querySelector('#share')
const author = document.querySelector('#author')
const Frase = document.querySelector('#quote')
const tag0 = document.querySelector('#tag0')
const tag1 = document.querySelector('#tag1')


let Quote = []
function DisplayRandomQuote(){
    fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json')
    .then(resp => resp.json())
    .then(dados =>{
        let randomIndex = Math.floor(Math.random() * dados.length);
        let dado = dados[randomIndex]
        
        Quote.push(dado.author)
        Quote.push(dado.quote)
        author.innerHTML = dado.author
        Frase.innerHTML = `"${dado.quote}"`
        tag0.innerHTML = dado.tags[0]
        tag1.innerHTML = dado.tags[1]
    })
    .catch(err => {
        alert('Não foi possível carregar as citações. 😕\nVerifique sua conexão com a internet.');
    })
}

DisplayRandomQuote()
randonBtn.addEventListener('click', DisplayRandomQuote);


console.log(Quote)
async function copiarParaClipboard(Quote) {
    try {
        await navigator.clipboard.writeText(Quote);
        alert('✅ Texto copiado com sucesso!');
    } catch (erro) {
        console.error('Erro ao copiar:', erro);
        alert('❌ Não foi possível copiar o texto.');
    }    
}

share.addEventListener('click', copiarParaClipboard);