<template>
  <div id="EditarPerfil">
    <h2>Editar perfil</h2>
    <button class="to-perfil" @click="$emit('toperfil')">Retroceder</button>
    <img src="~/assets/logos/vue-icon.svg" />
    <div class="cont">
      <v-form>  
        <v-container>
          <v-row>
            <v-col><v-text-field label="Nick"></v-text-field></v-col>
            <v-col><v-text-field label="Correo"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field label="Genero"></v-text-field></v-col>
            <v-col><v-text-field label="Fecha de Nacimiento"></v-text-field></v-col>
            <v-col><v-text-field label="País"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field label="Contraseña"></v-text-field></v-col>
            <v-col><v-text-field label="Repetir contraseña"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-subheader>facebook.com/</v-subheader></v-col>
            <v-col><v-text-field label="id"></v-text-field></v-col>
            <v-col><v-subheader>github.com/</v-subheader></v-col>
            <v-col><v-text-field label="id"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col><v-subheader>linkedin.com/in/</v-subheader></v-col>
            <v-col><v-text-field label="id"></v-text-field></v-col>
            <v-col><v-subheader>twitter.com/</v-subheader></v-col>
            <v-col><v-text-field label="id"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-textarea label="Biografia"></v-textarea>
          </v-row>
          <v-row>
            <v-btn color="primary">Guardar cambios</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import "~/assets/css/EditarPerfil.css";

export default {
  name: "EditarPerfil",
};
</script>

<style>
</style>