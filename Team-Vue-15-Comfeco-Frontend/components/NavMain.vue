<template>
  <v-list class="d-flex mt-4" dense>
    <v-list-item link to="/Home">
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
    <ItemProfile />
  </v-list>
</template>
<script>
import ItemProfile from '../components/ItemProfile';
export default {
  components: {
    ItemProfile,
  },
  methods: {
    goToDiscord() {
      window.open('https://discord.gg/VfSSMtHMVw', '_blank');
    },
  },
};
</script>
