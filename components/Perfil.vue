<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="3">
          <v-card class="px-1 pb-12" outlined>
            <img
              class="perfil"
              src="https://img.icons8.com/cotton/2x/gender-neutral-user.png"
            />
            <v-card-title>
              {{ nickname || 'Admin' }}
              <v-btn
                small
                color="primary"
                style="display: block"
                absolute
                @click="$emit('toedit')"
                right
                >Editar<v-icon color="white">mdi-account-edit</v-icon></v-btn
              >
            </v-card-title>
            <v-card-subtitle>{{ speciality }}</v-card-subtitle>
            <p class="body-2 mx-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptas
              recusandae labore molestiae aspernatur dolore officia quam amet accusantium
              eius? Vel delectus molestias dicta hic aperiam ipsam est quaerat
              repudiandae.
            </p>
            <v-card-actions>
              <v-row>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/react-icon.svg" /></v-avatar>
                </v-col>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/angular-icon.svg" /></v-avatar>
                </v-col>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/svelte-icon.svg" /></v-avatar>
                </v-col>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/vue-icon.svg" /></v-avatar>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-row>
            <v-col md="12">
              <v-card color="aliceblue" outlined tile class="text-center pa-4">
                <h1 class="primary--text font-weight-bold">Insignias</h1>
                <v-row>
                  <v-col
                    class="text-center ma-2"
                    v-for="(badge, index) in minBadge"
                    :key="index"
                  >
                    <img
                      width="140px"
                      class="pa-1"
                      src="https://i.imgur.com/zt9FZ7k.png"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-card outlined class="pa-2 text-center">
                <h2>Actividad Reciente</h2>
                <v-row class="pa-5" v-for="n in 3" :key="n">
                  <v-list>
                    <v-list-item>
                      <v-list-item-content class="text-left">
                        <p class="body-2">
                          En breves minutos empieza el taller con Ignacio Anaya por h
                          <a
                            class="primary--text"
                            href="https://tekki.tv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >@Tekki_tv_</a
                          >
                          Entra al taller acá:
                          <a
                            class="primary--text"
                            href="https://tekki.tv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >https://tekki.tv/ianaya89</a
                          >
                          @VueJsNews @vuejs_events @vuejsdevelopers
                        </p>
                      </v-list-item-content>
                      <v-list-item-avatar size="76">
                        <v-img
                          src="https://pbs.twimg.com/profile_images/1350559877874249731/ZPEGZ9wE.png"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-list>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3">
          <v-card color="white">
            <h2>Eventos de interes</h2>
            <v-row style="max-height: 560px; overflow: auto">
              <v-col md="12" v-for="(event, index) in minEvent" :key="index">
                <v-card color="#efefef" class="pa-2" flat>
                  <v-img src="https://pbs.twimg.com/media/Et0UCkRXUAA98fS.jpg" />
                  <v-card-title>{{ event.name }}</v-card-title>
                  <v-card-actions class="text-center">
                    <v-btn color="secondary">Mas información</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Perfil-comp',
  props: {
    badges: Array,
    events: Array,
    nickname: '',
    biagraphy: '',
    speciality: '',
  },
  async created() {
    await this.getNicknameUser();
  },
  computed: {
    minBadge() {
      if (this.badges) {
        let reduced = this.badges.slice(0, 5);
        return reduced;
      }
    },
    minEvent() {
      console.log('this.events.length');
      console.log(this.events);
      if (this.events) {
        let reduced = this.events.slice(0, 5);
        return reduced;
      }
    },
  },
  methods: {
    async getNicknameUser() {
      try {
        const { uid } = this.$fire.auth.currentUser;
        console.log('USUARIO LOGUEADO', uid);
        localStorage.setItem('id_firebase', uid);
        const id = await localStorage.getItem('id_firebase');
        const result = await this.$axios.$get('http://localhost:3001/users/info/' + id);
        console.log('Perfil', result);
        const user = result.user;
        this.nickname = user.username;
        this.biagraphy = user.biagraphy;
        this.speciality = user.speciality;
      } catch (error) {
        console.log('Error - Home ', error);
      }
    },
  },
};
</script>

<style lang="scss">
#Perfil-comp {
  margin-bottom: 70px;
}
#Perfil h1 {
  font-weight: 300;
  padding: 20px;
}
#Perfil h2 {
  font-weight: 300;
  padding: 16px;
}
.perfil {
  width: 80%;
  margin: 10%;
}
</style>
