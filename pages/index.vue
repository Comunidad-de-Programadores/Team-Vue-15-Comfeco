<template>
  <div>
    <Header />
    <Animated>
      <Login />
    </Animated>
    <Footer />
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
