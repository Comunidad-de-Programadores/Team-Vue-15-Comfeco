<template>
  <div id="Insignias">
    <h1>Mis insignias</h1>
    <v-container>
      <v-row>
        <v-col v-for="(badge, index) in badges" :key="index" sm="12" md="3">
          <v-card class="pa-4">
            <v-img height="200px" src="https://i.imgur.com/UmONHTU.png" />
            <v-card-title>{{ badge.name }}</v-card-title>
            <v-card-text>
              <h4 class="primary--text">Descripción</h4>
              <p>{{ badge.description }}</p>
              <hr />
              <h4 class="primary--text">¿Cómo ganarla?</h4>
              <p>{{ badge.explanation }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Insignias',
  props: {
    badges: Array,
  },
};
</script>

<style>
#Insignias {
  margin-bottom: 70px;
}
#Insignias h1 {
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
}
</style>
