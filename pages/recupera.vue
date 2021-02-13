<template>
  <div class="Register">
    <Cabecera />
    <Animated-bg>
      <Card3 />
    </Animated-bg>
    <Pie />
  </div>
</template>

<script>
import AnimatedBg from '../components/Animated-bg.vue'
import Cabecera from '../components/Cabecera.vue'
export default {
  components: { AnimatedBg, Cabecera },
  name: "Inicio",
  layout: "none"
}
</script>

<style>
</style>