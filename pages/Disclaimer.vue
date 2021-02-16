<template>
  <div id="Disclaimer">
    <Header />
      <Animated>
        <Disclaimer />
      </Animated>
    <Footer />
  </div>
</template>

<script>
import Animated from '../components/Animated.vue';
import Header from '../components/Header.vue';
import Disclaimer from '../components/Disclaimer.vue';

export default {
  components: { Animated, Header, Disclaimer },
  name: 'Recupera',
  layout: 'none',
};
</script>

<style></style>
