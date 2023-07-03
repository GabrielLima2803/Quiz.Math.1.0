const questoes = [
  {
    id: 1,
    pergunta: '<p>Um teleférico foi instalado ligando uma base ao cume de uma montanha. Para a instalação, foram utilizados 1.358 m de cabos, dispostos a uma angulação de 30° em relação ao solo. Qual a altura da montanha?</p> <p>cálculo: sen(30) = altura montanha/comprimento </p>',
    img: '',
    respostas: [
      {
        id: 1.1,
        texto: 'a) 579 m',
        correta: false
      },
      {
        id: 1.2,
        texto: '1.049 m',
        correta: false
      },
      {
        id: 1.3,
        texto: '679 m',
        correta: true
      },
      {
        id: 1.4,
        texto: '480 m',
        correta: false
      }
    ]
  },
  {
    id: 2,
    pergunta: 'Cosseno é a razão entre o cateto adjacente a um ângulo e a medida da hipotenusa. Sendo  igual a 45°, calcule a medida do cateto adjacente ao ângulo alpha, no triângulo da figura. Considere',
    img: '',
    respostas: [
      {
        id: 2.1,
        texto: '19,74 m',
        correta: true
      },
      {
        id: 2.2,
        texto: '15,19 m',
        correta: false
      },
      {
        id: 2.3,
        texto: '28,03 m',
        correta: false
      },
      {
        id: 2.4,
        texto: '16,34 m',
        correta: false
      }
    ]
  },
  {
    id: 3,
    pergunta: '<p>Uma pessoa quer conhecer a largura de um rio antes de atravessá-lo. Para isso, ela fixa um ponto de referência na outra margem, como uma árvore, por exemplo (ponto C). Na posição em que se encontra (ponto B), caminhar 10 metros para a esquerda, até que se forme um ângulo de 30° entre o ponto A e o ponto C. Calcule a largura do rio.</p>',
    img: '',
    respostas: [
      {
        id: 3.1,
        texto: '5,76 m',
        correta: true
      },
      {
        id: 3.2,
        texto: '4,82 m',
        correta: false
      },
      {
        id: 3.3,
        texto: '14,14 m',
        correta: false
      },
      {
        id: 3.4,
        texto: '6,21 m',
        correta: false
      }
    ]
  },
  {
    id: 4,
    pergunta: 'Pergunta 4',
    img: '',
    respostas: [
      {
        id: 4.1,
        texto: 'Opção da perg 4 1',
        correta: false
      },
      {
        id: 4.2,
        texto: 'Opção da perg 4 4',
        correta: true
      },
      {
        id: 4.3,
        texto: 'Opção da perg 4 3',
        correta: true
      },
      {
        id: 4.4,
        texto: 'Opção da perg 4 4',
        correta: false
      }
    ]
  },
  {
    id: 5,
    pergunta: 'Pergunta 5',
    img: '',
    respostas: [
      {
        id: 5.1,
        texto: 'Opção da perg 5 1',
        correta: false
      },
      {
        id: 5.2,
        texto: 'Opção da perg 5 5',
        correta: true
      },
      {
        id: 5.3,
        texto: 'Opção da perg 5 3',
        correta: true
      },
      {
        id: 5.4,
        texto: 'Opção da perg 5 4',
        correta: false
      }
    ]
  },
  {
    id: 6,
    pergunta: 'Pergunta 6',
    img: '',
    respostas: [
      {
        id: 6.1,
        texto: 'Opção da perg 6 1',
        correta: false
      },
      {
        id: 6.2,
        texto: 'Opção da perg 6 6',
        correta: true
      },
      {
        id: 6.3,
        texto: 'Opção da perg 6 3',
        correta: true
      },
      {
        id: 6.4,
        texto: 'Opção da perg 6 4',
        correta: false
      }
    ]
  },
  {
    id: 7,
    pergunta: 'Pergunta 7',
    img: '',
    respostas: [
      {
        id: 7.1,
        texto: 'Opção da perg 7 1',
        correta: false
      },
      {
        id: 7.2,
        texto: 'Opção da perg 7 7',
        correta: true
      },
      {
        id: 7.3,
        texto: 'Opção da perg 7 3',
        correta: true
      },
      {
        id: 7.4,
        texto: 'Opção da perg 7 4',
        correta: false
      }
    ]
  },
  {
    id: 8,
    pergunta: 'Pergunta 8',
    img: '',
    respostas: [
      {
        id: 8.1,
        texto: 'Opção da perg 8 1',
        correta: false
      },
      {
        id: 8.2,
        texto: 'Opção da perg 8 8',
        correta: true
      },
      {
        id: 8.3,
        texto: 'Opção da perg 8 3',
        correta: true
      },
      {
        id: 8.4,
        texto: 'Opção da perg 8 4',
        correta: false
      }
    ]
  },
  {
    id: 9,
    pergunta: 'Pergunta 9',
    img: '',
    respostas: [
      {
        id: 9.1,
        texto: 'Opção da perg 9 1',
        correta: false
      },
      {
        id: 9.2,
        texto: 'Opção da perg 9 9',
        correta: true
      },
      {
        id: 9.3,
        texto: 'Opção da perg 9 3',
        correta: true
      },
      {
        id: 9.4,
        texto: 'Opção da perg 9 4',
        correta: false
      }
    ]
  },
  {
    id: 10,
    pergunta: 'Pergunta 10',
    img: '',
    respostas: [
      {
        id: 10.1,
        texto: 'Opção da perg 10 1',
        correta: false
      },
      {
        id: 10.2,
        texto: 'Opção da perg 10 10',
        correta: true
      },
      {
        id: 10.3,
        texto: 'Opção da perg 10 3',
        correta: true
      },
      {
        id: 10.4,
        texto: 'Opção da perg 10 4',
        correta: false
      }
    ]
  },
  {
    id: 11,
    pergunta: 'Pergunta 11',
    img: '',
    respostas: [
      {
        id: 11.1,
        texto: 'Opção da perg 11 1',
        correta: false
      },
      {
        id: 11.2,
        texto: 'Opção da perg 11 11',
        correta: true
      },
      {
        id: 11.3,
        texto: 'Opção da perg 11 3',
        correta: true
      },
      {
        id: 11.4,
        texto: 'Opção da perg 11 4',
        correta: false
      }
    ]
  },
  {
    id: 12,
    pergunta: 'Pergunta 12',
    img: '',
    respostas: [
      {
        id: 12.1,
        texto: 'Opção da perg 12 1',
        correta: false
      },
      {
        id: 12.2,
        texto: 'Opção da perg 12 12',
        correta: true
      },
      {
        id: 12.3,
        texto: 'Opção da perg 12 3',
        correta: true
      },
      {
        id: 12.4,
        texto: 'Opção da perg 12 4',
        correta: false
      }
    ]
  },
  {
    id: 13,
    pergunta: 'Pergunta 13',
    img: '',
    respostas: [
      {
        id: 13.1,
        texto: 'Opção da perg 13 1',
        correta: false
      },
      {
        id: 13.2,
        texto: 'Opção da perg 13 13',
        correta: true
      },
      {
        id: 13.3,
        texto: 'Opção da perg 13 3',
        correta: true
      },
      {
        id: 13.4,
        texto: 'Opção da perg 13 4',
        correta: false
      }
    ]
  },
  {
    id: 14,
    pergunta: 'Pergunta 14',
    img: '',
    respostas: [
      {
        id: 14.1,
        texto: 'Opção da perg 14 1',
        correta: false
      },
      {
        id: 14.2,
        texto: 'Opção da perg 14 14',
        correta: true
      },
      {
        id: 14.3,
        texto: 'Opção da perg 14 3',
        correta: true
      },
      {
        id: 14.4,
        texto: 'Opção da perg 14 4',
        correta: false
      }
    ]
  },
  {
    id: 15,
    pergunta: 'Pergunta 15',
    img: '',
    respostas: [
      {
        id: 15.1,
        texto: 'Opção da perg 15 1',
        correta: false
      },
      {
        id: 15.2,
        texto: 'Opção da perg 15 15',
        correta: true
      },
      {
        id: 15.3,
        texto: 'Opção da perg 15 3',
        correta: true
      },
      {
        id: 15.4,
        texto: 'Opção da perg 15 4',
        correta: false
      }
    ]
  }
]

function getQuestaoPorId(id) {
    return questoes.find(q => q.id === id)
}

export { questoes, getQuestaoPorId }
