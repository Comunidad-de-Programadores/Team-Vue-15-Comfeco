<template>
  <v-card class="card">
    <div class="content">
      <img src="../assets/logos/code-icon.svg" alt="logo comunidad" />
      <!--<div class="switcher">
        <a href="#">Logearse</a>
        |
        <a href="#">Registrar</a>
      </div>-->
      <div class="fields">
        <v-text-field type="text" placeholder="Nick" />
        <v-text-field type="text" placeholder="Correo electronico" />
        <v-text-field type="text" placeholder="Contraseña" />
        <v-text-field type="text" placeholder="Cofirma contraseña" />
        <button class="toRegister">Crear una cuenta</button>

        <!--<a href="#">¿Olvidaste tu contraseña?</a>-->
      </div>
      <div class="disclaim">
        Al registrarte aceptas las <span id="reg">Politicas</span> y demas adasd adasasd
        <span id="reg">privacidad</span> asdadasdd asdasdasd
      </div>
    </div>
  </v-card>
</template>

<script>
import '../assets/css/Card.css';

export default {};
</script>

<style scoped>
.disclaim {
  margin: 10px;
}
</style>
