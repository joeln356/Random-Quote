const randonBtn = document.querySelector('#random')
const share = document.querySelector('#share')
const author = document.querySelector('#author')
const Frase = document.querySelector('#quote')
const tag0 = document.querySelector('#tag0')
const tag1 = document.querySelector('#tag1')
let CurrentQuote = {}

async function DisplayRandomQuote() {

    
    try{
        const resp = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json')
        
        const dados = await resp.json()
        const randomIndex = Math.floor(Math.random() * dados.length);

        const dado = dados[randomIndex];
        author.innerHTML = dado.author
        Frase.innerHTML = `"${dado.quote}"`
        tag0.innerHTML = dado.tags[0]
        tag1.innerHTML = dado.tags[1]

        CurrentQuote = {
            autor: dado.author,
            frase: dado.quote
        }
        

    }catch (err){
        alert('Não foi possível carregar as citações. 😕\nVerifique sua conexão com a internet.');
    }
    
}


DisplayRandomQuote()
randonBtn.addEventListener('click', DisplayRandomQuote);



async function copiarParaClipboard() {
    if(!CurrentQuote.frase){
        alert("Clique no botão \"random\" Primeiro")
    }
    const textoParaCopiar = `"${CurrentQuote.frase}"\n\n— ${CurrentQuote.autor}`
    try {
        // 
        await navigator.clipboard.writeText(textoParaCopiar);

        console.log( textoParaCopiar)
        
        alert('✅ Texto copiado com sucesso!');
    } catch (erro) {
        console.error('Erro ao copiar:', erro);
        alert('❌ Não foi possível copiar o texto.');
    }    
}

share.addEventListener('click', copiarParaClipboard);