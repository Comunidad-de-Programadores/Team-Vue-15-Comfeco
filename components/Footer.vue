<template>
  <div id="footer">
    <v-col cols="12" lg="3" md="12" sm="12" offset-lg="1">
      <h3>¡Inicia el 2022 aceptando el reto!</h3>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" lg="3">
      <h3>Términos y condiciones</h3>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" lg="6">
      <v-row>
        <v-col cols="12" lg="5">
          <h4>Síguenos en nuetras redes:</h4>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" lg="7">
          <v-row
            ><img class="icon" src="../assets/logos/facebook.svg" alt="facebook" />
            <img class="icon" src="../assets/logos/discord.svg" alt="discord" />
            <img class="icon" src="../assets/logos/youtube-icon.svg" alt="youtube"
          /></v-row>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 10%;
  background: #3b0246;
  z-index: 2;
  display: flex;
  position: relative;
  align-items: center;
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  p {
    margin: 10px;
  }
  h3 {
    width: 55%;
    margin: 2% 10%;
  }
  a {
    color: white;
  }
  .icon {
    width: 10%;
    height: auto;
    margin: 10px;
  }
}
</style>
