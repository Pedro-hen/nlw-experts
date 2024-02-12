const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x;",
        "variable x;",
        "let x;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'getElementById()' em JavaScript?",
      respostas: [
        "Selecionar um elemento pelo nome da classe.",
        "Selecionar um elemento pelo ID.",
        "Selecionar um elemento pelo nome da tag.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico para 'ou' em JavaScript?",
      respostas: [
        "||",
        "&&",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "55",
        "10",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método em JavaScript utilizado para adicionar um elemento ao final de um array?",
      respostas: [
        "push()",
        "addToEnd()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparar se dois valores são iguais, incluindo o tipo de dado.",
        "Comparar se dois valores são iguais, sem verificar o tipo de dado.",
        "Atribuir um valor a uma variável.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método em JavaScript para converter uma string em um número inteiro?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "' Comentário",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: [
        "Remove um evento de um elemento.",
        "Adiciona um evento a um elemento.",
        "Modifica um evento de um elemento.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '%' em JavaScript?",
      respostas: [
        "Divisão",
        "Multiplicação",
        "Resto da divisão",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    // loop das respostas
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // exibindo as resposta do quiz
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    // removendo item do quiz
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergnta na tela
    quiz.appendChild(quizItem)
  }