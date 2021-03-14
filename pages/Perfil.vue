<template>
  <div id="Perfil">
    <Header />
      <div class="submenu">
        <v-container>
          <v-card>
            <v-row>
              <v-col class="text-center">
                <v-btn @click="toModule(4)" color="gray" x-large>Mi Perfil</v-btn>
              </v-col>
              <v-col class="text-center">
                <v-btn @click="toModule(1)" color="gray" x-large>Insignias</v-btn>
              </v-col>
              <v-col class="text-center">
                <v-btn @click="toModule(2)" color="gray" x-large>Grupos</v-btn>
              </v-col>
              <v-col class="text-center">
                <v-btn @click="toModule(3)" color="gray" x-large>Eventos</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </div>
      <Perfil v-show="submodulos[0]" @toedit="toModule(4)" />
      <Insignias v-show="submodulos[1]" />
      <Grupos v-show="submodulos[2]" />
      <Eventos v-show="submodulos[3]" />
      <EditarPerfil  v-show="submodulos[4]" @toperfil="toModule(0)" />
    <Footer />
  </div>
</template>

<script>
import '~/assets/css/Perfil.css'

export default {
  data(){
    return {
      activePerfil: true,
      activeEdit: false,
      submodulos: [true,false,false,false,false],
      moduloActivo: 0
    }
  },
  methods: {
    toModule(index){
      this.submodulos[this.moduloActivo] = false
      this.submodulos[index] = true
      this.moduloActivo = index
      this.$forceUpdate()
    }
  }
}
</script>

<style>

</style>