<template>
  <v-row>
    <Header
      ><template v-slot:content><NavMain /></template
    ></Header>
    <section id="Home" class="home-text">
      <v-col cols="12" lg="12" md="12" sm="12"
        ><h3>Bienvenidos a Comunity Fest and Code</h3>
        <h4 class="secondary--text">¡Conoce gente, aprende y gana!</h4></v-col
      ><v-row>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" md="3">
          <Community />
        </v-col>
        <v-col cols="12" md="6" sm="8">
          <p class="text-center caption my-0 py-0 px-4">
            La proxima edición regresa en 2022, en la cual se planea involucrar a todos
            los programadores independientes del area del conocimiento que se encuentre,
            todo con un mismo proposito, aprender en comunidad.
          </p>
          <SliderCoachs />
        </v-col>
        <v-col cols="12" md="3">
          <Community />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" sm="12" offset-lg="2">
          <SliderSponsors />
        </v-col>
      </v-row>
      <Counter />
    </section>

    <Footer />
  </v-row>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#Home {
  font-family: 'Montserrat', sans-serif;
  height: 90vh;
  overflow-y: scroll;
}

.home-text {
  text-align: center;
  align-content: center;
  height: 20%;
  width: 100%;
  position: relative;
  top: 15%;
}

h4 {
  color: gray;
}
p {
  padding: 20px 0;
}

#home-wrapper {
  position: relative;
  top: 25%;
}
</style>
