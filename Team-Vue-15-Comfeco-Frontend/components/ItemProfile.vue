<template>
  <v-list-item class="avatar-user px-2">
    <v-list-item-avatar class="img-avatar">
      <img v-if="image" class="profile" :src="image" />
      <img
        v-else
        class="profile"
        src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
      />
    </v-list-item-avatar>
    <h5 class="text-truncate">{{ nickname || 'Admin Comfeco' }}</h5>
    <v-menu v-if="$vuetify.breakpoint.lgAndUp">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon color="black">keyboard_arrow_down</v-icon>
        </v-btn>
      </template>
      <v-list v-if="$vuetify.breakpoint.lgAndUp" dense>
        <v-list-item link to="/Profile">
          <v-list-item-title>Mi perfil</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/">
          <v-list-item-title>Cerrar Sesión</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-list-item>
</template>
<script>
export default {
  data() {
    return {
      nickname: '',
      image: '',
    };
  },
  async created() {
    await this.getNicknameUser();
  },
  methods: {
    async getNicknameUser() {
      try {
        if (this.$fire.auth.currentUser) {
          const { uid } = this.$fire.auth.currentUser;
          localStorage.setItem('id_firebase', uid);
          const id = await localStorage.getItem('id_firebase');
          const result = await this.$axios.$get('http://54.80.141.168:3001/users/info/' + id);
          const user = result.user;
          this.nickname = user.username;
          this.image = user.image;
        }
      } catch (error) {
        console.log('Error - Home', error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.avatar-user {
  border: 1px solid gray;
  border-radius: 15px;
  @media (max-width: 320px) {
    margin: 0 0 4% 0 !important;
    border: none;
    padding: 1% 4%;
    border-bottom: 1px solid white;
    border-radius: 0;
    .img-avatar {
      margin: 0 2% !important;
      padding: 0 !important;
    }
    h5 {
      color: white;
      padding: 8%;
    }
  }
}
</style>
