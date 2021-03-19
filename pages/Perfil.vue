<template>
  <div id="Perfil">
    <Header
      ><template v-slot:content><NavMain /></template>
    </Header>
    <div class="submenu">
      <v-container>
        <v-card class="card" flat elevation="0">
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
    <Perfil
      v-show="submodulos[0]"
      @toedit="toModule(4)"
      :badges="badges"
      :events="events"
    />
    <Insignias v-show="submodulos[1]" :badges="badges" />
    <Grupos v-show="submodulos[2]" :groups="groups" />
    <Eventos v-show="submodulos[3]" :events="events" />
    <EditarPerfil v-show="submodulos[4]" @toperfil="toModule(0)" />
    <Footer />
  </div>
</template>

<script>
import '~/assets/css/Perfil.css';

var testBadge = [
  {
    id: 1,
    name: 'Sociable',
    description: 'Primeros pasos para ser una persona mas sociable.',
    explanation: 'Será obtenida si el usuario completa todo su perfil.',
    image: '',
  },
  {
    id: 2,
    name: 'Colaborador',
    description: 'Dedicado a ayudar a los demas',
    explanation: 'Proximamente',
    image: '',
  },
  {
    id: 3,
    name: 'Maestro',
    description: 'Bastante sabio',
    explanation: 'Proximamente',
    image: '',
  },
];
var testEvents = [
  {
    id: 1,
    name: 'Evento 1',
    description: 'Descripcion evento 1',
    image: '',
  },
  {
    id: 2,
    name: 'Evento 2',
    description: 'Descripcion evento 2',
    image: '',
  },
  {
    id: 3,
    name: 'Evento 3',
    description: 'Descripcion evento 3',
    image: '',
  },
  {
    id: 4,
    name: 'Evento 4',
    description: 'Descripcion evento 4',
    image: '',
  },
];
var testGroups = [
  {
    id: 1,
    name: 'Equipo Javascript',
    description: 'Descripcion Equipo Javascript',
    tag: 'Javascript',
    image: '',
  },
  {
    id: 2,
    name: 'Equipo Typescript',
    description: 'Descripcion Equipo Typescript',
    tag: 'Typescript',
    image: '',
  },
  {
    id: 3,
    name: 'Equipo Java',
    description: 'Descripcion Equipo Java',
    tag: 'Java',
    image: '',
  },
  {
    id: 4,
    name: 'Equipo Ruby',
    description: 'Descripcion Equipo Ruby',
    tag: 'Ruby',
    image: '',
  },
  {
    id: 5,
    name: 'Equipo Haskell',
    description: 'Descripcion Equipo Haskell',
    tag: 'Haskell',
    image: '',
  },
  {
    id: 6,
    name: 'Equipo Go',
    description: 'Descripcion Equipo Go',
    tag: 'Go',
    image: '',
  },
  {
    id: 7,
    name: 'Equipo C',
    description: 'Descripcion Equipo C',
    tag: 'C',
    image: '',
  },
  {
    id: 8,
    name: 'Equipo C++',
    description: 'Descripcion Equipo C++',
    tag: 'C++',
    image: '',
  },
  {
    id: 9,
    name: 'Equipo C#',
    description: 'Descripcion Equipo C#',
    tag: 'C#',
    image: '',
  },
  {
    id: 10,
    name: 'Equipo Vuejs',
    description: 'Descripcion Equipo Vuejs',
    tag: 'Vuejs',
    image: '',
  },
  {
    id: 11,
    name: 'Equipo Laravel',
    description: 'Descripcion Equipo Laravel',
    tag: 'Laravel',
    image: '',
  },
  {
    id: 12,
    name: 'Equipo Angular',
    description: 'Descripcion Equipo Angular',
    tag: 'Angular',
    image: '',
  },
  {
    id: 13,
    name: 'Equipo React',
    description: 'Descripcion Equipo React',
    tag: 'React',
    image: '',
  },
  {
    id: 14,
    name: 'Equipo Lua',
    description: 'Descripcion Equipo Lua',
    tag: 'Lua',
    image: '',
  },
];

export default {
  data() {
    return {
      activePerfil: true,
      activeEdit: false,
      submodulos: [true, false, false, false, false],
      moduloActivo: 0,
      badges: testBadge,
      events: testEvents,
      groups: testGroups,
    };
  },

  created() {
    this.getBadges();
    this.getEvents();
    this.getGroups();
  },

  methods: {
    toModule(index) {
      this.submodulos[this.moduloActivo] = false;
      this.submodulos[index] = true;
      this.moduloActivo = index;
      this.$forceUpdate();
    },
    async getBadges() {
      const request = await this.$axios.$get(`http://localhost:3001/badges/badgesAll`);
      console.log('request');
      console.log(request);
      this.badges = request.badges;
    },
    async getEvents() {
      const request = await this.$axios.$get(`http://localhost:3001/events/eventsAll`);
      console.log('request');
      console.log(request);
      this.events = request.events;
    },
    async getGroups() {
      const request = await this.$axios.$get(`http://localhost:3001/groups/groupsAll`);
      console.log('request');
      console.log(request);
      this.groups = request.groups;
    },
  },
};
</script>

<style></style>
