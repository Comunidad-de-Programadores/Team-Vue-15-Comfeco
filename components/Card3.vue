<template>
  <div class="card">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="text">
        <h3>Reasignar contraseña</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium
          harum ex quia! Eligendi, consectetur quam possimus repellendus corrupti
          voluptatum dolore aperiam.
        </p>
      </div>
      <div class="fields">
        <v-text-field type="text" placeholder="Correo electronico" />
      </div>
      <button>Recupera contraseña</button>
      <!--<a id="toRegister" href="#">¿No tienes cuenta? <span id="reg">Registrate</span></a>-->
      <span id="toRegister"
        >Regresa al <Nuxt-link class="n-link" to="/inicio">Inicio</Nuxt-link></span
      >
    </div>
  </div>
</template>

<script>
import '../assets/css/Card.css';

export default {};
</script>

<style scoped>
.text {
  margin-top: 60px;
  text-align: left;
}
</style>
