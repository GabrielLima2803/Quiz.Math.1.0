const questoes = [
  {
    id: 1,
    pergunta: 'Pergunta 1',
    img: '',
    respostas: [
      {
        id: 1.1,
        texto: 'Opção 1',
        correta: false
      },
      {
        id: 1.2,
        texto: 'Opção 2',
        correta: false
      },
      {
        id: 1.3,
        texto: 'Opção 3',
        correta: true
      },
      {
        id: 1.4,
        texto: 'Opção 4',
        correta: false
      }
    ]
  },
  {
    id: 2,
    pergunta: 'Pergunta 2',
    img: '',
    respostas: [
      {
        id: 2.1,
        texto: 'Opção da perg 2 1',
        correta: false
      },
      {
        id: 2.2,
        texto: 'Opção da perg 2 2',
        correta: false
      },
      {
        id: 2.3,
        texto: 'Opção da perg 2 3',
        correta: true
      },
      {
        id: 2.4,
        texto: 'Opção da perg 2 4',
        correta: false
      }
    ]
  },
  {
    id: 3,
    pergunta: 'Pergunta 3',
    img: '',
    respostas: [
      {
        id: 3.1,
        texto: 'Opção da perg 3 1',
        correta: false
      },
      {
        id: 3.2,
        texto: 'Opção da perg 3 2',
        correta: false
      },
      {
        id: 3.3,
        texto: 'Opção da perg 3 3',
        correta: true
      },
      {
        id: 3.4,
        texto: 'Opção da perg 2 4',
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
