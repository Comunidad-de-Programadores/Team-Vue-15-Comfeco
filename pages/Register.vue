<template>
  <div id="Register">
    <Header />
    <Animated>
      <Register />
    </Animated>
    <Footer />
  </div>
</template>

<script>
import Animated from '../components/Animated.vue';
import Header from '../components/Header.vue';
import Register from '../components/Register.vue';

export default {
  components: { Animated, Header, Register },
  name: 'Inicio',
  layout: 'none',
};
</script>

<style></style>
