<template>
  <v-card class="card">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="text">
        <h3>Terminos y condiciones</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium
          harum ex quia! Eligendi, consectetur quam possimus repellendus corrupti
          voluptatum dolore aperiam.Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquam laudantium
          harum ex quia! Eligendi, consectetur quam possimus repellendus corrupti
          voluptatum dolore aperiam.Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquam laudantium
          harum ex quia! Eligendi, consectetur quam possimus repellendus corrupti
          voluptatum dolore aperiam.
        </p>
      </div>
      <span>Regresa al <Nuxt-link class="n-link" to="/">Inicio</Nuxt-link></span>
    </div>
  </v-card>
</template>

<script>
import '../assets/css/Login.css';

export default {};
</script>

<style scoped>
.text {
  margin-top: 60px;
  text-align: left;
}
.text h3{
  margin: 16px 0;
}
.card{
  max-width: 900px;
}
span{
  display: inline-block;
  margin: 20px;
}
</style>
