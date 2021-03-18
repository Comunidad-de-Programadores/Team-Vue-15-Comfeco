<template>
  <v-row>
    <Header
      ><template v-slot:content>
        <v-list class="d-flex mt-4" dense>
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
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon color="black">notifications_none</v-icon></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="avatar-user px-2">
            <v-list-item-avatar>
              <v-img
                src="https://img.icons8.com/cotton/2x/gender-neutral-user.png"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="mx-2">{{
              nickname || 'Admin Comfeco'
            }}</v-list-item-title>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on">
                  <v-icon color="black">keyboard_arrow_down</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item link to="/perfil">
                  <v-list-item-title>Mi perfil</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/">
                  <v-list-item-title>Cerrar Sesión</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>
      </template></Header
    >
    <section id="Home" class="home-text">
      <v-col cols="12" lg="12" md="12" sm="12"
        ><h3>Bienvenidos a Comunity Fest and Code</h3>
        <h4 class="secondary--text">¡Conoce gente, aprende y gana!</h4></v-col
      ><v-row>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" md="3">
          <Comunidades />
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
          <Comunidades />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" sm="12" offset-lg="2">
          <SliderSponsors />
        </v-col>
      </v-row>
      <Contador />
    </section>

    <Footer />
  </v-row>
</template>

<script>
import Comunidades from '../components/Comunidades.vue';
import Header from '../components/Header';
import SliderCoachs from '../components/SliderCoachs';
import SliderSponsors from '../components/SliderSponsors';
export default {
  components: { Comunidades, Header, SliderCoachs, SliderSponsors },
  name: 'Home',
  data() {
    return {
      nickname: '',
    };
  },
  async created() {
    await this.getNicknameUser();
  },
  async mounted() {
    await this.getNicknameUser();
  },
  methods: {
    async getNicknameUser() {
      try {
        const { uid } = this.$fire.auth.currentUser;
        console.log('USUARIO LOGUEADO', uid);
        localStorage.setItem('id_firebase', uid);
        const id = await localStorage.getItem('id_firebase');
        const result = await this.$axios.$get('http://localhost:3001/users/info/', {
          params: {
            id,
          },
        });
        console.log(result);
        const user = result.user;
        this.nickname = user.username;
      } catch (error) {
        console.log('Error - Home ', error);
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#Home {
  font-family: 'Montserrat', sans-serif;
  height: 90vh;
  overflow-y: scroll;
}
.avatar-user {
  border: 1px solid gray;
  border-radius: 15px;
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
