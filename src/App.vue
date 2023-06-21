<script setup> 
  import { ref } from 'vue'

  const alternativas = ref([
    {
    id: 1,
    nome: 'Camiseta',
    
    }
  ])
</script>

<template>

  <header class="headermanero">
    <div class="NQuestao">

      <h2 class="numero">1°</h2>
      
    </div>
    <div class="materia">
      <h2>MathQuiz</h2>
    </div>
  </header>


  <main>
    
    <div class="container">
      <div class="Questao">
        <div class="pergunta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia nesciunt non iusto, dolorum aliquam autem quod ipsa excepturi dolorem modi deleniti officia nam quas illo sequi dicta voluptatibus iste? barigadam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus tempore molestias dolorem delectus fugit illum provident illo earum quas, corrupti non tenetur labore in? At saepe possimus inventore sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio voluptatibus soluta voluptatem pariatur ducimus ipsum modi quam voluptates magni quod nulla perferendis, ut culpa ex, explicabo dolore illo odio.
        </div>
        
        <div class="img">
        </div>
        <!-- Fim de Questao -->
      </div>

      <div class="alternativas">

        <button type="button" class="" >1</button>
        <button type="button" class="" >2</button>
        <button type="button" class="" >3</button>
        <button type="button" class="" >4</button>
        
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
  margin-right: 10px;
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
  width: 70%;
  background-color: rgb(26, 25, 25);
  font-family: 'Comic Neue', cursive;

}
.NQuestao{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: rgb(51, 13, 82);
  margin: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-family: 'Comic Neue', cursive;
}
.numero{
  margin: 0;
}
</style>