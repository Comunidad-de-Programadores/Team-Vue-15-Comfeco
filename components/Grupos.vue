<template>
  <div id="Grupos">
    <h1>Mis grupos</h1>
    <v-container>
      <v-row>
        <v-col sm="12" md="3">
          <v-card>
            <v-toolbar color="secondary">
              <v-toolbar-title>Crazy techs</v-toolbar-title>
              <v-spacer />
              <v-avatar>
                <img src="https://picsum.photos/100">
              </v-avatar>
            </v-toolbar>
            <v-list>
              <v-list-item v-for="i in 6" :key="i">
                <v-list-item-content>
                  <v-list-item-title>Juan valdez - <small>Programador</small></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img src="https://picsum.photos/100" />
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-btn color="grey">Abandonar</v-btn>
              <v-btn color="grey">Chatear</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm="12" md="9">
          <v-row>
            <v-col md="6"><v-select label="Standard"></v-select></v-col>
            <v-col md="5"><v-text-field label="Regular"></v-text-field></v-col>
          </v-row>
          <v-row>
            <v-col md="4" v-for="n in 4" :key="n">
              <v-card>
                <v-img height="100px" src="https://picsum.photos/400" />
                <v-card-title>Sociable</v-card-title>
                <v-card-text>
                  <div class="text-center">
                    <v-chip color="secondary">Typescript</v-chip>
                    <v-chip color="red">Typescript</v-chip>
                  </div>
                  <h4>Los crypto</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" rounded>Unirse</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Grupos"
}
</script>

<style>
#Grupos{
  margin-bottom: 70px;
}
#Grupos h1{
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
}
</style>