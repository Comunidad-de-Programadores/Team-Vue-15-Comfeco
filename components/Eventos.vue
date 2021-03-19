<template>
  <div id="Eventos">
    <h1>Eventos activos</h1>
    <v-container>
      <v-row>
        <v-col v-for="(event, index) in events" :key="index" sm="12" md="4">
          <v-card>
            <v-img height="250px" src="https://pbs.twimg.com/media/Et0UCkRXUAA98fS.jpg" />
            <v-card-title>{{ event.name }}</v-card-title>
            <v-card-text>
              <p>{{ event.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary">Participar</v-btn>
              <v-btn outlined color="primary">Mas información</v-btn>
              <v-btn color="green">
                <v-icon color="white">mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Eventos',
  props: {
    events: Array,
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
