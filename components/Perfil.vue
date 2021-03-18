<template>
  <div id="Perfil-comp">
    <v-container>
      <v-row>
        <v-col md="3">
          <v-card>
            <v-img src="https://picsum.photos/400" />
            <v-card-title>
              Nick del usuario
              <v-btn
                x-small
                style="display: block"
                @click="$emit('toedit')"
                absolute
                right
                >Editar</v-btn
              >
            </v-card-title>
            <v-card-subtitle>Web Developer/Frutero</v-card-subtitle>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptas
              recusandae labore molestiae aspernatur dolore officia quam amet accusantium
              eius? Vel delectus molestias dicta hic aperiam ipsam est quaerat
              repudiandae.</v-card-text
            >
            <v-card-actions>
              <v-row>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/react-icon.svg" /></v-avatar>
                </v-col>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/react-icon.svg" /></v-avatar>
                </v-col>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/react-icon.svg" /></v-avatar>
                </v-col>
                <v-col md="3">
                  <v-avatar><img src="~/assets/logos/react-icon.svg" /></v-avatar>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-row>
            <v-col md="12">
              <v-card color="grey" class="text-center">
                <h1>Insignias</h1>
                <v-row>
                  <v-col
                    class="text-center"
                    v-for="(badge, index) in minBadge"
                    :key="index"
                  >
                    <v-avatar color="white" size="80"
                      ><img src="~/assets/logos/svelte-icon.svg"
                    /></v-avatar>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-card class="text-center">
                <h1>Actividad Reciente</h1>
                <v-row v-for="n in 3" :key="n">
                  <v-list>
                    <v-list-item>
                      <v-list-item-content class="text-left">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Blanditiis modi doloremque placeat neque quas eaque aliquid
                          porro pariatur?
                        </p>
                      </v-list-item-content>
                      <v-list-item-avatar size="80">
                        <v-img src="https://picsum.photos/100"></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-list>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3">
          <v-card>
            <h2>Eventos de interes</h2>
            <v-row style="max-height: 560px; overflow: auto">
              <v-col md="12" v-for="(event, index) in minEvent" :key="index">
                <v-card>
                  <v-img src="https://picsum.photos/400" />
                  <v-card-title>{{ event.name }}</v-card-title>
                  <v-card-actions class="text-center">
                    <v-btn outlined>Mas informacion</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import '~/assets/css/Perfil-comp.css';

export default {
  name: 'Perfil-comp',
  props: {
    badges: Array,
    events: Array,
  },
  computed: {
    minBadge() {
      if (this.badges) {
        let reduced = this.badges.slice(0, 5);
        return reduced;
      }
    },
    minEvent() {
      console.log('this.events.length');
      console.log(this.events);
      if (this.events) {
        let reduced = this.events.slice(0, 5);
        return reduced;
      }
    },
  },
};
</script>

<style>
#Perfil-comp {
  margin-bottom: 70px;
}
#Perfil h1 {
  font-weight: 300;
  padding: 20px;
}
#Perfil h2 {
  font-weight: 300;
  padding: 16px;
}
</style>
