<template>
  <div class="Register">
    <Cabecera />
    <Animated>
      <Card3 />
    </Animated>
    <Pie />
  </div>
</template>

<script>
import Animated from '../components/Animated.vue';
import Cabecera from '../components/Cabecera.vue';
import Card3 from '../components/Card3.vue';
export default {
  components: { Animated, Cabecera, Card3 },
  name: 'Recupera',
  layout: 'none',
};
</script>

<style></style>
