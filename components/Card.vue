<template>
  <div class="Card">
    <div class="content">
      <h2>C#MFECO</h2>
      <p>COMUNITY FEST AND CODE</p>
      <div class="switcher">
        <a href="#">Logearse</a>
        |
        <a href="#">Registrar</a>
      </div>
      <div class="fields">
        <input type="text" placeholder="Correo electronico">
        <input type="password" placeholder="Contraseña">
        <a href="/recupera">¿Olvidaste tu contraseña?</a>
      </div>
      <button>Ingresa</button>
      <!--<a id="toRegister" href="#">¿No tienes cuenta? <span id="reg">Registrate</span></a>-->
      <span id="toRegister">¿No tienes cuenta? <Nuxt-link class="n-link" to="/register" >Registrate</Nuxt-link></span>
    </div>
  </div>
</template>

<script>
import '../assets/css/Card.css'

export default {

}
</script>

<style scoped>
</style>