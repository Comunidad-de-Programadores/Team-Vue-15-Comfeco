<template>
  <div id="Recover">
    <Header />
      <Animated>
        <Recover />
      </Animated>
    <Footer />
  </div>
</template>

<script>
import Animated from '../components/Animated.vue';
import Header from '../components/Header.vue';
import Recover from '../components/Recover.vue';

export default {
  components: { Animated, Header, Recover },
  name: 'Recupera',
  layout: 'none',
};
</script>

<style></style>
