<template>
  <v-card class="mx-auto justify-center" id="Comunidades" max-width="300" height="250">
    <v-row class="pa-2"
      ><v-card-title class="font-weight-bold">Comunidades </v-card-title
      ><v-btn class="ma-5" elevation="0" color="primary" light outlined small shaped
        >Ver más</v-btn
      ></v-row
    >
    <v-list class="py-0 my-0" v-for="(item, i) in items" :key="i">
      <v-list-item class="py-0 my-0">
        <v-avatar class="my-1">
          <img :src="item.logo" :alt="item.comunidad" />
        </v-avatar>
        <v-list-item-content class="py-0 my-0">
          <p class="body-2">{{ item.comunidad }}</p>
        </v-list-item-content>
        <v-list-item-icon>
          <v-btn :href="item.link" target="_blank" color="secondary" small shaped
            >Unirme
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          logo: 'https://i.imgur.com/Xf59Mmk.png?3',
          comunidad: 'Comunidad de Programadores',
          link: 'https://discord.gg/8FEBqkkJvA',
        },
        {
          logo: 'https://pbs.twimg.com/profile_images/1256273201799233536/2jUSixi3.jpg',
          comunidad: 'Null*Pointers',
          link: 'https://discord.gg/SCTqdGXKax',
        },
        {
          logo: 'https://portalmybot.com/assets/img/logo-guia.png',
          comunidad: 'MyBOT Team',
          link: 'https://discord.gg/g6ssSmKg',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
