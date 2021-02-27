<template>
  <div id="Perfil">
    <Header />
      <div class="submenu">
        <button>
          Mi perfil
        </button>
        <button>
          Insignias
        </button>
        <button>
          Grupos
        </button>
        <button>
          Eventos
        </button>
      </div>
      <Perfil v-if="activePerfil" @toedit="toedit" />
      <EditarPerfil  v-if="activeEdit" @toperfil="toperfil" />
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
    }
  },
  methods: {
    toedit(){
      this.activePerfil =  false
      this.activeEdit = true
    },
    toperfil(){
      this.activePerfil =  true
      this.activeEdit = false
    }
  }
}
</script>

<style>

</style>