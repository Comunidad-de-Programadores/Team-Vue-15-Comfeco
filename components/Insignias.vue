<template>
  <div id="Insignias">
    <h1>Mis insignias</h1>
    <v-container>
      <v-row>
        <v-col v-for="i in 4" :key="i" sm="12" md="3">
          <v-card>
            <v-img height="300px" src="https://picsum.photos/400" />
            <v-card-title>Sociable</v-card-title>
            <v-card-text>
              <h4>Descripción</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <hr>
              <h4>¿Como ganarla?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias laboriosam nihil.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Insignias"
}
</script>

<style>
#Insignias{
  margin-bottom: 70px;
}
#Insignias h1{
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
}
</style>