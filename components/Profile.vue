<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="3">
          <v-card class="px-1 pb-12" outlined>
            <img v-if="image" class="profile" :src="image" />
            <img
              v-else
              class="profile"
              src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
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
            <v-card-subtitle v-if="speciality">{{ speciality }}</v-card-subtitle>
            <v-card-subtitle v-else>{{ speciality }}</v-card-subtitle>
            <p v-if="biography" class="body-2 mx-4">{{ biography }}</p>
            <p v-else class="body-2 mx-4">
              ¡Completa tu perfil y gana tu primera insignia!
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
              <v-card color="#efefef" outlined tile class="text-center pa-4">
                <h1 class="primary--text font-weight-bold">Insignias</h1>
                <v-row v-if="myBadges.length != 0">
                  <v-col
                    class="text-center ma-2"
                    v-for="(badge, index) in myBadges"
                    :key="index"
                  >
                    <img
                      width="140px"
                      class="pa-1"
                      src="https://i.imgur.com/zt9FZ7k.png"
                    />
                  </v-col>
                </v-row>
                <v-row class="body-2 my-5" v-else>
                  Aún no cuentas con insignias, puedes obtener tu primera insignia
                  completando la información de tu perfil.
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
            <h2>Eventos Guardados</h2>
            <v-row v-if="myEvents.length != 0" style="max-height: 560px; overflow: auto">
              <v-col md="12" v-for="(event, index) in myEvents" :key="index">
                <v-card color="#efefef" class="pa-2" flat>
                  <v-img src="https://pbs.twimg.com/media/Et0UCkRXUAA98fS.jpg" />
                  <v-card-title>Evento {{ event.id_event }}</v-card-title>
                  <v-card-actions class="text-center">
                    <v-btn color="secondary">Mas información</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row v-else class="body-2" style="max-height: 560px; overflow: auto">
              <v-col md="12">
                <v-card flat color="#efefef" class="pa-4 ma-5">
                  Aún no cuentas con eventos, puedes agregar un evento a tu agenda desde
                  la opción eventos.
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
  name: 'Profile-comp',
  props: {
    badges: Array,
    events: Array,
    myEvents: Array,
    myBadges: Array,
  },
  async created() {
    await this.getNicknameUser();
  },
  data() {
    return {
      nickname: '',
      biography: '',
      speciality: '',
      image: '',
    };
  },
  computed: {
    minEvent() {
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
        localStorage.setItem('id_firebase', uid);
        const id = await localStorage.getItem('id_firebase');
        const result = await this.$axios.$get('http://localhost:3001/users/info/' + id);
        const user = result.user;
        this.nickname = user.username;
        this.biography = user.biography;
        this.speciality = user.speciality;
        this.image = user.image;
      } catch (error) {
        console.log('Error - Home ', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#Profile-comp {
  margin-bottom: 70px;
}
#Profile {
  h1 {
    font-weight: 300;
    padding: 20px;
  }
  h2 {
    font-weight: 300;
    padding: 16px;
  }
}
.profile {
  width: 80%;
  margin: 10%;
}
</style>
