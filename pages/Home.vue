<template>
  <v-row class="pa-2" id="Home">
    <Header
      ><template v-slot:content>
        <v-list class="d-flex" dense>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Comunidades</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Talleres</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Creadores de contenido</v-list-item-title>
            </v-list-item-content>
          </v-list-item> </v-list
        ><v-list class="d-flex" dense>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon color="black">notifications_none</v-icon></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="avatar-user px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="mx-2">{{ nickname }}</v-list-item-title>
            <v-icon color="black">keyboard_arrow_down</v-icon>
          </v-list-item>
        </v-list></template
      ></Header
    >
    <section class="home-text">
      <h3>Bienvenidos a Comunity Fest and Code</h3>
      <h4>Conoce gente, aprende y gana!</h4>
      <v-row>
        <v-col cols="12" md="3">
          <Comunidades />
        </v-col>
        <v-col cols="12" md="6">
          <p class="text-center caption mb-0 pb-1">
            La proxima edición regresa en 2022, en la cual se planea involucrar a todos
            los programadores independientes del area del conocimiento que se encuentre,
            todo con un mismo proposito, aprender en comunidad.
          </p>
          <Slider1 />
        </v-col>
        <v-col cols="12" md="3">
          <Comunidades />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" offset="2">
          <Slider2 />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="10" offset="2"> <Contador /></v-col>
      </v-row>
    </section>

    <Footer />
  </v-row>
</template>

<script>
import firebase from 'firebase';
import Comunidades from '../components/Comunidades.vue';
import Header from '../components/Header';
export default {
  components: { Comunidades, Header },
  name: 'Home',
  data() {
    return {
      nickname: '',
    };
  },
  async created() {
    await this.getNicknameUser();
  },
  methods: {
    async getNicknameUser() {
      const { uid } = firebase.auth().currentUser;
      console.log('USUARIO LOGUEADO', uid);
      //FIXME corregir nuevo endpoint;
      const result = await this.$axios.$get(`http://localhost:3001/users/nick/`+uid);
      console.log(result);
      const user = result.user;
      this.nickname = user.username;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#Home {
  font-family: 'Montserrat', sans-serif;
}
.avatar-user {
  border: 1px solid gray;
  border-radius: 15px;
  margin: 5px;
}
.home-text {
  text-align: center;
  align-content: center;
  height: 20%;
  width: 100%;
  position: relative;
  top: 13%;
}

h4 {
  color: gray;
}
p {
  padding: 20px 0;
}
.animated-bg {
  flex-direction: column;
  padding: 100px 0;
}
#home-wrapper {
  position: relative;
  top: 25%;
}
</style>
