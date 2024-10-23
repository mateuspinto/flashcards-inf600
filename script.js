const flashcards = [
    {
        question: "Qual a importância de preparar um trabalho de pesquisa antes de começar a escrever?",
        answer: "Para evitar escrever demais ou desnecessariamente sem um objetivo claro definido."
    },
    {
        question: "O que é considerado fundamental para o sucesso de um trabalho de pesquisa?",
        answer: "Ter um objetivo de pesquisa bem definido, que orienta todo o resto do trabalho."
    },
    {
        question: "Por que é necessária uma boa revisão bibliográfica antes de definir o objetivo de pesquisa?",
        answer: "Para entender o estado atual do conhecimento na área e identificar lacunas."
    },
    {
        question: "Qual a principal função da revisão bibliográfica no contexto de uma pesquisa científica?",
        answer: "Supre as deficiências de conhecimento do pesquisador, mas não produz conhecimento novo."
    },
    {
        question: "Como o pesquisador iniciante deve começar a revisão bibliográfica?",
        answer: "Lendo surveys e livros que ofereçam uma visão geral sobre o tema."
    },
    {
        question: "O que deve ser revisado em uma pesquisa interdisciplinar?",
        answer: "A técnica de computação aplicada, a área de aplicação e as aplicações já tentadas."
    },
    {
        question: "Por que as fichas de leitura são fundamentais durante o processo de leitura?",
        answer: "Para registrar conceitos-chave e ideias, e saber de onde vieram essas informações."
    },
    {
        question: "Como as fichas de leitura são organizadas?",
        answer: "Elas são organizadas por fonte bibliográfica e registram as principais ideias e conceitos."
    },
    {
        question: "Qual a diferença entre as fichas de leitura e o capítulo de revisão bibliográfica?",
        answer: "As fichas de leitura são apenas registros, enquanto a revisão bibliográfica organiza os conceitos de acordo com o objetivo e método do trabalho."
    },
    {
        question: "Quais são os tipos de fontes bibliográficas mais comuns?",
        answer: "Livros, artigos de eventos e periódicos científicos."
    },
    {
        question: "Qual a vantagem de usar livros como fontes bibliográficas?",
        answer: "Livros fornecem informações mais completas, didáticas e amadurecidas sobre um tema."
    },
    {
        question: "Onde normalmente se encontram ideias de pesquisa?",
        answer: "Em artigos publicados em eventos ou periódicos, pois livros focam em informações consolidadas."
    },
    {
        question: "Qual é a diferença entre publicações em eventos e periódicos na área de Computação?",
        answer: "Publicações em eventos são mais rápidas e atuais, enquanto periódicos são mais revisados e podem estar defasados."
    },
    {
        question: "Qual é o processo de submissão de artigos em eventos?",
        answer: "Envio, avaliação e pequenas modificações sugeridas, com poucas revisões subsequentes."
    },
    {
        question: "Como funciona o processo de submissão de artigos em periódicos?",
        answer: "Submissão, avaliação, revisões múltiplas até a aceitação, o que pode levar anos."
    },
    {
        question: "O que é um pré-print e qual o cuidado necessário ao usá-lo?",
        answer: "É um artigo não revisado por pares; pode conter erros e ser fonte de desinformação."
    },
    {
        question: "Qual a principal diferença entre artigos de eventos e de periódicos em relação à qualidade?",
        answer: "Artigos de eventos podem ter mais variação de qualidade, enquanto periódicos passam por revisões mais rigorosas."
    },
    {
        question: "Por onde o pesquisador iniciante deve começar a revisão bibliográfica?",
        answer: "Pelos surveys e livros que apresentam o estado da arte da pesquisa."
    },
    {
        question: "Qual a importância dos trabalhos clássicos em uma revisão bibliográfica?",
        answer: "Eles são amplamente citados e fornecem uma base sólida para a pesquisa."
    },
    {
        question: "Qual a postura que o pesquisador deve adotar ao ler artigos científicos?",
        answer: "Deve ler com espírito crítico, questionando a validade das informações."
    },
    {
        question: "O que a leitura crítica pode gerar no processo de pesquisa?",
        answer: "Gera questionamentos que podem se transformar em objetivos de pesquisa."
    },
    {
        question: "Quais perguntas podem ajudar o pesquisador a fazer uma leitura crítica?",
        answer: "De onde vêm as ideias do autor? O que foi obtido como resultado? Como o trabalho se relaciona com outros?"
    },
    {
        question: "Como o pesquisador deve avaliar a contribuição de um artigo?",
        answer: "Resumindo a contribuição real em poucas palavras; se não for possível, o artigo pode ser confuso."
    },
    {
        question: "Qual seria um próximo passo razoável após ler um artigo científico?",
        answer: "Identificar o que ainda pode ser pesquisado, gerando novas ideias de pesquisa."
    },
    {
        question: "Como uma boa revisão bibliográfica contribui para a geração de ideias de pesquisa?",
        answer: "Uma revisão sólida cria um solo fértil para ideias consistentes e bem fundamentadas."
    },
    {
        question: "Por que é importante expor-se constantemente ao ambiente científico durante a pesquisa?",
        answer: "Para gerar novas ideias e discutir temas com o orientador e outros pesquisadores."
    },
    {
        question: "O que é sugerido para alunos de mestrado e doutorado durante a fase de elaboração de objetivos de pesquisa?",
        answer: "Ler resumos de artigos e participar de defesas de teses e seminários."
    },
    {
        question: "Como as ideias de pesquisa se relacionam com a revisão bibliográfica?",
        answer: "A revisão bibliográfica forma a base para o surgimento de ideias consistentes."
    },
    {
        question: "Como o pesquisador deve organizar a pesquisa bibliográfica?",
        answer: "Listar periódicos e eventos relevantes, ler artigos, classificar sua relevância e registrar conceitos."
    },
    {
        question: "Quais são os passos para sistematizar uma pesquisa bibliográfica?",
        answer: "Identificar periódicos, listar artigos relevantes, ler resumos e fazer anotações sobre conceitos."
    },
    {
        question: "Quando o pesquisador sabe que tem material suficiente para a revisão bibliográfica?",
        answer: "Quando, em conjunto com o orientador, decide que já encontrou material suficiente e relevante."
    },
    {
        question: "O que deve ser feito se ainda não houver material suficiente para a revisão bibliográfica?",
        answer: "Expandir a pesquisa para incluir artigos mais antigos ou fontes menos relevantes."
    }
];

let currentCard = 0;
let isFlipped = false;

const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcard = document.getElementById('flashcard');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');

function loadFlashcard() {
    isFlipped = false;
    flashcard.classList.remove('flip');
    flashcardFront.textContent = flashcards[currentCard].question;
    flashcardBack.textContent = flashcards[currentCard].answer;
}

function flipFlashcard() {
    flashcard.classList.toggle('flip');
    isFlipped = !isFlipped;
}

prevBtn.addEventListener('click', () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    loadFlashcard();
});

nextBtn.addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    loadFlashcard();
});

flipBtn.addEventListener('click', flipFlashcard);

loadFlashcard();