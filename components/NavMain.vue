<template>
  <v-list class="d-flex mt-4" dense>
    <v-list-item link to="/home">
      <v-list-item-content>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="goToDiscord">
      <v-list-item-content>
        <v-list-item-title>Comunidades</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="goToDiscord">
      <v-list-item-content>
        <v-list-item-title>Talleres</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="goToDiscord">
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
        <v-img src="https://img.icons8.com/cotton/2x/gender-neutral-user.png"></v-img>
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
</template>
<script>
export default {
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
        const result = await this.$axios.$get('http://localhost:3001/users/nick/' + id);
        console.log(result);
        const user = result.user;
        this.nickname = user.username;
      } catch (error) {
        console.log('Error - Home ', error);
      }
    },
    goToDiscord() {
      window.open('https://discord.gg/VfSSMtHMVw', '_blank');
    },
  },
};
</script>
<style lang="scss">
.avatar-user {
  border: 1px solid gray;
  border-radius: 15px;
}
</style>
