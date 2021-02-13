<template>
  <div class="inicio">
    <Cabecera />
    <Animated-bg>
      <Card />
    </Animated-bg>
    <Pie />
  </div>
</template>

<script>
import AnimatedBg from '../components/Animated-bg.vue'
export default {
  components: { AnimatedBg },
  name: "Inicio",
  layout: "none"
}
</script>

<!-- Los estilos estan en assets/css -->