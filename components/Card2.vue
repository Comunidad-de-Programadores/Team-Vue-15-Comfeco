<template>
  <div class="Card">
    <div class="content">
      <h2>C#MFECO</h2>
      <p>COMUNITY FEST AND CODE</p>
      <!--<div class="switcher">
        <a href="#">Logearse</a>
        |
        <a href="#">Registrar</a>
      </div>-->
      <div class="fields">
        <input type="text" placeholder="Nick">
        <input type="text" placeholder="Correo electronico">
        <input type="text" placeholder="Contraseña">
        <input type="text" placeholder="Cofirma contraseña">
        <!--<a href="#">¿Olvidaste tu contraseña?</a>-->
      </div>
      <button>Crear una cuenta</button>
      <div class="disclaim">
        Al registrarte aceptas las <span id="reg">Politicas</span> y demas adasd adasasd <span id="reg">privacidad</span> asdadasdd asdasdasd
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/Card.css'

export default {

}
</script>

<style scoped>
.disclaim{
  margin: 10px;
}
</style>