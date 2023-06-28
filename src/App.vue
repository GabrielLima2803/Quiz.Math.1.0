<script setup> 
  import { ref } from 'vue'

  const questoes = ref([
    {
    id: 1,
    pergunta: 'BlaBlaBla uno',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 2,
    pergunta: 'BlaBlaBla dos',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 3,
    pergunta: 'BlaBlaBla tres',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 4,
    pergunta: 'BlaBlaBla quatros',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 5,
    pergunta: 'BlaBlaBla cincos',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 6,
    pergunta: 'BlaBlaBla ses',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 7,
    pergunta: 'BlaBlaBla zete',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 8,
    pergunta: 'BlaBlaBla oto',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 9,
    pergunta: 'BlaBlaBla nueve',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 10,
    pergunta: 'BlaBlaBla des',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 11,
    pergunta: 'BlaBlaBla onzes',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 12,
    pergunta: 'BlaBlaBla dozes',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 13,
    pergunta: 'BlaBlaBla trezes',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 14,
    pergunta: 'BlaBlaBla quatorzes',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    },
    {
      id: 15,
    pergunta: 'BlaBlaBla quinzes',
    alternativa1: 'a',
    alternativa2: 'b',
    alternativa3: 'c',
    alternativa4: 'd'
    }
    
  ])
</script>

<template>

  <header class="headermanero">
    <div class="NQuestao">

      <h2 class="numero" v-for="(questao) in questoes" :key="questao.id" >{{  questao.id }}</h2>
      
    </div>
    <div class="materia">
      <h2 class="fodao">MathQuiz</h2>
    </div>
  </header>


  <main>
    
    <div class="container">
      <div class="Questao" v-for="(questao) in questoes" :key="questao.id" >
        <div class="pergunta">
          {{ questao.pergunta}} 
        </div>
        
        <div class="img">
        </div>
        <!-- Fim de Questao -->
      </div>

      <div class="alternativas">

        <button type="button" class="botaoUm" >1</button>
        <button type="button" class="botaoDois" >2</button> 
        <button type="button" class="botaoDois " >3</button>
        <button type="button" class="botaoUm" >4</button>
        
      </div>

      <!-- Fim do container -->
    </div>

  </main>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap');

.headermanero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
}

.Questao{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
}
.materia{
  text-align: end;
}
.pergunta{
  color: rgb(199, 199, 199);
  padding: 20px 20px;
  border: 2px solid gray;
  border-radius: 10px 10px 10px 10px;
  width: 50%;
  background-color: rgb(26, 25, 25);
  font-family: 'Comic Neue', cursive;
  font-size: 23px;
  text-align: justify;
  margin-right: 25px;
}
.NQuestao{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: rgb(221, 38, 38);
  margin: 10px;
  margin-left: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-family: 'Comic Neue', cursive;
}
.numero{
  margin: 0;
}

.botaoUm {
  border: none;
  color: white;
  background: rgb(163, 17, 17);
  width: 350px;
  height: 100px;
  margin-bottom: 25px;
}
.botaoDois{
  border: none;
  color: white;
  background: rgb(221, 38, 38);
  width: 350px;
  height: 100px;
  margin-bottom: 25px;
}
.alternativas{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 375px 375px;
  margin-top: 10%;
}

.fodao {
  font-size: 60px;
  font-family: 'Comic Neue', cursive;
}
</style>