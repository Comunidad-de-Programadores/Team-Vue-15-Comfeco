<template>
  <div id="Eventos">
    <h1>Eventos activos</h1>
    <v-container>
      <v-row>
        <v-col v-for="(event, index) in events" :key="index" sm="12" md="4">
          <v-card>
            <v-img
              height="250px"
              src="https://pbs.twimg.com/profile_banners/1348097386489511939/1612459981/1080x360"
            />
            <v-card-title>{{ event.name }}</v-card-title>
            <v-card-text>
              <p>{{ event.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" @click="participateEvent(event)">Participar</v-btn>
              <v-btn outlined color="primary">Mas información</v-btn>
              <v-btn color="green">
                <v-icon color="white">mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <UiModalConfirm
        v-model="dialog"
        :messageConfirm="messageConfirm"
        v-on:call-function="pushRoute"
      />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Eventos',
  props: {
    events: Array,
  },
  data() {
    return {
      dialog: false,
      error: '',
      messageConfirm: '',
    };
  },
  methods: {
    async participateEvent(event) {
      try {
        const resp = await this.$axios.$get(
          'http://localhost:3001/users/info/' + this.$fire.auth.currentUser.uid
        );
        console.log(resp.user);
        const infoEventUser = {
          id_user: resp.user.id,
          id_event: event.id,
        };
        await this.$axios.$post('http://localhost:3001/events', infoEventUser);
        this.messageConfirm = 'Guardado en tus eventos';
        this.dialog = true;
      } catch (error) {
        console.log(error);
        this.messageConfirm = 'Ocurrió un error al guardar el evento intentalo más tarde';
        this.dialog = true;
      }
    },
    pushRoute() {
      this.dialog = false;
    },
  },
};
</script>

<style>
#Eventos {
  margin-bottom: 70px;
}
#Eventos h1 {
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
}
</style>
