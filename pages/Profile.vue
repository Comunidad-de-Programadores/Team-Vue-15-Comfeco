<template>
  <div id="Profile">
    <Header
      ><template v-slot:content><NavMain /></template>
    </Header>
    <div class="submenu">
      <v-container>
        <v-card color="#ffd46a " class="card" flat elevation="0">
          <v-row>
            <v-col class="text-center">
              <v-btn light class="primary--text" @click="toModule(0)" color="white"
                >Mi Perfil</v-btn
              >
            </v-col>
            <v-col class="text-center">
              <v-btn light class="primary--text" @click="toModule(1)" color="white"
                >Insignias</v-btn
              >
            </v-col>
            <v-col class="text-center">
              <v-btn light class="primary--text" @click="toModule(2)" color="white"
                >Grupos</v-btn
              >
            </v-col>
            <v-col class="text-center">
              <v-btn light class="primary--text" @click="toModule(3)" color="white"
                >Eventos</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
    <Profile
      v-show="submodulos[0]"
      @toedit="toModule(4)"
      :badges="badges"
      :events="events"
      :myEvents="myEvents"
      :myBadges="myBadges"
    />
    <Badges v-show="submodulos[1]" :badges="badges" />
    <Groups v-show="submodulos[2]" :groups="groups" />
    <Events v-show="submodulos[3]" :events="events" />
    <EditProfile v-show="submodulos[4]" @toperfil="toModule(0)" />
    <Footer />
  </div>
</template>

<script>
import '~/assets/scss/Profile.scss';

export default {
  data() {
    return {
      activePerfil: true,
      activeEdit: false,
      submodulos: [true, false, false, false, false],
      moduloActivo: 0,
      badges: [],
      events: [],
      groups: [],
      myEvents: [],
      myBadges: [],
    };
  },

  created() {
    this.getBadges();
    this.getEvents();
    this.getGroups();
    this.getMyEvents();
    this.getMyBadges();
  },

  methods: {
    toModule(index) {
      this.submodulos[this.moduloActivo] = false;
      this.submodulos[index] = true;
      this.moduloActivo = index;
      this.$forceUpdate();
    },
    async getBadges() {
      const request = await this.$axios.$get(`http://54.80.141.168/api/badges/badgesAll`);
      this.badges = request.badges;
    },
    async getEvents() {
      const request = await this.$axios.$get(`http://54.80.141.168/api/events/eventsAll`);
      this.events = request.events;
    },
    async getGroups() {
      const request = await this.$axios.$get(`http://54.80.141.168/api/groups/groupsAll`);
      this.groups = request.groups;
    },
    async getMyEvents() {
      const resp = await this.$axios.$get(
        'http://54.80.141.168/api/users/info/' + this.$fire.auth.currentUser.uid
      );
      const request = await this.$axios.$get(
        `http://54.80.141.168/api/events/events/` + resp.user.id
      );
      this.myEvents = request.events;
    },
    async getMyBadges() {
      const resp = await this.$axios.$get(
        'http://54.80.141.168/api/users/info/' + this.$fire.auth.currentUser.uid
      );
      const request = await this.$axios.$get(
        `http://54.80.141.168/api/users/badges/` + resp.user.id_firebase
      );
      this.myBadges = request.badges;
    },
  },
};
</script>

<style></style>
