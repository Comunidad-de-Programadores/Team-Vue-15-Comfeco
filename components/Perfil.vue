<template>
  <div id="Perfil-comp">
    <div class="user-info">
      <img src="~/assets/logos/vue-icon.svg" alt="">
      <button class="edit-user" @click="$emit('toedit')">Editar perfil</button>
      <h1>Nick de usuario</h1>
      <h4>Frontend Developer / UI-UX</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem obcaecati quas vel quibusdam enim illum laboriosam iure itaque dicta possimus.</p>
      <hr>
      <div class="redes">
        <img src="~/assets/logos/react-icon.svg">
        <img src="~/assets/logos/react-icon.svg">
        <img src="~/assets/logos/react-icon.svg">
        <img src="~/assets/logos/react-icon.svg">
      </div>
    </div>
    <div class="wrapper">
      <div class="insignias">
        <h2>Insignias</h2>
        <hr>
        <div>
          <img src="~/assets/logos/svelte-icon.svg">
          <img src="~/assets/logos/svelte-icon.svg">
          <img src="~/assets/logos/svelte-icon.svg">
          <img src="~/assets/logos/svelte-icon.svg">
        </div>
      </div>
      <div class="actividad">
        <h2>Actividad reciente</h2>
        <div class="item">
          <p>Te has unido al evento Comunity Fest and Code</p>
          <img src="~/assets/logos/code-icon.svg">
        </div>
      </div>
    </div>
    <div class="eventos">
      <h2>Eventos de tu interes</h2>
      <a href="#">Ver mas...</a>
      <div>
        <div class="evento">
          <img src="~/assets/logos/logo.svg" >
          <h4>Comunity Fest and Code</h4>
          <button>Mas Informacion</button>
        </div>
        <div class="evento">
          <img src="~/assets/logos/logo.svg" >
          <h4>Comunity Fest and Code</h4>
          <button>Mas Informacion</button>
        </div>
        <div class="evento">
          <img src="~/assets/logos/logo.svg" >
          <h4>Comunity Fest and Code</h4>
          <button>Mas Informacion</button>
        </div>
        <div class="evento">
          <img src="~/assets/logos/logo.svg" >
          <h4>Comunity Fest and Code</h4>
          <button>Mas Informacion</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/Perfil-comp.css'

export default {
  name: "Perfil-comp"
}
</script>

<style>

</style>