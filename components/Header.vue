<template>
  <section id="header">
    <v-navigation-drawer
      color="primary"
      v-model="drawer"
      v-if="$vuetify.breakpoint.mdAndDown"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link>
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon color="white">power_settings_new</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Cerrar Sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      tile
      height="90"
      :elevation="1"
      app
      color="white"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown && currentRouteName === 'Home'"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <img id="logo" src="../assets/logos/logo.svg" alt="logo" />
      <v-spacer></v-spacer>
      <slot v-if="$vuetify.breakpoint.lgAndUp" name="content"></slot>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  props: {
    hasLogin: Boolean,
  },
  data() {
    return {
      dialog: false,
      drawer: false,
      items: [
        { icon: 'mdi-home', text: 'Inicio' },
        { icon: 'mdi-account-heart', text: 'Comunidades' },
        { icon: 'mdi-desktop-mac-dashboard', text: 'Talleres' },
        { icon: 'mdi-draw', text: 'Creadores de contenido' },
      ],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  font-family: sans-serif;
}
@media (max-width: 320px) {
  #logo {
    margin: 0 4%;
    width: 200px;
  }
}
</style>
