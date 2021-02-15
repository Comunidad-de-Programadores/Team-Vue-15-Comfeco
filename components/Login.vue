<template>
  <v-card class="card text-center">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <div class="switcher">
        <a href="#">Inicia Sesión</a>
        |
        <a href="#">Regístrate</a>
      </div>
      <v-text-field type="text" placeholder="Correo electronico"></v-text-field>
      <v-text-field type="password" placeholder="Contraseña"></v-text-field>
      <a href="/recupera">¿Olvidaste tu contraseña?</a>
    </div>
    <button>Ingresar</button>
    <span id="register"
      >¿No tienes cuenta?
      <Nuxt-link class="n-link" to="/register">Registrate</Nuxt-link></span
    >
  </v-card>
</template>

<script>
import '../assets/css/Card.css';

export default {};
</script>

<style scoped></style>
