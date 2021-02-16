<template>
  <v-card class="card" height="480px">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="text">
        <h3>Reasignar contraseña</h3>
        <p>
          Te enviaremos un correo electrónico con un enlace privado
          para que reasignes tu contraseña.
        </p>
      </div>
      <div class="fields">
        <v-text-field type="text" placeholder="Correo electronico" />
      </div>
      <button>Recupera contraseña</button>
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
</style>
