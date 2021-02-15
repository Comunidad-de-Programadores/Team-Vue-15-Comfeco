<template>
  <div class="Register">
    <Header />
    <Animated>
      <Card3 />
    </Animated>
    <Footer />
  </div>
</template>

<script>
import Animated from '../components/Animated.vue';
import Header from '../components/Header.vue';
import Card3 from '../components/Card3.vue';
export default {
  components: { Animated, Header, Card3 },
  name: 'Recupera',
  layout: 'none',
};
</script>

<style></style>
