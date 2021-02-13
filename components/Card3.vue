<template>
  <div class="Card">
    <div class="content">
      <h2>C#MFECO</h2>
      <p>COMUNITY FEST AND CODE</p>
      <div class="text">
        <h3>Reasignar contraseña</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium harum ex quia! Eligendi, consectetur quam possimus repellendus corrupti voluptatum dolore aperiam.</p>
      </div>
      <div class="fields">
        <input type="text" placeholder="Correo electronico">
      </div>
      <button>Recupera contraseña</button>
      <!--<a id="toRegister" href="#">¿No tienes cuenta? <span id="reg">Registrate</span></a>-->
      <span id="toRegister">Regresa al <Nuxt-link class="n-link" to="/inicio" >Inicio</Nuxt-link></span>
    </div>
  </div>
</template>

<script>
import '../assets/css/Card.css'

export default {

}
</script>

<style scoped>
.text{
  margin-top: 60px;
  text-align: left;
}
</style>