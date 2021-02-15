<template>
  <div class="inicio">
    <Cabecera />
    <Animated>
      <Login />
    </Animated>
    <Pie />
  </div>
</template>

<script>
import Animated from '../components/Animated.vue';
import Login from '../components/Login.vue';
export default {
  components: { Animated, Login },
  name: 'Inicio',
  Login: 'none',
};
</script>

<!-- Los estilos estan en assets/css -->
