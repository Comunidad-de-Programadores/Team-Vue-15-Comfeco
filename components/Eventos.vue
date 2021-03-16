<template>
  <div id="Eventos">
    <h1>Eventos activos</h1>
    <v-container>
      <v-row>
        <v-col v-for="(event,index) in events" :key="index" sm="12" md="4">
          <v-card>
            <v-img height="300px" src="https://picsum.photos/400" />
            <v-card-title>{{event.name}}</v-card-title>
            <v-card-text>
              <p>{{event.description}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn>Participar</v-btn>
              <v-btn outlined>Mas informacion</v-btn>
              <v-btn>
                <v-icon>mdi-share-variant</v-icon>
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
  name: "Eventos",
  props: {
    events: Array
  }
}
</script>

<style>
#Eventos{
  margin-bottom: 70px;
}
#Eventos h1{
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
}
</style>